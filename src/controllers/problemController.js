import Problem from '../models/Problem.js';
import { validateProblem } from '../validations/problemValidator.js';

// Create a new problem
export const createProblem = async (req, res) => {
  try {
    const { title, description, link, tags, revisitDate } = req.body;
    const userId = req.user._id;

    // Check if a problem is alreay existed or not
    const alreadyExist = await Problem.findOne({ link, user: userId });
    if (alreadyExist) return res.status(400).json({ message: "Problem already exists" });

    const problem = await Problem.create({ title, description, link, tags, revisitDate, user: userId });
    res.status(201).json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all problems 
export const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find({ user: req.user._id });
    res.status(200).json(problems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single problem by id
export const getProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) return res.status(404).json({ message: 'Problem not found' });

    if (problem.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to view this problem' });
    }

    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a problem
export const updateProblem = async (req, res) => {
  try {
    let problem = await Problem.findById(req.params.id);
    if (!problem) return res.status(404).json({ message: 'Problem not found' });
    
    if (problem.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this problem' });
    }
    
    problem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a problem
export const deleteProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) return res.status(404).json({ message: 'Problem not found' });
    
    if (problem.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this problem' });
    }
    
    await Problem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Problem deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Filter or search problems (only within the user's problems)
export const searchProblems = async (req, res) => {
  try {
    const { query } = req.query;
    const problems = await Problem.find({
      user: req.user._id,
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } }
      ]
    });
    res.status(200).json(problems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
