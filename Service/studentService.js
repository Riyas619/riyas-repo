const express = require('express');
const Student = require('../Model/student-model');
const baseDao = require('../Dao/baseDao');

let createStudent = (req, callback) => {
                baseDao.save( Student, req, (response, error) => {
                    console.log("studenttt",Student);
                    if (error) {
                        callback(error);
                        console.log("errorrr",error)
                    } else {
                        callback(response);
                        console.log("respone",response)
                    }
                });
            }

let getStudent = (req, callback) => {
                baseDao.get( Student, req, (response, error) => {
                    console.log("studenttt",Student);
                    if (error) {
                        callback(error);
                        console.log("errorrr",error)
                    } else {
                        callback(response);
                        console.log("respone",response)
                    }
                });
            }

let getStudentById = (req, callback) => {
                baseDao.getbyId( Student, req, (response, error) => {
                    console.log("studenttt",Student);
                    if (error) {
                        callback(error);
                        console.log("errorrr",error)
                    } else {
                        callback(response);
                        console.log("respone",response)
                    }
                });
            }  
let updateStudentById = (id,req, callback) => {
                baseDao.updatebyId( Student,id, req, (response, error) => {
                    console.log("studenttt",Student);
                    if (error) {
                        callback(error);
                        console.log("errorrr",error)
                    } else {
                        callback(response);
                        console.log("respone",response)
                    }
                });
            }  
        
let deleteStudentById = (id, callback) => {
                baseDao.deletebyId( Student,id, (response, error) => {
                    console.log("studenttt",Student);
                    if (error) {
                        callback(error);
                        console.log("errorrr",error)
                    } else {
                        callback(response);
                        console.log("respone",response)
                    }
                });
            }                                          
            

module.exports.createStudent = createStudent;
module.exports.getStudent = getStudent;
module.exports.getStudentById = getStudentById;
module.exports.updateStudentById = updateStudentById;
module.exports.deleteStudentById = deleteStudentById;
