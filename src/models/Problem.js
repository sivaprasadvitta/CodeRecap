import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
    required: true, 
  },
  tags: [{
    type: String,
  }],
  revisitDate: {
    type: Date,
  }
}, {
  timestamps: true 
});

// compound index that enforces uniqueness on link per user.
problemSchema.index({ link: 1, user: 1 }, { unique: true });

export default mongoose.model('Problem', problemSchema);
