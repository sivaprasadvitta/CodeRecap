import Note from '../models/Note.js';

export const createNote = async (req, res) => {
  try {
    const { problemId, content } = req.body;

    // Check if a note for this problem already exists
    let note = await Note.findOne({ problemId });
    if (note) {
      note.content = content;
      await note.save();
      return res.status(200).json(note);
    } else {
      note = await Note.create({ problemId, content });
      return res.status(201).json(note);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotesByProblem = async (req, res) => {
  try {
    // Since it's a shared note, we use findOne to get the single note for the problem
    const note = await Note.findOne({ problemId: req.params.problemId });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    
    note.content = req.body.content;
    await note.save();
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
