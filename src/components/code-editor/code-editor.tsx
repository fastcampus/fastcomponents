import React, { useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { sql } from '@codemirror/lang-sql';
import { xml } from '@codemirror/lang-xml';
import { CodeEditorProps, SelectableLanguageType } from '../../types/code-editor.interface';

const languageExtensionMap = new Map([
  ['cpp', { extension: cpp, option: {} }],
  ['css', { extension: css, option: {} }],
  ['html', { extension: html, option: {} }],
  ['java', { extension: java, option: {} }],
  ['javascript', { extension: javascript, option: { jsx: true } }],
  ['json', { extension: json, option: {} }],
  ['markdown', { extension: markdown, option: {} }],
  ['python', { extension: python, option: {} }],
  ['rust', { extension: rust, option: {} }],
  ['sql', { extension: sql, option: {} }],
  ['xml', { extension: xml, option: {} }],
]);

function getLanguageExtension(language: SelectableLanguageType) {
  const selectedLanguage = languageExtensionMap.get(language);
  if (selectedLanguage) {
    return selectedLanguage.extension(selectedLanguage.option);
  } else {
    return javascript({ jsx: true });
  }
}

const codeEditor = ({
  language,
  theme,
  value,
  setValue,
  height = '100%',
  minHeight = '0vh',
  maxHeight = '100vh',
  width = '100%',
  minWidth = '0vw',
  maxWidth = '100vw',
  autoFocus = false,
  placeholder = '',
}: CodeEditorProps) => {
  useEffect(() => {
    getLanguageExtension(language);
  }, [language]);

  return (
    <CodeMirror
      value={value}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      autoFocus={autoFocus}
      placeholder={placeholder}
      theme={theme}
      extensions={[getLanguageExtension(language)]}
      onChange={(value) => setValue(value)}
    />
  );
};

export default codeEditor;
