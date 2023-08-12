const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModels");
const sendToken = require("../utils/jwtToken");
const bcrypt = require("bcryptjs");



// Register a User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { username, email, password } = req.body;



    const user = await User.create({
        username, email, password,
    });

    sendToken(user, 201, res);


});


// Login User

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // Checking if user doesnot exits in dataBase
    if (!email || !password) {
        return next(new ErrorHander("Please Enter your Efdgfdgmail & Passsword", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHander("Invalid Email or Password", 401));
    }


    console.log(user.password);

    bcrypt.compare(password, user.password, (err, data) => {

        if (err) throw err

        if (!data) {
            return next(new ErrorHander("Invalid Email or Password", 401));
        }

        sendToken(user, 200, res)

    })



})


// Logout Method

exports.logout = catchAsyncErrors(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })


    res.status(200).json({
        success: true,
        message: "Logged Out",
    })
});




/// Update User Password

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");

    bcrypt.compare(req.body.oldPassword, user.password, async (err, data) => {

        if (err) throw err

        if (!data) {
            return next(new ErrorHander("Old password is Incorrect", 400));
        }

        if (req.body.newPassword !== req.body.confirmPassword) {
            return next(new ErrorHander("password does not match", 400));
        }

        user.password = req.body.newPassword;
        await user.save();

        sendToken(user, 200, res);
    });

});


/// Update User Profile

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {

    const newUserData = {
        username: req.body.username,
        email: req.body.email,
    };

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
    })


});



/// Update User Role  --> Admin

exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };

   

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    if(!user){
        return next(new ErrorHander(`User does not exist with id: ${req.params.id}`, 400))
    }

    res.status(200).json({
        success: true,
    })
});






