const {app, BrowserWindow} = require('electron')
// include Node.js 'path' module
const path = require('path')
let mainWindow
process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV != 'production' ? true : false
// console.log(process.platform)
const isWin = process.platform == 'win32' ? true : false

app.commandLine.appendSwitch('trace-warnings')

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js')
        // }
        resizable : isDev
    })
    
    mainWindow.loadFile('index.html')   
    // mainWindow.loadURL("https://rbc.ru")
}

// app.on()
app.whenReady().then(() => {
    createMainWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })

      app.on('window-all-closed', function () {
        if (isWin) app.quit()
      })
  })

  app.allowRendererProcessReuse = true

