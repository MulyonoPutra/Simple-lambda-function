/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
const fetch = require('node-fetch')
const Bluebird = require('bluebird')


fetch.Promise = Bluebird

async function httpRequest(url, headersParams, methodParam, payload) {
  try {
    const options = {
      headers: headersParams,
      method: methodParam,
      body: payload,
      family: 4,
    }
    const response = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => json)
      .catch((error) => { throw error })
      
    return response
  } catch (error) {
    throw error
  }
}

module.exports = {
  httpRequest,
}
