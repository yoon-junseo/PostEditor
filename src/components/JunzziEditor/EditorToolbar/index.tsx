import React from 'react';
import Icon from '@/components/Icon';
import * as icons from '@/components/Icon/icons';
import styles from '@/containers/EditorPage/styles/editor.module.scss';
type IEditorToolbarButtonType = {
  icon: keyof typeof icons;
  text: string;
  color?: string;
};

function EditorToolbarButton({ icon, text, color }: IEditorToolbarButtonType) {
  return (
    <div className={styles.editorToolbarItemWrapper}>
      <Icon icon={icon}></Icon>
      <span>{text}</span>
    </div>
  );
}

// function EditorToolbarSelect({ icon, text, color }) {}
function EditorToolbar() {
  return (
    <div className={styles.editorToolbarWrapper}>
      <EditorToolbarButton icon={'Image'} text="이미지"></EditorToolbarButton>
      <EditorToolbarButton icon={'Bold'} text="굵기"></EditorToolbarButton>
      <EditorToolbarButton icon={'Seperator'} text="구분선"></EditorToolbarButton>
      <EditorToolbarButton icon={'Seperator'} text="구분선"></EditorToolbarButton>
      <EditorToolbarButton icon={'Seperator'} text="구분선"></EditorToolbarButton>
      <EditorToolbarButton icon={'Seperator'} text="구분선"></EditorToolbarButton>
      <EditorToolbarButton icon={'Seperator'} text="구분선"></EditorToolbarButton>
    </div>
  );
}

export default EditorToolbar;
