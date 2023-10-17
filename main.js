const { screen, BrowserWindow, app } = require("electron");

let win;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    maxWidth: width,
    maxHeight: height,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false, // Allow loading local resources
    },
  });

  win.loadFile("dist/index.html");

  win.on("closed", () => {
    win = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
});
