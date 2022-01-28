import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import type { Option, Value } from '../../../../src/types/select.interface';
import type { SelectableLanguageType, SelectableThemeType } from '../../../../src/types/code-editor.interface';
import { CodeEditor, Select } from '../../../../src';

const CodeEditorLayout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Value[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<Value[]>([]);
  const [editorValue, setEditorValue] = useState('');
  const languageList: Option[] = [
    {
      value: 'cpp',
      label: 'C++',
    },
    {
      value: 'css',
      label: 'CSS',
    },
    {
      value: 'html',
      label: 'HTML',
    },
    {
      value: 'java',
      label: 'Java',
    },
    {
      value: 'javascript',
      label: 'JavaScript',
    },
    {
      value: 'json',
      label: 'JSON',
    },
    {
      value: 'markdown',
      label: 'Markdown',
    },
    {
      value: 'python',
      label: 'Python',
    },
    {
      value: 'rust',
      label: 'Rust',
    },
    {
      value: 'sql',
      label: 'SQL',
    },
    {
      value: 'xml',
      label: 'XML',
    },
  ];
  const themeList: Option[] = [
    {
      value: 'light',
      label: 'light',
    },
    {
      value: 'dark',
      label: 'dark',
    },
  ];

  useEffect(() => {
    console.info(editorValue);
  }, [editorValue]);

  return (
    <section>
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        code editor {selectedLanguage} {selectedTheme}
      </h1>
      <div
        css={css`
          width: 50rem;
          height: 50rem;

          font-size: 2rem;
        `}
      >
        <CodeEditor
          value={editorValue}
          height="50rem"
          width="100%"
          placeholder="may the SOURCE be with you."
          setValue={setEditorValue}
          language={selectedLanguage[0] as SelectableLanguageType}
          theme={selectedTheme[0] as SelectableThemeType}
        />
      </div>
      <div
        css={css`
          display: flex;

          .fc-select {
            cursor: pointer;
            width: 15rem;
            margin-right: 1rem;
            border: 0.2rem solid black;
            .preview {
              height: 2rem;
            }
            .selected {
              background-color: rgba(0, 255, 0, 0.2);
            }
            .options {
              background-color: gray;
              padding: 0 1rem;
              border: 0.2rem solid gray;
              top: -2rem;
              & > div {
                font-size: 2rem;
                &:hover {
                  color: white;
                }
              }
            }
          }
        `}
      >
        Select language <Select options={languageList} setValue={(values) => setSelectedLanguage(values)} />
        Select Theme
        <Select options={themeList} setValue={(values) => setSelectedTheme(values)} />
      </div>
    </section>
  );
};

export default CodeEditorLayout;
