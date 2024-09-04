const mongoose = require('mongoose');

const AttendedExamSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  examTitle: { type: String, required: true },
  score: { type: Number, required: true },
  attendedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AttendedExam', AttendedExamSchema);
