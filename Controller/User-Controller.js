var userService = require('../Service/studentService') 
var serializer = require('../utils/response-statuscode');
const jwt = require('jsonwebtoken');
var secret = require('../constant/secret-constant')

module.exports.generateToken = (email) => {
    const token = jwt.sign({ email },
      'xposure-secret-key',
      {
        expiresIn: '24h', // expires in 24 hours
      });
    return token;
  };

module.exports.validateToken = (token) => {

    let isValid = false;
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    jwt.verify(token, 'xposure-secret-key', (err, decoded) => {
      if (err) {
        isValid = false;
      } else if (decoded) {
        isValid = true;
      }
    });
    return isValid;
  }

exports.login = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    console.log("requesst",req);
    // let userId = req.body.userId;
    userService.getUser(req.body, (err,response) => {
        if (err) {
            callback(serializer.error(err));
        }
        else{
            callback(res.json(serializer.success(response)))
        }
    });
}
  
exports.signup = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    console.log("requesst",req);
    // let userId = req.body.userId;
    
    userService.saveUser(req.body, (err,response) => {
        if (err) {
            callback(serializer.error(err));
        }
        else{
            callback(res.json(serializer.success(response)))
        }
    });
}  