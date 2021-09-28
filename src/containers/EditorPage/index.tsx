import Button from '@/components/Button';
import Editor from '@/components/Editor';
import React from 'react';

function EditorPage() {
  return (
    <div>
      <Editor></Editor>
    </div>
  );
}

export default EditorPage;

// index로 내보내면 index로 import 하게된다
// 파일명과 상관없이 내보내는 이름이 중요하다.
