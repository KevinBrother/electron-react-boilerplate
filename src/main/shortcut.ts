import { BrowserWindow } from 'electron';
import { isWin } from './util';

export const toggleDevTools = () => {
  const win = BrowserWindow.getFocusedWindow();

  if (win?.webContents) {
    const { webContents } = win;

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    webContents.isDevToolsOpened()
      ? webContents.closeDevTools()
      : webContents.openDevTools();
  }
};

export const SHORTCUTS = {
  Devtools: isWin() ? 'Control+Shift+P' : 'Command+Alt+P',
};
