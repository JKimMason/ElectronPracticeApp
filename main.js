const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow({});
    // Load html in window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes:true
    }));
    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
});

// Handle add item window
function createAddWindow(){
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: Add Shopping List Item,
    });
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file: ',
        slashes: true
    }));
    // Handle garbage Collection
    addWindow.on('close', function(){
        addWindow = null;
    });
}

// Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Clear Items',
                click() {
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
]
