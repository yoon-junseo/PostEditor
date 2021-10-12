import EditorScreen from '@/components/Editor/EditorScreen';
import EditorToolbar from '@/components/Editor/EditorToolbar';
import React from 'react';
import styles from '@/containers/EditorPage/styles/editor.module.scss';
type IEditorType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
function Editor({ value, setValue }: IEditorType) {
  return (
    <div className={styles.editorWrapper}>
      <EditorToolbar></EditorToolbar>
      <div
        style={{
          marginTop: '100px',
          fontSize: '32px',
          display: 'flex',
          justifyContent: 'center',
          color: 'pink',
          fontWeight: 'bolder',
        }}
      >
        🏳️‍🌈 준찌의 에디터 세상에 온 걸 환영합니다. 🏳️‍🌈
      </div>
      <EditorScreen setValue={setValue}></EditorScreen>
    </div>
  );
}

export default Editor;
