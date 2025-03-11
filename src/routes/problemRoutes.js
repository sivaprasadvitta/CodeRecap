import express from 'express';
import {
  createProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem,
  searchProblems
} from '../controllers/problemController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getProblems);
router.get('/search', protect, searchProblems);
router.get('/:id', protect, getProblem);
router.post('/', protect, createProblem);
router.put('/:id', protect, updateProblem);
router.delete('/:id', protect, deleteProblem);

export default router;
