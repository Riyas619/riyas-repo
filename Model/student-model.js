var mongoose    =   require("mongoose");
var Joi = require('@hapi/joi');
const joigoose = require('joigoose')(mongoose)
// const studentSchema =   new mongoose.Schema({
//     "user_Id" : Number,
//     "StudentName" : String,
//     "StudentRegno" : Number,
//     "StudentDept" : String
// },{
//     unique:true
// })
const joiSchema = Joi.object({
    user_Id : Joi.string().regex(/[0-9]+/).length(4).required(),
    StudentName: Joi.string().min(6).max(30).required(),
    StudentRegno: Joi.string().regex(/[0-9]+/).length(5).required(),
    StudentDept: Joi.string().min(3).max(6).required(),
})

const studentSchema = new mongoose.Schema(joigoose.convert(joiSchema))

studentSchema.index({user_Id: 1}, {unique: true});
studentSchema.index({StudentRegno: 1}, {unique: true});
// create model if not exists.
module.exports = mongoose.model('Student',studentSchema);
