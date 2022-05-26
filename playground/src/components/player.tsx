import React from 'react';
import { css } from '@emotion/react';
import { Player as FCPlayer } from '../../../src';

const Player = () => {
  const onScriptLoaded = () => {
    console.log('onScriptLoaded');
  };

  return (
    <div css={css``}>
      <FCPlayer
        src="https://v.kr.kollus.com/s?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdWlkIjoianduby00NTQ3NiIsImV4cHQiOjE2NTA5MTQ4MzcsIm1jIjpbeyJtY2tleSI6InZPWXhmVGVrIiwibWNwZiI6ImZhc3RjYW1wLXBjMS1oaWdoIn1dfQ.QLO7pjuoc21l1JOnBm0I4hYNdjgOSEn5CFL9Gsx_WxI&custom_key=0b50155632326ca34e42550f10d6fca2c42c7b62a47eee4841aabd0cd1a913ea&s=0"
        command="none"
        onScriptLoaded={onScriptLoaded}
      />
    </div>
  );
};

export default Player;
