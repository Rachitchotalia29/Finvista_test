import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { generateRetirementPlan, getInvestmentSuggestions } from '../controllers/plannerController.js';

const router = express.Router();

router.post('/plan', authMiddleware, generateRetirementPlan);
router.post('/investments', authMiddleware, getInvestmentSuggestions);

export default router;
