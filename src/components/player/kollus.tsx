import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { loadScript } from '@day1co/browser-util';
import type { PlayerProps } from '../../types/player.interface';
import type { VgController } from '../../global';

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
  const iframeEl = useRef<HTMLIFrameElement | null>(null);
  const [vgController, setVgController] = useState<VgController | null>(null);

  useEffect(() => {
    loadScript(KOLLUS_SCRIPT_URL).then(() => {
      if (onScriptLoaded) {
        onScriptLoaded();
        setVgController(
          new window.VgControllerClient({ target_window: (iframeEl.current as HTMLIFrameElement).contentWindow })
        );
      }
    });
  }, []);

  useEffect(() => {
    if (vgController) {
      console.log('vgController init');

      vgController
        .on(VG_CONTROLLER_EVENT.LOADED, () => {
          if (onLoaded) {
            onLoaded();
          }
        })
        .on(VG_CONTROLLER_EVENT.READY, () => {
          if (onReady) {
            onReady();
          }
        })
        .on(VG_CONTROLLER_EVENT.PLAY, () => {
          if (onPlay) {
            onPlay();
          }
        })
        .on(VG_CONTROLLER_EVENT.PAUSE, () => {
          if (onPause) {
            onPause();
          }
        })
        .on(VG_CONTROLLER_EVENT.PROGRESS, (percent: number, position: number, duration: number) => {
          if (onProgress) {
            onProgress({ percent, position, duration });
          }
        })
        .on(VG_CONTROLLER_EVENT.DONE, () => {
          if (onDone) {
            onDone();
          }
        })
        .on(VG_CONTROLLER_EVENT.VOLUME_CHANGE, (volume: number) => {
          if (onVolumeChanged) {
            onVolumeChanged(volume);
          }
        })
        .on(VG_CONTROLLER_EVENT.SPEED_CHANGE, (speed: number) => {
          if (onSpeedChanged) {
            onSpeedChanged(speed);
          }
        })
        .on(VG_CONTROLLER_EVENT.SEEKED, () => {
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