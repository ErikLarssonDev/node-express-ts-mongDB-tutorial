const path = require('path')

const getFileExt = () => {
    return path.extname(path.basename(__filename))
}

// module.exports = getFileExt
module.exports = {
    fileExt: getFileExt
}