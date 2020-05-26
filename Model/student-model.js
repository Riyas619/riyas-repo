var mongoose    =   require("mongoose");
const studentSchema =   new mongoose.Schema({
    "StudentName" : String,
    "StudentRegno" : Number,
    "StudentDept" : String
})

// create model if not exists.
module.exports = mongoose.model('Student',studentSchema);