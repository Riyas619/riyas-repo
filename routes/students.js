const express = require('express');
const studentController = require('../Controller/Student-Controller');
const userController =require('../Controller/User-Controller')
let router = express.Router();

router.get('/students', studentController.getStudents);

router.get('/:id', studentController.getStudentById);

router.post('/', studentController.createStudents);

router.put('/:id', studentController.updateStudentDetails);

router.delete('/:id', studentController.deleteStudent);

router.post('/login', userController.login);

router.post('/signup', userController.signup);

module.exports = router;