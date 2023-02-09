// 6. Basic node.js | the global object
// console.log('text')
// global.console.log()
// global.process.stdout.write('What is node.js? \n')
// process.stdin.on('data', (data) => {
//     console.log(data.toString().trim())
//     process.exit()
// })

// 7. Basic node.js | readline
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.question("What's your name? ", (answer) => {
//     console.log(answer)
//     process.exit()
// })

// 8. Basic node.js | path & util modules
// const path = require('path')
// const util = require('util')
// console.log(path.basename(__filename))
// console.log(__filename)
// console.log(path.join(__dirname, "./path/file"))
// console.log(util.log(path.basename(__filename)))

// 9. Basic node.js | export and import
// const { fileExt } = require("./module.js");
// console.log(fileExt());

// 10. Basic node.js | listing directory files
/* FILE MANAGEMENT with fs module */
// const fs = require('fs')
// const files = fs.readdirSync("./")
// console.log(files)

// 11. Basic node.js | readfile
const fs = require("fs");
const text = fs.readFileSync("./text.md", { encoding: "utf-8" });
console.log(text);
