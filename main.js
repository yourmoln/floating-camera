const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    transparent: true,
    //alwaysOnTop: true,
  })
  win.setAlwaysOnTop(true, 'screen-saver')
  win.loadFile('index.html')
  win.setAspectRatio(1)
}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})