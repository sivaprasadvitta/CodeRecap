import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  problemId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Problem', 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true
});

export default mongoose.model('Note', noteSchema);
