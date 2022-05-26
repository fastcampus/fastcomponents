import React, { useEffect, useRef, useState } from 'react';
import { loadScript } from '@day1co/browser-util';
import type { PlayerProps } from '../../types/player.interface';

const KOLLUS_SCRIPT_URL = 'https://file.kollus.com/vgcontroller/vg-controller-client.latest.min.js';

const KollusPlayer = ({ className, src, onScriptLoaded, ...restProps }: Omit<PlayerProps, 'vendor'>) => {
  const iframeEl = useRef(null);
  const [vgController, setVgController] = useState(null);

  useEffect(() => {
    loadScript(KOLLUS_SCRIPT_URL).then(() => {
      if (onScriptLoaded) {
        onScriptLoaded();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setVgController(new window.VgControllerClient({ target_window: iframeEl.current }));
        // console.log(iframeEl.current);
      }
    });
  }, []);

  return (
    <div className={`fc-player ${className}`} {...restProps}>
      <iframe ref={iframeEl} />
    </div>
  );
};

export default KollusPlayer;
