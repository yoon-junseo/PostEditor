import { EditorScreenType } from '@/components/JunzziEditor/EditorScreen/types';
import React from 'react';
function EditorScreen({ setValue }: EditorScreenType) {
  const onChange = (e: React.FormEvent<HTMLDivElement>) => {
    setValue((e.target as HTMLDivElement).innerHTML);
  };
  return (
    <div style={{ marginTop: '100px' }} contentEditable onInput={onChange}>
      style
    </div>
  );
}

export default EditorScreen;
