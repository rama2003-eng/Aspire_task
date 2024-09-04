const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  questionText: { type: String, required: true },
  options: [String], // Array of options
  correctAnswer: { type: String, required: true }
});

module.exports = mongoose.model('Question', questionSchema);
