import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

const codeEditor = () => {
  return <CodeMirror value="console.log('hello world!');" height="200px" />;
};

export default codeEditor;
