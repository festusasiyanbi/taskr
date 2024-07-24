import User from '../models/authModel.js';

const getUserInfoById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }
        req.profile = user;
        next();
    } catch (error) {
        return res.status(500).json({
            error: "Could not retrieve user",
        });
    }
};

export { getUserInfoById };
