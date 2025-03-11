import Problem from '../models/Problem.js';


export const getRevisionNotifications = async (req, res) => {
  try {
    const now = new Date();
    // Find problems that are due for revision
    const problemsDue = await Problem.find({ revisitDate: { $lte: now } });
    
    res.status(200).json({ 
      message: 'Revision notifications retrieved',
      count: problemsDue.length, 
      problems: problemsDue 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
