import express from 'express';
import { createTask, deleteTask, getAllTasks } from '../controllers/taskController.js';
import { handleRequireSignin } from '../controllers/authController.js';

const router = express.Router();

router.use(handleRequireSignin);
router.route('/tasks').post(createTask);
router.route('/tasks').get(getAllTasks);
router.route('/tasks/:id').delete(deleteTask);

export default router;
