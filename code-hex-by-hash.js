const shajs = require('sha.js')

module.exports = message => new shajs.sha256().update(message).digest('hex')
