// OS MODULES
//   * The OS module in Node.js Provides utilities for interacting with the operating system.
//   * It enables developers to retrieve information about the system's hardware and operating Environment.

// const OsModules = require('os');
// console.log(OsModules.arch());
// console.log(OsModules.type());
// console.log(OsModules.tmpdir());
// console.log(OsModules.version());
// console.log(OsModules.homedir());
// console.log(OsModules.machine());
// console.log(OsModules.hostname());
// console.log(OsModules.loadavg());
// console.log(OsModules.freemem());

// Terminal Output
// x64
// Windows_NT
// C:\Users\admin\AppData\Local\Temp
// Windows 10 Pro
// C:\Users\admin
// x86_64
// DESKTOP-BR0ABEI
// [ 0, 0, 0 ]
// 1067429888


// PATH MODULES
//   * The path module in Node.js provides utilities for working with file and Directing Paths
//   * It is expecially useful for handling Cross-Platform path inconsistencies, ensuring that file path work seamlessly across diffirent operating Systems.


// const PathModules = require('path');
// console.log(PathModules.basename(__filename));
// console.log(PathModules.basename(__dirname));
// console.log(PathModules.dirname(__filename));
// console.log(PathModules.parse(__dirname));
// console.log(PathModules.isAbsolute(__dirname));
// console.log(PathModules.join(__filename));
// console.log(PathModules.resolve(__dirname));
// console.log(PathModules.normalize(__filename));


// Termianl Output
// server.js
// backend rough
// E:\backend rough        
// {
//   root: 'E:\\',
//   dir: 'E:\\',
//   base: 'backend rough',
//   ext: '',
//   name: 'backend rough' 
// }
// true
// E:\backend rough\server.js
// E:\backend rough
// E:\backend rough\server.js

//  file system (fs) module[Asy]
// create the read file

//  fs.readFile("./files/start.txt","utf-8",(err,data)=>{
//     if(err) throw err
//     console.log(data.toString())
//  })

const fs = require('fs');
const path = require('path');

// fs.readFile(path.join(__dirname, "files", "start.txt"), "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });  
// write the new file and read method 
// fs.writeFile(path.join(__dirname, "files", "start2.txt"), "HI HELLO SOWMIYA", (err) => { 
//     if (err) throw err;
//     fs.readFile(path.join(__dirname, "files", "start2.txt"), "utf-8", (err, data) => {
//          if (err) throw err;
//         console.log(data);
//      });
// });

// append or update fs modules
// fs.appendFile(path.join(__dirname, "files", "start2.txt"), " welocme to our shop", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     fs.readFile(path.join(__dirname, "files", "start2.txt"), "utf-8", (err, data) => {
//            if (err) throw err;
//           console.log(data);
//          });
// });  

// node.js using file name deleted
// const filePath = path.join(__dirname, './files','start1.txt');

// fs.unlink(filePath, (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully.');
// });

//file rename using path and fs modules
const oldPath = path.join(__dirname,'./files', 'start.txt');
const newPath = path.join(__dirname,'./files', 'newName.txt');

fs.rename(oldPath, newPath, (err) => {
    if (err) throw err;
    console.log('File renamed successfully.');
});


// folder delete in node.js
const dirPath = path.join(__dirname, './files');

fs.rm(dirPath, { recursive: true, force: true }, (err) => {
    if (err) throw err;  
    console.log('Directory removed successfully.');
});