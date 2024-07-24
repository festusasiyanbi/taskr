import express from 'express';
import { createTask, getAllTasks } from '../controllers/taskController.js';

const router = express.Router();

router.route('/tasks').post(createTask);
router.route('/tasks').get(getAllTasks);

export default router;
