// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

console.log("PRELOAD!!!!");
contextBridge.exposeInMainWorld('electronAPI', {
    front_to_back_bidir: (args:any[]) => ipcRenderer.invoke('front_to_back_bidir', args),
    back_to_front: (callback:any) => ipcRenderer.on('back_to_front', (_event, arg) => callback(arg))
});
