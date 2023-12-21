// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

console.log("PRELOAD!!!!");
contextBridge.exposeInMainWorld('electronAPI', {
    test_rpc_call: (arg: any) => ipcRenderer.send('test_rpc_call', arg)
});
