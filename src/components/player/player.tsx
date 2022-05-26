import React from 'react';

const Player = ({ className, ...restProps }: { className: string }) => {
  return <div className={`fc-player ${className}`} {...restProps} />;
};

export default Player;
