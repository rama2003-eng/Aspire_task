const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  timeLimit: { type: Number, required: true },
  questionLimit: { type: Number, required: true },
  examTitle: { type: String, required: true },
  examDescription: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true }] // Reference to Question
});

module.exports = mongoose.model('Exam', examSchema);
