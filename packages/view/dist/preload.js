const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("passUI", {
  generate: (name) => ipcRenderer.send("pass-generate", name),
});
