import JunzziEditor from '@/components/JunzziEditor/index';
import React, { useState } from 'react';
import styles from '@/containers/EditorPage/styles/editor.module.scss';
function EditorPage() {
  const [value, setValue] = useState<string>('');
  return (
    <div className={styles.wrapper}>
      <JunzziEditor value={value} setValue={setValue}></JunzziEditor>
      {/* <JunzziEditor value={value} setValue={setValue}></JunzziEditor> */}
      {/* <Result value={value}></Result> */}
    </div>
  );
}

export default EditorPage;

// index로 내보내면 index로 import 하게된다
// 파일명과 상관없이 내보내는 이름이 중요하다.
