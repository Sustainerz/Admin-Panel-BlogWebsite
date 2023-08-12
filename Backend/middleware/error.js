const ErrorHander = require('../utils/errorhander');

module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.message =  err.message || "Internal Server Error";

    /// Wrong MongoDB id error

    if(err.name == "CastError"){
        const message = `Resource not found. Invalid: ${err.path} `;
        err = new ErrorHander(message, 400);
    };

    /// Mongoose Duplicate Key Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHander(message, 400);
    };

    /// Wrong jwt Error
    if(err.name == "JsonWebTokenError"){
        const message = `Json Web Token is Invalid, Try again `;
        err = new ErrorHander(message, 400);
    };

    /// JWT Expire Error
    if(err.name == "TokenExpiredError"){
        const message = `Json Web Token is Expired, Try again `;
        err = new ErrorHander(message, 400);
    };


    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        
    })

}