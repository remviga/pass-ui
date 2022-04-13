const path = require("path");
const { exec } = require("child_process");
const { app, BrowserWindow, ipcMain } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "../../view/dist/preload.js"),
    },
  });

  ipcMain.on("pass-generate", (_, name) => {
    exec(`pass generate "${name}"`, (err, stdout) => {
      console.log("err", err);
      console.log(`stdout: ${stdout}`);
      console.log(`name: ${name}`);
    });
  });

  win.loadFile(path.resolve(__dirname, "../../view/dist/index.html"));
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
