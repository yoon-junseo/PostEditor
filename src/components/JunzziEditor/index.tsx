import EditorScreen from '@/components/JunzziEditor/EditorScreen';
import EditorToolbar from '@/components/JunzziEditor/EditorToolbar';
import React from 'react';
import styles from '@/containers/EditorPage/styles/editor.module.scss';
type IEditorType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
function JunzziEditor({ value, setValue }: IEditorType) {
  return (
    <div className={styles.editorWrapper}>
      <EditorToolbar></EditorToolbar>
      <EditorScreen setValue={setValue}></EditorScreen>
    </div>
  );
}

export default JunzziEditor;
