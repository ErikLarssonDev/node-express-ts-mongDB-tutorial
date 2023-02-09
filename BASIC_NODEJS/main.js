console.log('text')
global.console.log()
global.process.stdout.write('What is node.js? \n')
process.stdin.on('data', (data) => {
    console.log(data.toString().trim())
    process.exit()
})
