import React from 'react';
import type { PlayerProps } from '../../types/player.interface';

const Player = ({ vendor = 'KOLLUS', className, ...restProps }: PlayerProps) => {
  return vendor === 'KOLLUS' ? (
    <div className={`fc-player ${className}`} {...restProps}>
      콜러스
    </div>
  ) : (
    <div>다른 플레이어</div>
  );
};

export default Player;
