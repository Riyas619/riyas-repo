const express = require('express');
const Student = require('../Model/student-model');
const User = require('../Model/user')
const baseDao = require('../Dao/baseDao');
const jwt = require('jsonwebtoken');
const token = require('../Controller/User-Controller');
const logger = require('../config/winston-config-file');

let createStudent = (req, callback) => {
    logger.info("I am in create student service")
    baseDao.save(Student, req, (response, error) => {
        // console.log("studenttt", Student);
        if (error) {
            callback(error);
            // console.log("errorrr", error)
        } else {
            logger.info("Return success response", { "sucess": true })
            callback(response);
            // console.log("respone", response)
        }
    });
}

let getStudent = (req, callback) => {
    logger.info("I am in get student service")
    baseDao.get(Student, req, (response, error) => {
        // console.log("studenttt", Student);
        if (error) {
            callback(error);
            // console.log("errorrr", error)
        } else {
            logger.info("Return success response", { "sucess": true })
            callback(response);
            // console.log("respone", response)
        }
    });
}

let getStudentById = (req, callback) => {
    logger.info("I am in get student by Id service")
    baseDao.getbyId(Student, req, (response, error) => {
        // console.log("studenttt", Student);
        if (error) {
            callback(error);
            // console.log("errorrr", error)
        } else {
            logger.info("Return success response", { "sucess": true })
            callback(response);
            console.log("respone in getbyId", response)
        }
    });
}
let updateStudentById = (id, req, callback) => {
    logger.info("I am in update student by Id service")
    baseDao.updatebyId(Student, id, req, (response, error) => {
        // console.log("studenttt", Student);
        if (error) {
            callback(error);
            // console.log("errorrr", error)
        } else {
            logger.info("Return success response", { "sucess": true })
            callback(response);
            // console.log("respone", response)
        }
    });
}

let deleteStudentById = (id, callback) => {
    logger.info("I am in delete student by Id service")
    baseDao.deletebyId(Student, id, (response, error) => {
        // console.log("studenttt", Student);
        if (error) {
            callback(error);
            // console.log("errorrr", error)
        } else {
            logger.info("Return success response", { "sucess": true })
            callback(response);
            // console.log("respone", response)
        }
    });
}

let getUser = (req, callback) => {
    // req = JSON.parse(req);
    logger.info("I am in get user service")
    console.log("jsonparse",req.Id);
    let email = req.Email;
    let password = req.Password;
    baseDao.getdetails(User, email,password, (res,err) => {
        if (err) {
            console.log("errooor",err)
            callback(err);
        } else {
            // console.log("response by dao",req.Email)
            // console.log("responseelength",res.Email)
            console.log("tokeeen",req.Token);
            // console.log("response in login",res);
            // res = JSON.parse(JSON.stringify(res));
            // if (res == 0) {
                if(req.Email == res.Email && req.Password == res.Password ){
                req.Token = token.generateToken(req.Email)
                // baseDao.save(User, req, (error, response) => {
                //     if (error) {
                //         callback(null, error);
                //     } else {
                //         logger.info("Return success response", { "sucess": true })
                //         callback(response, null);
                //     }
                // });
                callback(req);
    }
}
});
}

let saveUser = (req, callback) => {
    logger.info("I am in save user service")
    // req = JSON.parse(req);
    // console.log("jsonparse",req.Id);
    // let Id = req.Id
    console.log("Userid",req.user_Id);
    let userId = req.user_Id;
    let sname = req.StudentName;
    let sdept = req.StudentDept;
    let email = req.Email;
    let pwd = req.Password;
    console.log("studentdetails",sname,sdept,email,pwd)
    baseDao.getbyuserId(User, userId,sname,sdept,email,pwd, (res,err) => {
        if (err) {
            console.log("errooor",err)
            callback(err);
        } else {
                console.log("responseee",res[0].user_Id,res[0].Email)
                console.log("objectlength",Object.keys(res).length)
                console.log("requesttt",);
                console.log("responseeedao",res.StudentName);
                baseDao.save(User, req, (error, response) => {
                    if (error) {
                        callback(null, error);
                    } else {
                        logger.info("Return success response", { "sucess": true })
                        callback(response, null);
                    }
                });
        }
});
}

module.exports.createStudent = createStudent;
module.exports.getStudent = getStudent;
module.exports.getStudentById = getStudentById;
module.exports.updateStudentById = updateStudentById;
module.exports.deleteStudentById = deleteStudentById;
module.exports.getUser = getUser;
module.exports.saveUser = saveUser;