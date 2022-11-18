export function getIpcExample() {
  return new Promise((resolve, reject) => {
    // calling IPC exposed from preload script
    window.electron.ipcRenderer.once('ipc-example', (arg) => {
      // eslint-disable-next-line no-console
      console.log(arg);
      resolve(arg);
    });
  });
}

export function setIpcPing() {
  window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
}

export function getVersion() {
  return window.versions;
}

export function getProcess() {
  return window.process;
}
