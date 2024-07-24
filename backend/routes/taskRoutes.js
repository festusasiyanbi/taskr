import express from 'express';
import { createTask, getAllTasks } from '../controllers/taskController.js';
import { handleRequireSignin } from '../controllers/authController.js';

const router = express.Router();

router.use(handleRequireSignin);
router.route('/tasks').post(createTask);
router.route('/tasks').get(getAllTasks);

export default router;
