const _ = require('lodash')

const info = (message) => {
  console.log(message)
}
const debug = (message) => {
  if (_.isEqual(process.env.LOG_MODE, 'DEBUG')) console.log(message)
}
const errorInfo = (message) => {
  console.error(message)
}

module.exports = {
    info,
    debug,
    errorInfo,
}
