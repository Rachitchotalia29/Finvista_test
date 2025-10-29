import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getCurrentUser, updateCurrentUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/me', authMiddleware, getCurrentUser);
router.put('/me', authMiddleware, updateCurrentUser);

export default router;
