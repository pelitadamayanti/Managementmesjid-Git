
const electron = require('electron')
const {BrowserWindow,app} = electron

let mainWindow
mainWin = () => {
    mainWindow = new BrowserWindow(
        {
         webPreferences :{
            nodeIntegration:true
         },
         width:1000,
         heigth:900,
         autoHideMenuBar:true
        })
    mainWindow.loadFile('index.Html')
}

app.on('ready',() =>{
    mainWin()
})