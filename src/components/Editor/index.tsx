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
        π³οΈβπ μ€μ°μ μλν° μΈμμ μ¨ κ±Έ νμν©λλ€. π³οΈβπ
      </div>
      <EditorScreen setValue={setValue}></EditorScreen>
    </div>
  );
}

export default Editor;
