const mongoose = require('mongoose');

const StudentExamSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  examTitle: { type: String, required: true }, // Added to store exam title
  questions: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
      questionText: { type: String, required: true }, // Added to store the question text
      selectedOption: { type: String, required: true }, // Store student's selected option
      correctOption: { type: String, required: true }, // Store correct answer
      isCorrect: { type: Boolean, required: true } // Whether student's answer is correct
    }
  ],
  score: { type: Number, default: 0 },
  attendedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudentExam', StudentExamSchema);
