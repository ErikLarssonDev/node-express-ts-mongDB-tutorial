// console.log('text')
// global.console.log()
// global.process.stdout.write('What is node.js? \n')
// process.stdin.on('data', (data) => {
//     console.log(data.toString().trim())
//     process.exit()
// })

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("What's your name? ", (answer) => {
    console.log(answer)
    process.exit()
})