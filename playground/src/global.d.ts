declare global {
  interface Window {
    VgControllerClient: {
      new (vgControllerOption: VgControllerOption): VgController;
    };
  }
}

export interface VgControllerOption {
  target_window: any;
}

export interface VgController {
  on(eventType: string, callback: () => void): this;
  on(eventType: string, callback: (percent: number, position: number, duration: number) => void): this;
  on(eventType: string, callback: (is_muted: boolean) => void): this;
  on(eventType: string, callback: (volume: number) => void): this;
  on(eventType: string, callback: (speed: number) => void): this;
  play(): void;
  play(position: number): void;
  pause(): void;
}
