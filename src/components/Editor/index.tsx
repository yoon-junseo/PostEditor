import 'react-quill/dist/quill.snow.css';
import '@/components/Editor/style/Editor.scss';
import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { uploadImage } from '@/lib/api/images';
import { BACKEND_URL } from '@/lib/api/client';
const Editor: React.FC = () => {
  const editorRef = useRef<ReactQuill>(null);

  // 이미지 탐색기(파인더) 띄우기
  const imageRef = useRef<HTMLInputElement>(null);
  const onClickImage = useCallback(() => {
    if (!imageRef.current) return;
    imageRef.current.click();
  }, []);

  // 이미지 업로드
  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const formData = new FormData();
      formData.append('img', files[0]);
      try {
        const {
          data: { url },
        } = await uploadImage(formData);
        if (editorRef.current) {
          const editor = editorRef.current.getEditor();
          const range = editor.getSelection();
          if (url && range) {
            editor.insertEmbed(range.index, 'image', BACKEND_URL + url);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const [value, setValue] = useState<string>('');
  const config = {
    modules: {
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          [{ align: [] }, { color: [] }, { background: [] }],
          ['clean'],
        ],
        handlers: { image: onClickImage },
      },
    },
    formats: [
      'header',
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'list',
      'bullet',
      'align',
      'color',
      'background',
      'image',
    ],
  };

  return (
    <div className="Editor">
      <ReactQuill {...config} ref={editorRef} value={value} />
      <input
        ref={imageRef}
        type="file"
        accept="image/png, image/jpeg"
        alt="이미지 업로드"
        onChange={onChangeFile}
        hidden
      />
    </div>
  );
};

export default Editor;
