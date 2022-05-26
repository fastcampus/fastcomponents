export interface PlayerProps {
  src: string;
  command: CommandType;
  vendor?: 'KOLLUS' | 'YOUTUBE';
  volume?: number;
  speed?: number;
  position?: number;
  className?: string;
  isIntroVideo?: boolean;
  onScriptLoaded?: () => void;
  onLoaded?: () => void;
  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onProgress?: (args: PlayerProgress) => void;
  onDone?: () => void;
  onIntroVideoDone?: () => void;
  onVolumeChanged?: (volume: number) => void;
  onSpeedChanged?: (speed: number) => void;
  onSeeked?: () => void;
}

export interface PlayerProgress {
  percent: number;
  position: number;
  duration: number;
}

export type CommandType = 'none' | 'play' | 'pause';
