import React from 'react';
import type { PlayerProps } from '../../types/player.interface';
import KollusPlayer from './kollus';

const Player = ({ vendor = 'KOLLUS', src, command, className, ...restProps }: PlayerProps) => {
  return vendor === 'KOLLUS' ? (
    <KollusPlayer className={className} src={src} command={command} {...restProps} />
  ) : (
    <div>다른 플레이어</div>
  );
};

export default Player;
