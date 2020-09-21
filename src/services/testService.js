/* eslint-disable max-len */
const {
  APPLICATION_JSON,  
  CACHE_OPTION,
} = require("../constants/httpHeaderValues");

const { GET } = require("../constants/httpMethod");
const requestManager = require("../handlers/requestManager");

  async function testServices(httpMethod,payload) {
  try {
    let requestURL = "https://api.banghasan.com/sholat/format/json/kota";
    let method = GET
    let load = null
    // let token = ''
    
    // check if any http method
    if(httpMethod!==''){
      method = httpMethod
    }
    
    // // check if any payload
    if(Object.keys(payload).length !== 0 && payload.constructor === Object){
      load = JSON.stringify(payload)
    }
    
    const response = await requestManager.httpRequest(
      requestURL,
      {
        "Cache-Control": CACHE_OPTION,
        "Content-Type": APPLICATION_JSON,
        Accept: "application/json",
        // Authorization: "Bearer " + token,
      },
      method,
      load
    );
    
    return response
    
  } catch (error) {
    return error;
  }
};  


module.exports = {
  testServices,  
}

