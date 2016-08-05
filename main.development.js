import { app, BrowserWindow, Menu, shell, Tray } from 'electron';
import path from 'path';

const assetsDirectory = path.join(__dirname, 'app/_assets')

let tray = undefined
let window = undefined

let menu;
let template;
let mainWindow = null;

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer'); // eslint-disable-line global-require
    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ];
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    for (const name of extensions) {
      try {
        await installer.default(installer[name], forceDownload);
      } catch (e) {} // eslint-disable-line
    }
  }
};


// const createMainWindow = async() => {
//   await installExtensions();
//
//   mainWindow = new BrowserWindow({
//     show: false,
//     width: 1024,
//     height: 728
//   });
//
//   mainWindow.loadURL(`file://${__dirname}/app/app.html`);
//
//   mainWindow.webContents.on('did-finish-load', () => {
//     mainWindow.show();
//     mainWindow.focus();
//   });
//
//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
//
//   if (process.env.NODE_ENV === 'development') {
//     mainWindow.openDevTools();
//     mainWindow.webContents.on('context-menu', (e, props) => {
//       const { x, y } = props;
//
//       Menu.buildFromTemplate([{
//         label: 'Inspect element',
//         click() {
//           mainWindow.inspectElement(x, y);
//         }
//       }]).popup(mainWindow);
//     });
//   }
//
//   if (process.platform === 'darwin') {
//     template = [{
//       label: 'Electron',
//       submenu: [{
//         label: 'About ElectronReact',
//         selector: 'orderFrontStandardAboutPanel:'
//       }, {
//         type: 'separator'
//       }, {
//         label: 'Services',
//         submenu: []
//       }, {
//         type: 'separator'
//       }, {
//         label: 'Hide ElectronReact',
//         accelerator: 'Command+H',
//         selector: 'hide:'
//       }, {
//         label: 'Hide Others',
//         accelerator: 'Command+Shift+H',
//         selector: 'hideOtherApplications:'
//       }, {
//         label: 'Show All',
//         selector: 'unhideAllApplications:'
//       }, {
//         type: 'separator'
//       }, {
//         label: 'Quit',
//         accelerator: 'Command+Q',
//         click() {
//           app.quit();
//         }
//       }]
//     }, {
//       label: 'Edit',
//       submenu: [{
//         label: 'Undo',
//         accelerator: 'Command+Z',
//         selector: 'undo:'
//       }, {
//         label: 'Redo',
//         accelerator: 'Shift+Command+Z',
//         selector: 'redo:'
//       }, {
//         type: 'separator'
//       }, {
//         label: 'Cut',
//         accelerator: 'Command+X',
//         selector: 'cut:'
//       }, {
//         label: 'Copy',
//         accelerator: 'Command+C',
//         selector: 'copy:'
//       }, {
//         label: 'Paste',
//         accelerator: 'Command+V',
//         selector: 'paste:'
//       }, {
//         label: 'Select All',
//         accelerator: 'Command+A',
//         selector: 'selectAll:'
//       }]
//     }, {
//       label: 'View',
//       submenu: (process.env.NODE_ENV === 'development') ? [{
//         label: 'Reload',
//         accelerator: 'Command+R',
//         click() {
//           mainWindow.webContents.reload();
//         }
//       }, {
//         label: 'Toggle Full Screen',
//         accelerator: 'Ctrl+Command+F',
//         click() {
//           mainWindow.setFullScreen(!mainWindow.isFullScreen());
//         }
//       }, {
//         label: 'Toggle Developer Tools',
//         accelerator: 'Alt+Command+I',
//         click() {
//           mainWindow.toggleDevTools();
//         }
//       }] : [{
//         label: 'Toggle Full Screen',
//         accelerator: 'Ctrl+Command+F',
//         click() {
//           mainWindow.setFullScreen(!mainWindow.isFullScreen());
//         }
//       }]
//     }, {
//       label: 'Window',
//       submenu: [{
//         label: 'Minimize',
//         accelerator: 'Command+M',
//         selector: 'performMiniaturize:'
//       }, {
//         label: 'Close',
//         accelerator: 'Command+W',
//         selector: 'performClose:'
//       }, {
//         type: 'separator'
//       }, {
//         label: 'Bring All to Front',
//         selector: 'arrangeInFront:'
//       }]
//     }, {
//       label: 'Help',
//       submenu: [{
//         label: 'Learn More',
//         click() {
//           shell.openExternal('http://electron.atom.io');
//         }
//       }, {
//         label: 'Documentation',
//         click() {
//           shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme');
//         }
//       }, {
//         label: 'Community Discussions',
//         click() {
//           shell.openExternal('https://discuss.atom.io/c/electron');
//         }
//       }, {
//         label: 'Search Issues',
//         click() {
//           shell.openExternal('https://github.com/atom/electron/issues');
//         }
//       }]
//     }];
//
//     menu = Menu.buildFromTemplate(template);
//     Menu.setApplicationMenu(menu);
//   } else {
//     template = [{
//       label: '&File',
//       submenu: [{
//         label: '&Open',
//         accelerator: 'Ctrl+O'
//       }, {
//         label: '&Close',
//         accelerator: 'Ctrl+W',
//         click() {
//           mainWindow.close();
//         }
//       }]
//     }, {
//       label: '&View',
//       submenu: (process.env.NODE_ENV === 'development') ? [{
//         label: '&Reload',
//         accelerator: 'Ctrl+R',
//         click() {
//           mainWindow.webContents.reload();
//         }
//       }, {
//         label: 'Toggle &Full Screen',
//         accelerator: 'F11',
//         click() {
//           mainWindow.setFullScreen(!mainWindow.isFullScreen());
//         }
//       }, {
//         label: 'Toggle &Developer Tools',
//         accelerator: 'Alt+Ctrl+I',
//         click() {
//           mainWindow.toggleDevTools();
//         }
//       }] : [{
//         label: 'Toggle &Full Screen',
//         accelerator: 'F11',
//         click() {
//           mainWindow.setFullScreen(!mainWindow.isFullScreen());
//         }
//       }]
//     }, {
//       label: 'Help',
//       submenu: [{
//         label: 'Learn More',
//         click() {
//           shell.openExternal('http://electron.atom.io');
//         }
//       }, {
//         label: 'Documentation',
//         click() {
//           shell.openExternal('https://github.com/atom/electron/tree/master/docs#readme');
//         }
//       }, {
//         label: 'Community Discussions',
//         click() {
//           shell.openExternal('https://discuss.atom.io/c/electron');
//         }
//       }, {
//         label: 'Search Issues',
//         click() {
//           shell.openExternal('https://github.com/atom/electron/issues');
//         }
//       }]
//     }];
//     menu = Menu.buildFromTemplate(template);
//     mainWindow.setMenu(menu);
//   }
// }
//
// app.on('ready', async () => {
//     createMainWindow();
// });

const createTray = () => {
  tray = new Tray(path.join(assetsDirectory, '/images/8x8-new-Logo-16x16.png'));
  tray.on('right-click', toggleWindow)
  tray.on('double-click', toggleWindow)
  tray.on('click', function (event) {
    toggleWindow()

    // Show devtools when command clicked
    if (window.isVisible() && process.defaultApp && event.metaKey) {
      window.openDevTools({mode: 'detach'})
    }
  })
}

const getWindowPosition = () => {
  const windowBounds = window.getBounds()
  const trayBounds = tray.getBounds()

  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4)

  return {x: x, y: y}
}

const createWindow = () => {
  window = new BrowserWindow({
    width: 300,
    height: 600,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      // Prevents renderer process code from not running when window is
      // hidden
      backgroundThrottling: false
    }
  })

  //window.loadURL(`file://${path.join(__dirname, 'app2/index.html')}`)
  window.loadURL(`file://${path.join(__dirname, 'app/app.html#/contactlist')}`)

  // Hide the window when it loses focus
  window.on('blur', () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide()
    }
  })
}

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide()
  } else {
    showWindow()
  }
}

const showWindow = () => {
  const position = getWindowPosition()
  window.setPosition(position.x, position.y, false)
  window.show()
  window.focus()
}

app.on('ready', () => {
  createTray()
  createWindow()
})
