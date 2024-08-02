import express from 'express';
import { handleContact } from '../controllers/contactController.js';

const router = express.Router();
router.route('/contact').post(handleContact);

export default router;
