const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be atleast 3 characters or long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be atleast 3 characters or long'],
        },
    },
    email: {
        type: String,
        required: true,
        minlength: [5, 'Email must be atleast 3 characters or long'],
    },
    password: {
        type: String,
        required: true,
        select: false, // this property ensures that if we search for any user the password field will not be given the the search results.
    },
    socketId: {
        type: String,
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;