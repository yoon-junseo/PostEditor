import Editor from '@/components/Editor/index';
import React, { useState } from 'react';
import styles from '@/containers/EditorPage/styles/editor.module.scss';
function EditorPage() {
  const [value, setValue] = useState<string>('');
  return (
    <div className={styles.wrapper}>
      {/* 에디터 컴포넌트 */}
      <Editor value={value} setValue={setValue}></Editor>
    </div>
  );
}

export default EditorPage;
