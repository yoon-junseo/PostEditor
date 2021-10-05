import EditorScreen from '@/components/JunzziEditor/EditorScreen';
import EditorToolbar from '@/components/JunzziEditor/EditorToolbar';
import React from 'react';
type IEditorType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
function JunzziEditor({ value, setValue }: IEditorType) {
  return (
    <div>
      <EditorToolbar></EditorToolbar>
      <EditorScreen></EditorScreen>
    </div>
  );
}

export default JunzziEditor;
