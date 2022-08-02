const testMgr = require("./models/testmgr");
const { contextBridge} = require("electron")

const getNames = () => {
    console.log("Preload > getNames");
    return testMgr.getNames();

}

const addName = (name) => {
    testmgr.addName(name);

}

contextBridge.exposeInMainWorld("api",{
    getNames: getNames,
    addName: addName 
})