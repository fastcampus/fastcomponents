import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { loadScript } from '@day1co/browser-util';
import type { PlayerProps } from '../../types/player.interface';

const KOLLUS_SCRIPT_URL = 'https://file.kollus.com/vgcontroller/vg-controller-client.latest.min.js';

const VG_CONTROLLER_EVENT = {
  PLAY: 'play',
  PAUSE: 'pause',
  LOADED: 'loaded',
  READY: 'ready',
  PROGRESS: 'progress',
  DONE: 'done',
  VOLUME_CHANGE: 'volumechange',
  SPEED_CHANGE: 'speedchange',
  SEEKED: 'seeked',
};

const KollusPlayer = ({
  className,
  src,
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
}: Omit<PlayerProps, 'vendor'>) => {
  const iframeEl = useRef(null);
  const [vgController, setVgController] = useState(null);

  useEffect(() => {
    loadScript(KOLLUS_SCRIPT_URL).then(() => {
      if (onScriptLoaded) {
        onScriptLoaded();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setVgController(new window.VgControllerClient({ target_window: iframeEl.current.contentWindow }));
      }
    });
  }, []);

  useEffect(() => {
    if (vgController) {
      console.log('vgController init');

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.LOADED, () => {
        if (onLoaded) {
          onLoaded();
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.READY, () => {
        if (onReady) {
          onReady();
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.PLAY, () => {
        if (onPlay) {
          onPlay();
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.PAUSE, () => {
        if (onPause) {
          onPause();
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.PROGRESS, (percent: number, position: number, duration: number) => {
        if (onProgress) {
          onProgress({ percent, position, duration });
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.DONE, () => {
        if (onDone) {
          onDone();
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.VOLUME_CHANGE, (volume) => {
        if (onVolumeChanged) {
          onVolumeChanged(volume);
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.SPEED_CHANGE, (speed) => {
        if (onSpeedChanged) {
          onSpeedChanged(speed);
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vgController.on(VG_CONTROLLER_EVENT.SEEKED, () => {
        if (onSeeked) {
          onSeeked();
        }
      });
    }
  }, [vgController]);

  return (
    <div className={`fc-player ${className}`} {...restProps}>
      <iframe
        css={css`
          width: 100%;
          height: 100%;
          border: none;
        `}
        src={src}
        ref={iframeEl}
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
};

export default KollusPlayer;
