// OS MODULES
//   * The OS module in Node.js Provides utilities for interacting with the operating system.
//   * It enables developers to retrieve information about the system's hardware and operating Environment.

const OsModules = require('os');
console.log(OsModules.arch());
console.log(OsModules.type());
console.log(OsModules.tmpdir());
console.log(OsModules.version());
console.log(OsModules.homedir());
console.log(OsModules.machine());
console.log(OsModules.hostname());
console.log(OsModules.loadavg());
console.log(OsModules.freemem());

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


const PathModules = require('path');
console.log(PathModules.basename(__filename));
console.log(PathModules.basename(__dirname));
console.log(PathModules.dirname(__filename));
console.log(PathModules.parse(__dirname));
console.log(PathModules.isAbsolute(__dirname));
console.log(PathModules.join(__filename));
console.log(PathModules.resolve(__dirname));
console.log(PathModules.normalize(__filename));


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
