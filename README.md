# fastcomponents

[![GitHub version](https://badge.fury.io/gh/fastcampus%2Ffastcomponents.svg)](https://badge.fury.io/gh/fastcampus%2Ffastcomponents)

## 사용법

1. 사용할 프로젝트에서 `npm install @fastcampus/fastcomponents` 명령어로 설치합니다.
2. 필요한 곳에서 `import { ... } from '@fastcampus/fastcomponents'` 로 가져옵니다.
   - type이 필요한 컴포넌트는 `import type { ... } from '@fastcampus/fastcomponents' ` 으로 가져갈 수 있습니다.
3. 필요한 필수 props를 확인 후 컴포넌트를 사용합니다 ex) `<CodeEditor language="javascript" theme="light" value={value} setValue={setValue} />`
4. style은 사용하는 컴포넌트에서 지정해야 합니다.
   - 모든 컴포넌트는 조상(가장 바깥쪽) 태그에 `fc-[component]` 형태로 클래스네이밍이 되어 있어서 css로 선택해서 스타일링 할 수 있습니다.
   - 내부가 복잡한 컴포넌트는 추가로 css 선택자로 선택이 편리하도록 classname을 추가했습니다. ex) CodeEditor 컴포넌트의 `.value`

### 예시

```tsx
import React, { useState } from 'react';
import { css } from '@emotion/react';
// 아래와 같이 컴포넌트를 가져올 수 있습니다.
import { CodeEditor as FCCodeEditor } from '@fastcampus/fastcomponents';

const CodeEditor = () => {
  const [value, setValue] = useState('');
  return (
    <div
      // 4. 부모 태그에 css를 줘서 CodeEditor 컴포넌트에 스타일을 주는 예시입니다.
      css={css`
        .fc-code-editor {
          border: 0.1rem solid black;
        }
        .value {
          padding: 2rem;
          margin: 1rem;
          font-size: 1rem;
        }
      `}
    >
      <div className="value">{value}</div>
      <FCCodeEditor language="javascript" theme="light" value={value} setValue={setValue} />
    </div>
  );
};

export default CodeEditor;
```

## playground

만든 컴포넌트들을 테스트 해볼 수 있는 프로젝트 입니다.

### 실행 방법

아래 스크립트를 실행시켜 사용할 수 있습니다.

```sh
npm install
npm start
```
