import express from 'express';
import { createTask, deleteTask, getAllTasks, updateTask, updateTaskStatus } from '../controllers/taskController.js';
import { handleRequireSignin } from '../controllers/authController.js';

const router = express.Router();

router.use(handleRequireSignin);
router.route('/tasks').post(createTask);
router.route('/tasks').get(getAllTasks);
router.route('/tasks/:id').delete(deleteTask);
router.route('/tasks/:id').patch(updateTask);
router.route('/tasks/:id/status').patch(updateTaskStatus);

export default router;
