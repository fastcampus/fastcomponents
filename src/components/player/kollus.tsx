import React, { useEffect } from 'react';
import { loadScript } from '@day1co/browser-util';
import type { PlayerProps } from '../../types/player.interface';

const KOLLUS_SCRIPT_URL = 'https://file.kollus.com/vgcontroller/vg-controller-client.1.1.12.min.js';

const KollusPlayer = ({ className, src, ...restProps }: Omit<PlayerProps, 'vendor'>) => {
  useEffect(() => {
    console.log(src);
    loadScript(KOLLUS_SCRIPT_URL).then(() => {
      console.log('script added');
    });
  }, []);
  return <div className={`fc-player ${className}`} {...restProps}></div>;
};

export default KollusPlayer;
