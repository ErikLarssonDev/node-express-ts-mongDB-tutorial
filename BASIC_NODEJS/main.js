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
// const fs = require("fs");
// fs.renameSync('./images', './images_files')
// fs.renameSync('./new_dir', './images_files/images_list')
// fs.readdirSync('./images_files/images_list').forEach(file => {
//     fs.renameSync('./images_files/images_list/' + file, './images_files/' + file)
// })
// fs.rmdir('./images_files/images_list', (err) => {
//     if (err) throw err
// })

// 16. Advanced node.js | readable stream
// const fs = require("fs");
// const stream = fs.createReadStream('./text.md', 'utf-8')
// stream.on('data', (data) => {
//     console.log(data)
// })
// stream.on('end', () => console.log('Finished.'))

// 17. Advanced node.js | writable stream
// const fs = require("fs");
// const readStream = fs.createReadStream("./text.md", "utf-8");
// const writeStream = fs.createWriteStream("./text_copy.md", "utf-8");
// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });
// readStream.on("end", () => {
//   writeStream.end()
// });
// writeStream.on('close', () => process.stdout.write('File copied! \n'))

// 18. Advanced node.js | pipes
// const fs = require("fs");
// const readStream = fs.createReadStream("./text.md", "utf-8");
// const writeStream = fs.createWriteStream("./text_copy.md", "utf-8");
// readStream.pipe(writeStream).on('error', (err) => console.log(err))
// writeStream.on('close', () => process.stdout.write('File copied! \n'))

// 19. Advanced node.js | https module
// const https = require('https') // Just type http if you don't want https
// const fs = require('fs')
// const options = {
//     hostname: 'en.wikipedia.org',
//     port: 443, // Port used to make a https request
//     path: '/wiki/Node.js',
//     method: 'GET'
// }
// const request = https.request(options, (res) => {
//     let responseBody = ""
//     res.setEncoding('utf-8')
//     res.on('data', (chunk) => {
//         console.log('--chunk', chunk.length)
//         responseBody += chunk
//     })
//     res.on('end', () => {
//         fs.writeFile('nodejs.html', responseBody, (err) => {
//             if (err) throw err
//         })
//     })
// })

// request.end()


