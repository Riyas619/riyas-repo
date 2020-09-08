
var mongoose    =   require("mongoose");
var Joi = require('@hapi/joi');
// const userSchema =   new mongoose.Schema({
 
//     "user_Id" : Number,
//     "StudentName" : String,
//     "StudentDept" : String,
//     "Email" : String,
//     "Password": String,
//     "Token":String
// })
// userSchema.methods.schemaValidate = function(obj) {
// 	const schema = {
//         user_Id : Joi.types.String().min(4).max(4).required(),
//         StudentName: Joi.types.String().min(6).max(30).required(),
//         StudentDept: Joi.types.String().min(3).max(6).required(),
//         Email: Joi.types.String().email().required(),
//         Password: Joi.types.String().min(6).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
//         Token: Joi.types.String().required(),
// 		created: Joi.types.Date(),
// 	}
// 	return Joi.validate(obj, schema);express-validator schemaexpress-validator schema
// }

const joigoose = require('joigoose')(mongoose)

const joiSchema = Joi.object({
    user_Id : Joi.string().regex(/[0-9]+/).length(4).required(),
    StudentName: Joi.string().min(6).max(30).required(),
    StudentDept: Joi.string().min(3).max(6).required(),
    Email: Joi.string().email().required(),
    Password: Joi.string().min(6).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
    Token: Joi.string(),
})

const userSchema = new mongoose.Schema(joigoose.convert(joiSchema))

userSchema.index({user_Id: 1}, {unique: true});
userSchema.index({Email: 1}, {unique: true});
userSchema.index({Password: 1}, {unique: true});
// create model if not exists.
module.exports = mongoose.model('User',userSchema);


 