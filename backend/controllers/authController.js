import User from '../models/authModel.js';
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import config from '../dbconfig/config.js';

const handleCreateUser = async (req, res) => {
    const { name, username, email, password } = req.body;
    const user = new User({ name, username, email, password });
    try {
        await user.save();
        return res.status(200).json({
            message: "Successfully signed up!",
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const handleLoginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username: username });
        if (!user) {
            return res.status(401).json({ message: "No user found with that username" });
        }
        if (!user.authenticate(password)) {
            return res.status(401).send({ error: "Username and password do not match" });
        }
        const token = jwt.sign({ _id: user._id }, config.jwtSecret);
        res.cookie("t", token, { expire: new Date() + 9999 });
        return res.json({ token, user: { _id: user._id, username: user.username, email: user.email, name: user.name } })
    } catch (error) {
        return res.status("401").json({ error: "Could not sign in user" });
    }
}

const handleSignout = (req, res) => {
    res.clearCookie("t");
    return res.status("200").json({
        message: "signed out",
    });
};

const handleRequireSignin = expressjwt({
    secret: config.jwtSecret,
    algorithms: ["HS256"],
    userProperty: "auth",
});

const handleAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!authorized) {
        return res.status("403").json({
            error: "User is not authorized",
        });
    }
    next();
};

export { handleCreateUser, handleLoginUser, handleSignout, handleRequireSignin, handleAuthorization };