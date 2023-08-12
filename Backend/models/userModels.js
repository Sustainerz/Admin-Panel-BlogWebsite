const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLenght: [4, "Name should have atleast 5 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your name"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid Email"],
        select: false,
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLenght: [8, "Password Should be greater then 8 Characters"],
        select: false,

    },
    
    role: {
        type: String,
        default: 'admin',
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre('save', async function (next) {

    if (!this.isModified("password")) {
        next();
    }


    this.password = await bcrypt.hash(this.password, 10);
});


////  JWT Token

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}




module.exports = mongoose.model("User", userSchema);

