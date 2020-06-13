const validator = require("validator");

exports.getAny = function(request, key = "", defaultValue = null){
  try{
    if("query" in request && key in request.query){
      return request.query[key]
    } else if("params" in request && key in request.params){
      return params.params[key]
    } else if("body" in request && key in request.body){
      return request.body[key]
    } else {
      return defaultValue
    }
  }catch(err){
    console.error(err)
    return defaultValue
  }
}

exports.getNumber = function(request, key = "", defaultValue = 0){
  try{
    if("query" in request && key in request.query){
      return validator.toInt(request.query[key])
    } else if("params" in request && key in request.params){
      return validator.toInt(request.params[key])
    } else if("body" in request && key in request.body){
      return validator.toInt(request.body[key])
    } else {
      return defaultValue
    }
  }catch(err){
    console.error(err)
    return defaultValue
  }
}

exports.getObjectFromJsonString = function(request, key = "", defaultValue = {}){
  try{
    if("query" in request && key in request.query){
      return JSON.parse(String(request.query[key]))
    } else if("params" in request && key in request.params){
      return JSON.parse(String(request.params[key]))
    } else if("body" in request && key in request.body){
      return JSON.parse(String(request.body[key]))
    } else {
      return defaultValue
    }
  }catch(err){
    console.error(err)
    return defaultValue
  }
}

exports.getString = function(request, key = "", defaultValue = ""){
  try{
    if("query" in request && key in request.query){
      return String(request.query[key])
    } else if("params" in request && key in request.params){
      return String(request.params[key])
    } else if("body" in request && key in request.body){
      return String(request.body[key])
    } else {
      return defaultValue
    }
  }catch(err){
    console.error(err)
    return defaultValue
  }
}
