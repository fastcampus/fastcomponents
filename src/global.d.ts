declare global {
  interface Window {
    VgControllerClient: {
      new (vgControllerOption: VgControllerOption): void;
    };
  }
}

export interface VgControllerOption {
  target_window: HTMLElement;
}
