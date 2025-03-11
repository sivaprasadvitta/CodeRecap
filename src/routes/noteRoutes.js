import express from 'express';
import { createNote, getNotesByProblem, updateNote, deleteNote } from '../controllers/noteController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createNote);
router.put('/:id', protect, updateNote);
router.delete('/:id', protect, deleteNote);

// Route to get notes for a specific problem
router.get('/problem/:problemId', protect, getNotesByProblem);

export default router;
