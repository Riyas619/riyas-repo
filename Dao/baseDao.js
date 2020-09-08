let save = ( model,data, callback) =>{
    model.create( data, (error, response) => {
        if (error) {
            callback(error);
        } else {
            callback(response);
        }
    });
 }

 let get = ( model,data, callback) =>{
    model.find((error, response) => {
        console.log("rsponse",response);
        if (error) {
            callback(error);
        } else {
            callback(response);
            console.log("llllllllll",response)
        }
    });
 }

 let getbyId = ( model,data, callback) =>{
     console.log("data in dao",data);
     console.log("model in dao",model)
    model.findById(data, (error, response) => {
        if (error) {
            callback(error);
        } else {
            callback(response);
            console.log("llllllllll",response)
        }
    });
 }

 let updatebyId = ( model,id,data, callback) =>{
    model.findByIdAndUpdate(id,data, (error, response) => {
        // console.log("rsponse",response);
        if (error) {
            callback(error);
        } else {
            callback(response);
            // console.log("llllllllll",response)
        }
    });
 }

 let deletebyId = ( model,id, callback) =>{
    model.findByIdAndRemove(id, (error, response) => {
        // console.log("rsponse",response);
        if (error) {
            callback(error);
        } else {
            callback(response);
            // console.log("llllllllll",response)
        }
    });
 }
 
 let getdetails = ( model,data,result, callback) =>{
    model.findOne({"Email":data,"Password":result},(error, response) => {
        console.log("rsponse",response);
        if (error) {
            callback(error);
        } else {
            callback(response);
            console.log("llllllllll",response)
        }
    });
 }

 let getbyuserId = ( model,userId,sname,sdept,email,pwd, callback) =>{
    model.find({},{"user_Id": userId,"StudentName" :sname,"StudentDept":sdept,"Email":email,"Password":pwd},(error,response) => {
        console.log("rsponse",response);
        if (error) {
            console.log("erroro",error)
            callback(error);
        } else {
            callback(response);
            console.log("llllllllll",response)
        }
    });
 }

module.exports.save = save;
module.exports.get = get;
module.exports.getbyId = getbyId;
module.exports.updatebyId = updatebyId;
module.exports.deletebyId = deletebyId;
module.exports.getdetails = getdetails;
module.exports.getbyuserId = getbyuserId;
