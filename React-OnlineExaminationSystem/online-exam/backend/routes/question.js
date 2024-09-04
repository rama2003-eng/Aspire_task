const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// Create a new question
router.post('/:examId', async (req, res) => {
  try {
    const { examId } = req.params;
    const { questionText, options, correctAnswer } = req.body;
    const question = new Question({ examId, questionText, options, correctAnswer });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all questions for a specific exam
router.get('/:examId', async (req, res) => {
  try {
    const { examId } = req.params;
    const questions = await Question.find({ examId });
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a question
router.put('/:examId/:id', async (req, res) => {
  try {
    const { examId, id } = req.params;
    const updatedQuestion = await Question.findOneAndUpdate(
      { _id: id, examId: examId },
      req.body,
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a question
router.delete('/:examId/:id', async (req, res) => {
  try {
    const { examId, id } = req.params;
    const deletedQuestion = await Question.findOneAndDelete({ _id: id, examId: examId });
    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
