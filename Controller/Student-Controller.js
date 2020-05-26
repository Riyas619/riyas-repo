var createStudent1 = require('../Service/studentService')    

exports.createStudents = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    console.log("requesst",req);
    let student = req.body;
    createStudent1.createStudent(student, (res,err) => {
        if (err) {
            callback(err);
            console.log("eroorincontroler",err)
        }
        else{
            console.log("reaponse",res);
            callback(res)
        }
    });
}
    exports.getStudents = (req, res, callback) => {
        // Validate request parameters, queries using express-validator
        console.log("requesst",req);
        createStudent1.getStudent(req, (res,err) => {
            if (err) {
                callback(err);
                console.log("eroorincontroler",err)
            }
            else{
                console.log("reaponse",res);
                callback(res)
            }
        });
     
}

exports.getStudentById = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    console.log("requesst",req);
    let id = req.params.id;
    createStudent1.getStudentById(id, (res,err) => {
        if (err) {
            callback(err);
            console.log("eroorincontroler",err)
        }
        else{
            console.log("reaponse",res);
            callback(res)
        }
    });
 
}

exports.updateStudentDetails = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    console.log("requesst",req);
    let id = req.params.id;
    let body = req.body;
    createStudent1.updateStudentById(id,body, (res,err) => {
        if (err) {
            callback(err);
            console.log("eroorincontroler",err)
        }
        else{
            console.log("reaponse",res);
            callback(res)
        }
    });
 
}

exports.deleteStudent = (req, res, callback) => {
    // Validate request parameters, queries using express-validator
    console.log("requesst",req);
    let id = req.params.id;
    createStudent1.deleteStudentById(id,(res,err) => {
        if (err) {
            callback(err);
            console.log("eroorincontroler",err)
        }
        else{
            console.log("reaponse",res);
            callback(res)
        }
    });
 
}

