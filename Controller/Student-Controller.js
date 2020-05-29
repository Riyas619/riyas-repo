var createStudent1 = require('../Service/studentService');
var validate = require('../Controller/User-Controller');
var serializer = require('../utils/response-statuscode');
var logger = require("../config/winston-config-file");
var UNAUTHORIZED = require('../constant/authorization-constant');    

exports.createStudents = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    logger.info("I am in create student controleer")
    if (req.headers.authorization && validate.validateToken(req.headers.authorization)) {
    let student = req.body;
    createStudent1.createStudent(student, (res,err) => {
        if (err) {
            logger.debug("error while creating student")
            callback(serializer.error(err));
        }
        else{
            logger.info("Return success response",response, { "sucess": true })
            callback(res.json(serializer.success(response)))
        }
    });
}
else {
    callback(res.status(403).json(serializer.unAuthorized(UNAUTHORIZED)));
}
}

exports.getStudents = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    logger.info("I am in get student controler")
    if (req.headers.authorization && validate.validateToken(req.headers.authorization)) {
        createStudent1.getStudent(req, (response, err) => {
            if (err) {
                callback(serializer.error(err));
            }
            else {
                logger.info("Return success response", { "sucess": true })
                callback(res.json(serializer.success(response)))
            }
        });
    }
    else {
        callback(res.status(403).json(serializer.unAuthorized(UNAUTHORIZED)));
    }
}

exports.getStudentById = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    logger.info("I am in get student by Id controler")
    if (req.headers.authorization && validate.validateToken(req.headers.authorization)) {
        let _id = req.params.id;
        createStudent1.getStudentById(_id, (response, err) => {
            if (err) {
                callback(serializer.error(err));
            }
            else {
                logger.info("Return success response", { "sucess": true })
                callback(res.json(serializer.success(response)))
            }
        });
    }
    else {
        callback(res.status(403).json(serializer.unAuthorized(UNAUTHORIZED)));
    }
}

exports.updateStudentDetails = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    logger.info("I am in update student details controler")
    if (req.headers.authorization && validate.validateToken(req.headers.authorization)) {
        let id = req.params.id;
        let body = req.body;
        createStudent1.updateStudentById(id, body, (response, err) => {
            if (err) {
                callback(serializer.error(err));
            }
            else {
                logger.info("Return success response", { "sucess": true })
                callback(res.json(serializer.success(response)))
            }
        });
    }
    else {
        callback(res.status(403).json(serializer.unAuthorized(UNAUTHORIZED)));
    }
}

exports.deleteStudent = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    logger.info("I am in delete student controler")
    if (req.headers.authorization && validate.validateToken(req.headers.authorization)) {
        let id = req.params.id;
        console.log("iddd", id);
        createStudent1.deleteStudentById(id, (response, err) => {
            if (err) {
                callback(serializer.error(err));
            }
            else {
                logger.info("Return success response", { "sucess": true })
                callback(res.json(serializer.success(response)))
            }
        });
    }
    else {
        callback(res.status(403).json(serializer.unAuthorized(UNAUTHORIZED)));
    }
}

