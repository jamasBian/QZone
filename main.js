'use strict';

const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const injectCSS = `
div#layPositionRoot{width:100%;}
div.lay_grid{width:100%;}
div.lay_lace_m{width:100%;}
div.lay_pageContainer{width:100%;}
div.page_home_normal {width:100%;}
div.gridlet_1 {width:20%;}
div#QM_Group_Container_2 {width:75%;}
div.shop_item{display:none;}
`;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  const path = require('path');
  const imgPath = './assets/icon.png';
  mainWindow = new BrowserWindow({icon: imgPath});

  // and load the index.html of the app.
  mainWindow.loadURL('https://user.qzone.qq.com/136779864');
  mainWindow.setIcon(imgPath);
  mainWindow.maximize();
  mainWindow.webContents.insertCSS(injectCSS);
  
  

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS(injectCSS);
 });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
