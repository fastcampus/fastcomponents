import React from 'react';
import type { PlayerProps } from '../../types/player.interface';
import KollusPlayer from './kollus';

const Player = ({
  vendor = 'KOLLUS',
  src,
  command,
  className,
  position,
  onScriptLoaded,
  onLoaded,
  onReady,
  onPlay,
  onPause,
  onProgress,
  onDone,
  onVolumeChanged,
  onSpeedChanged,
  onSeeked,
  ...restProps
}: PlayerProps) => {
  return vendor === 'KOLLUS' ? (
    <KollusPlayer
      className={className}
      src={src}
      command={command}
      position={position}
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
      {...restProps}
    />
  ) : (
    <div>다른 플레이어</div>
  );
};

export default Player;
