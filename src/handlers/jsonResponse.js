const _ = require('lodash')

function json(data, headers = {}) {
  const { statusCode } = data
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/',
      'Access-Control-Allow-Credentials': true,
      ...headers,
    },
    body: JSON.stringify(_.pick(data, [
      'service',
      'webhookPayload',
      'errors',
      'access_token',
      'token_type',
      'expires_in',
      'scope',
    ])),
  }
}

module.exports = {
  json,
}
