const electron  = require("electron");
const {Menu} = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.setFullScreen(true);
  mainWindow.loadURL("file://" + __dirname + "/1.html");
  mainWindow.on("closed", () => mainWindow = null);
}

app.on("ready", createWindow);

app.on("ready", () => {
  Menu.setApplicationMenu(Menu.buildFromTemplate([{
    label: "Application",
    submenu: [
      { label: "Quit",
        accelerator: "Command+Q",
        click: () => app.quit()
      }
    ]
  }]));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
