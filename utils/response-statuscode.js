


let success = (res) => {
    return {
        statusCode: 200,
        body: 
            {
                statusCode: 200,
                success: true,
                data: res
            }
    }
}

let badRequest = (errMsg) => {
    return {
        statusCode: 400,
        body: 
            {
                statusCode: 400,
                success: false,
                errMsg: errMsg
            }
    }
}
let error = (errMsg) => {
    return {
        statusCode: 500,
        body: 
            {
                statusCode: 500,
                success: false,
                errMsg: errMsg
            }
    }
}

let unAuthorized = (errMsg) => {
    return {
        statusCode: 403,
        body: 
            {
                statusCode: 403,
                success: false,
                errMsg: errMsg
            }
        
    }
}

module.exports.success = success;
module.exports.badRequest = badRequest;
module.exports.error = error;
module.exports.unAuthorized = unAuthorized;
