 let save = ( model,data, callback) =>{
    model.create( data, (error, response) => {
        console.log("rsponse",response);
        if (error) {
            callback(error);
        } else {
            callback(response);
            console.log("llllllllll",response)
        }
    });
 }

 let get = ( model,data, callback) =>{
    model.find( (error, response) => {
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
    model.findById(data, (error, response) => {
        console.log("rsponse",response);
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
        console.log("rsponse",response);
        if (error) {
            callback(error);
        } else {
            callback(response);
            console.log("llllllllll",response)
        }
    });
 }

 let deletebyId = ( model,id, callback) =>{
    model.findByIdAndRemove(id, (error, response) => {
        console.log("rsponse",response);
        if (error) {
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
