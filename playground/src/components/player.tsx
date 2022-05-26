import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Player as FCPlayer } from '../../../src';
import type { PlayerProgress, CommandType } from '../../../src';

const Player = () => {
  const onScriptLoaded = () => {
    console.log('onScriptLoaded');
  };
  const onLoaded = () => {
    console.log('onLoaded');
  };
  const onReady = () => {
    console.log('onReady');
  };
  const onPlay = () => {
    console.log('onPlay');
  };
  const onPause = () => {
    console.log('onPause');
  };
  const onProgress = (progress: PlayerProgress) => {
    console.log(progress);
    console.log('onProgress');
  };
  const onDone = () => {
    console.log('onDone');
  };
  const onIntroVideoDone = () => {
    console.log('onIntroVideoDone');
  };
  const onVolumeChanged = (volume: number) => {
    console.log(volume);
    console.log('onVolumeChanged');
  };
  const onSpeedChanged = (speed: number) => {
    console.log(speed);
    console.log('onSpeedChaned');
  };
  const onSeeked = () => {
    console.log('onSeeked');
  };

  const [command, setCommand] = useState<CommandType>('none');

  return (
    <div
      css={css`
        .kollus-player {
          display: inline-block;
          width: 1200px;
          height: 800px;
        }
      `}
    >
      <FCPlayer
        src="https://v.kr.kollus.com/s?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdWlkIjoic3VqaW5fcGFyay0xNzQwMjUiLCJleHB0IjoxNjUzNTkwNzQ2LCJtYyI6W3sibWNrZXkiOiJzSTB4RlVEQyIsIm1jcGYiOiJmYXN0Y2FtcC1wYzEtaGQtMSJ9XX0.5LVVqQt3F3LX1O_dR_a9UfJUlKgL0eSXEhKI2qSeRc0&custom_key=0b50155632326ca34e42550f10d6fca2c42c7b62a47eee4841aabd0cd1a913ea&s=0"
        command={command}
        className="kollus-player"
        onScriptLoaded={onScriptLoaded}
        onLoaded={onLoaded}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onProgress={onProgress}
        onDone={onDone}
        onIntroVideoDone={onIntroVideoDone}
        onVolumeChanged={onVolumeChanged}
        onSpeedChanged={onSpeedChanged}
        onSeeked={onSeeked}
      />
      <div>
        <button onClick={() => setCommand('play')}>Play</button>
        <button onClick={() => setCommand('pause')}>Pause</button>
      </div>
    </div>
  );
};

export default Player;
