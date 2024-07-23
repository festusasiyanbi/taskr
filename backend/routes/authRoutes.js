import express from 'express';
import { handleCreateUser, handleLoginUser } from '../controllers/authController.js';

const router = express.Router();

router.route("/auth/register").post(handleCreateUser);
router.route("/auth/login").post(handleLoginUser);

export default router;