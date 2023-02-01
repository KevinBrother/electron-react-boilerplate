import { Channels } from 'main/preload';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
        invoke(channel: string, ...args: any[]): Promise<any>;
      };
    };
    versions: {
      node: () => string;
      chrome: () => string;
      electron: () => string;
    };
    process: {
      pid: () => number;
      ppid: () => number;
    };
  }
}

export {};
