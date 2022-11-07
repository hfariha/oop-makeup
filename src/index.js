//import Menu, BrowserWindow and app modules in our app
const { app, BrowserWindow, Menu,ipcMain } = require('electron');
const path = require('path'); 
const{ contextIsolated } = require('process');

var mainWindow; //declare var (on top)
var addWindow; //(on top)

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => { // bila launch electron dia bkk windows + link ngn index.html
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js' ),
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  var mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
  Menu.setApplicationMenu(mainMenu);
  
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on("item:add", function(e,item){ //cara dia terima dr add.js
  mainWindow.webContents.send("item:add", item),
  addWindow.close()
})
// Create an array of menus
var mainMenuTemplate = [ //array of object 
  {
  label:'File', //object label, value file
  submenu: [
    
    {
      label: 'Quit/Exit App',
      click(){ //event listener utk click
        app.quit(); // it will execute quit function
      }
    }
    ]
  },
 ];
 
