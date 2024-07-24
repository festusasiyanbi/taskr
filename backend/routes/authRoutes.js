import express from 'express';
import { handleCreateUser, handleLoginUser, handleSignout } from '../controllers/authController.js';

const router = express.Router();

router.route("/auth/register").post(handleCreateUser);
router.route("/auth/login").post(handleLoginUser);
router.route("/auth/signout").get(handleSignout);

export default router;