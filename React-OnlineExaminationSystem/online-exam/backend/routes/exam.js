const express = require('express');
const router = express.Router();
const Exam = require('../models/exam');
const Question = require('../models/question'); // Ensure this is correctly referenced
const Course = require('../models/course');

// Get all exams
router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find().populate('course');
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Create a new exam
router.post('/', async (req, res) => {
  const { course, timeLimit, questionLimit, examTitle, examDescription, questions } = req.body;

  try {
    const exam = new Exam({
      course,
      timeLimit,
      questionLimit,
      examTitle,
      examDescription,
      questions // Make sure this is included
    });

    await exam.save();
    res.status(201).json(exam);
  } catch (error) {
    console.error('Error saving exam:', error);
    res.status(400).json({ message: error.message });
  }
});

// Update an existing exam
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { course, timeLimit, questionLimit, examTitle, examDescription, questions } = req.body;

  try {
    const exam = await Exam.findByIdAndUpdate(
      id,
      { course, timeLimit, questionLimit, examTitle, examDescription, questions },
      { new: true }
    );

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json(exam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an exam
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const exam = await Exam.findByIdAndDelete(id);

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json({ message: 'Exam deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all courses (for the dropdown in the Add Exam popup)
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/:examId', async (req, res) => {
  try {
    const { examId } = req.params;
    const exam = await Exam.findById(examId).populate('course');
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    const questions = await Question.find({ examId: exam._id });

    exam.questions = questions;
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Route to get attended exams for a student
router.get('/attended/:studentId', async (req, res) => {
  const { studentId } = req.params;

  try {
    const attendedExams = await StudentExam.find({ studentId });
    res.status(200).json(attendedExams);
  } catch (error) {
    console.error('Error fetching attended exams:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
