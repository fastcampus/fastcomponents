import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Player as FCPlayer } from '../../../src';
import type { PlayerProgress, CommandType } from '../../../src';

const courseContentList = [
  {
    id: 1,
    src: 'https://v.kr.kollus.com/s?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdWlkIjoic3VqaW5fcGFyay0xNzQwMjUiLCJleHB0IjoxNjUzOTE0OTE0LCJtYyI6W3sibWNrZXkiOiJzSTB4RlVEQyIsIm1jcGYiOiJmYXN0Y2FtcC1wYzEtaGQtMSJ9XX0.93Qe6Z4f-gcXg9QVjSs2phmWhswcHEHaH6e5mhGqhsY&custom_key=0b50155632326ca34e42550f10d6fca2c42c7b62a47eee4841aabd0cd1a913ea&s=0',
  },
  {
    id: 2,
    src: 'https://v.kr.kollus.com/s?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdWlkIjoic3VqaW5fcGFyay0xNzQwMjUiLCJleHB0IjoxNjUzOTE0OTYxLCJtYyI6W3sibWNrZXkiOiI2azVsaFJZdCIsIm1jcGYiOiJmYXN0Y2FtcC1wYzEtaGQtMSJ9XX0.uflFhSL33XKrnzr-ZEaYzIVX-3Yzx0gjtzNwMl2zlmY&custom_key=0b50155632326ca34e42550f10d6fca2c42c7b62a47eee4841aabd0cd1a913ea&s=0',
  },
  {
    id: 3,
    src: 'https://v.kr.kollus.com/s?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdWlkIjoic3VqaW5fcGFyay0xNzQwMjUiLCJleHB0IjoxNjUzOTE0OTgzLCJtYyI6W3sibWNrZXkiOiJNZmdOaFhoSSIsIm1jcGYiOiJmYXN0Y2FtcC1wYzEtaGQtMSJ9XX0.lwGZ9bZaYQUfEHQUNJdV32NMjGhuPFR1929jUAMERpI&custom_key=0b50155632326ca34e42550f10d6fca2c42c7b62a47eee4841aabd0cd1a913ea&s=0',
  },
];

const Player = () => {
  const [command, setCommand] = useState<CommandType>('none');
  const [position, setPosition] = useState(0);
  const [playerSrc, setPlayerSrc] = useState(courseContentList[0].src);

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
        src={playerSrc}
        command={command}
        position={position}
        className="kollus-player"
        onScriptLoaded={onScriptLoaded}
        onLoaded={onLoaded}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onProgress={onProgress}
        onDone={onDone}
        onVolumeChanged={onVolumeChanged}
        onSpeedChanged={onSpeedChanged}
        onSeeked={onSeeked}
      />
      <div>
        {courseContentList.map((content) => (
          <button key={content.id} onClick={() => setPlayerSrc(content.src)}>
            코스컨텐츠{content.id}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => setCommand('play')}>Play</button>
        <button onClick={() => setCommand('pause')}>Pause</button>
        <input type="number" value={position} onChange={(e) => setPosition(Number(e.target.value))} />
      </div>
    </div>
  );
};

export default Player;
