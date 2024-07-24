import express from 'express';
import User from '../models/authModel.js';
import { handleRequireSignin } from '../controllers/authController.js';

const router = express.Router();

router.use(handleRequireSignin);

router.get('/user/profile', async (req, res) => {
    const userId = req.user._id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }
        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: "Could not retrieve user" });
    }
});

export default router;
