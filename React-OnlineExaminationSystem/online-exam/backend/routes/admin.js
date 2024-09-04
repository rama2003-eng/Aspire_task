// routes/admin.js

const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const Exam = require('../models/exam');
const User = require('../models/User');

// Get total number of courses
router.get('/courses/count', async (req, res) => {
    try {
      const count = await Course.countDocuments();
      res.json({ count });
    } catch (error) {
      console.error('Error fetching course count:', error);
      res.status(500).json({ message: 'Failed to fetch course count' });
    }
  });

// Get total number of exams
router.get('/exams/count', async (req, res) => {
  try {
    const count = await Exam.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Error fetching exam count:', error);
    res.status(500).json({ message: 'Failed to fetch exam count' });
  }
});

// Get total number of students
router.get('/students/count', async (req, res) => {
  try {
    const count = await User.countDocuments({ userType: 'student' });
    res.json({ count });
  } catch (error) {
    console.error('Error fetching student count:', error);
    res.status(500).json({ message: 'Failed to fetch student count' });
  }
});

module.exports = router;
