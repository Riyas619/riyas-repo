
var mongoose    =   require("mongoose");
const userSchema =   new mongoose.Schema({
    "user_Id" : Number,
    "StudentName" : String,
    "StudentDept" : String,
    "Email" : String,
    "Password": String,
    "Token":String
})

// create model if not exists.
module.exports = mongoose.model('User',userSchema);

 