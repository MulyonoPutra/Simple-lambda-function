"use strict";

const _ = require("lodash");
const {
  BAD_REQUEST,
  UNAUTHORIZED,
  SUCCESS_CODE,
} = require("../constants/httpCode");
const testService = require("../services/testService");

module.exports.handler = async (event, context, callback) => {
  let response = null;
  try {
    let message = "Success";
    let httpMethod = "GET";
    let payload = {};
    let parsed = null;

    if (event.path === "/testFunction") {
      
      if (event.body) {
        parsed = JSON.parse(event.body);
        payload = parsed;
      }
      
      //check if any http method
      if (event.httpMethod) {
        httpMethod = event.httpMethod;
      }
      
      const responseBody = await testService.testServices(
        httpMethod,
        payload
      );
      response = {
        statusCode: SUCCESS_CODE,
        headers: {
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
  },
        body: JSON.stringify({
          message,
          responseBody,
          event
        }),
      };
    }else {
      response = {
        statusCode: BAD_REQUEST,
        headers: {
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
  },
        body: JSON.stringify({
          message: "Bad Request",
        }),
      };
    }
    callback(null, response);
  } catch (error) {
    console.log("masuk error");
    response = {
      statusCode: UNAUTHORIZED,
      headers: {
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
  },
      errors: [error.message],
    };
    callback(null, response);
  }
};
