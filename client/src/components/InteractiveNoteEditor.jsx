import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';

const InteractiveNoteEditor = ({ value, onChange }) => {
  return (
    <div className="rounded border border-gray-600 bg-gray-700">
      <CodeMirror
        value={value}
        height="250px"
        theme={oneDark}
        extensions={[markdown()]}
        onChange={(value, viewUpdate) => onChange(value)}
      />
    </div>
  );
};

export default InteractiveNoteEditor;
