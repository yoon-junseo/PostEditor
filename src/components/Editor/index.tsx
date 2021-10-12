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
      <EditorScreen setValue={setValue}></EditorScreen>
    </div>
  );
}

export default Editor;
