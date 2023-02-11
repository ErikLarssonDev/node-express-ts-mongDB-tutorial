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
// const fs = require("fs");
// const text = fs.readFileSync("./text.md", { encoding: "utf-8" });
// console.log(text);

// 12. Basic node.js | append write files
// const fs = require("fs");
// // writeFile will replace the file if it exists
// fs.writeFile("new_file.txt", "example", { flag: 'a+' }, (err) => { // { flag: 'a+' }, append to file, if you can't find the file --> create new file.
//     if (err) throw err
// })

// 13. Basic node.js | creating directories
// const fs = require("fs");
// if(fs.existsSync('new_dir')) return
// fs.mkdir('new_dir', (err) => {
//     if (err) throw err
// })

// 14. Basic node.js | rename, move and rename files
// const fs = require("fs");
// fs.renameSync('./new_file.txt', 'new_file_renamed.txt')
// fs.renameSync('./new_file_renamed.txt', './new_dir/new_file_renamed.txt') // You can move and rename a file at the same time if you want.
// fs.unlinkSync('./new_dir/new_file_renamed.txt')

// 15. Basic node.js | rename, move and rename directories
const fs = require("fs");
// fs.renameSync('./images', './images_files')
// fs.renameSync('./new_dir', './images_files/images_list')
// fs.readdirSync('./images_files/images_list').forEach(file => {
//     fs.renameSync('./images_files/images_list/' + file, './images_files/' + file)
// })
fs.rmdir('./images_files/images_list', (err) => {
    if (err) throw err
})