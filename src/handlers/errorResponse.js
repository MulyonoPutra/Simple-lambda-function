const code = require('../constants/errorCode')
const message = require('../constants/message')

const errorObject = (msg) => ({
        code: code[msg],
        message: message[msg],
    })

module.exports = {
    errorObject,
}
