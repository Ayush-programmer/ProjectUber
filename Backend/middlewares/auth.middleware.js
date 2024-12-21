const userModel = require('../models/user.model.js');
const captainModel = require('../models/captain.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model.js');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];  // here we are checking if the token is in the cookies or in the headers. and if it is in the headers we are splitting the token from the 'Bearer' keyword. we give question mark before the split method to avoid error if the headers is undefined.

    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];  // here we are checking if the token is in the cookies or in the headers. and if it is in the headers we are splitting the token from the 'Bearer' keyword. we give question mark before the split method to avoid error if the headers is undefined.

    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
