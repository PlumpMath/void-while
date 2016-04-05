'use strict';
var Menu = require('menu');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.setFullScreen(true);
  mainWindow.loadURL('file://' + __dirname + '/index5.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('ready', function () {
  var template = [{
     label: "Application",
     submenu: [
         { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
     ]}
 ];
 Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
