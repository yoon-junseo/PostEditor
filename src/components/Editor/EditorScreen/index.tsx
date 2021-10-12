import { EditorScreenType } from '@/components/Editor/EditorScreen/types';
import React from 'react';
import styles from '@/containers/EditorPage/styles/editor.module.scss';
function EditorScreen({ setValue }: EditorScreenType) {
  const onChange = (e: React.FormEvent<HTMLDivElement>) => {
    setValue((e.target as HTMLDivElement).innerHTML);
  };
  return (
    <div
      className={styles.editorScreenWrapper}
      contentEditable
      onInput={onChange}
      onSelect={e => {
        console.log(e);
      }}
      onTouchStart={e => {
        console.log(e);
      }}
    >
      style
    </div>
  );
}

export default EditorScreen;
