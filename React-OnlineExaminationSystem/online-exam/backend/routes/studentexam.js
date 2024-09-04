// const express = require('express');
// const router = express.Router();
// const StudentExam = require('../models/studentexam'); // Adjust the path as needed

// // Route to submit exam data
// router.post('/submit/:examId', async (req, res) => {
//   try {
//     const { studentId, examId, examTitle, questions, score, attendedAt } = req.body;

//     // Check if questions array is populated
//     if (!questions || questions.length === 0) {
//       return res.status(400).json({ error: 'Questions array is empty' });
//     }

//     // Create a new StudentExam document
//     const newStudentExam = new StudentExam({
//       studentId,
//       examId,
//       examTitle,
//       questions,
//       score,
//       attendedAt
//     });

//     // Save to the database
//     const savedExam = await newStudentExam.save();

//     console.log('Saved exam data:', savedExam); // Log saved data to ensure it's correct

//     // Respond with the saved exam data
//     res.status(200).json(savedExam);
//   } catch (error) {
//     console.error('Error submitting exam:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
// router.get('/student-exams/:id', async (req, res) => {
//     const { id } = req.params;
//     console.log(`Fetching exam with ID: ${id}`); // Debugging log
  
//     try {
//       const studentExam = await StudentExam.findById(id).populate('questions');
//       if (!studentExam) {
//         return res.status(404).json({ message: 'Student exam not found' });
//       }
//       res.json(studentExam);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });
//   // Route to get attended exams for a student
// router.get('/attended/:studentId', async (req, res) => {
//     const { studentId } = req.params;
  
//     try {
//       const attendedExams = await StudentExam.find({ studentId });
//       res.status(200).json(attendedExams);
//     } catch (error) {
//       console.error('Error fetching attended exams:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  

// const express = require('express');
// const router = express.Router();
// const StudentExam = require('../models/studentexam');

// router.post('/submit', async (req, res) => {
//   try {
//     // console.log('Received student exam submission:', req.body); 
//     const {
//       studentId,
//       examId,
//       examTitle,
//       questions,
//       score,
//       attendedAt
//     } = req.body;

//     const newStudentExam = new StudentExam({
//       studentId,
//       examId,
//       examTitle,
//       questions,
//       score,
//       attendedAt
//     });

//     const savedStudentExam = await newStudentExam.save();
//     res.status(201).json(savedStudentExam);
//   } catch (error) {
//     console.error('Error saving student exam:', error);
//     res.status(500).json({ message: 'Failed to submit exam' });
//   }
// });


// // Route to retrieve exam data
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const studentExam = await StudentExam.findById(id).populate('questions');
//     if (!studentExam) {
//       return res.status(404).json({ message: 'Student exam not found' });
//     }
//     res.json(studentExam);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


const express = require('express');
const router = express.Router();
const StudentExam = require('../models/studentexam');

// Route to submit exam
router.post('/submit', async (req, res) => {
  try {
    const {
      studentId,
      examId,
      examTitle,
      questions,
      score,
      attendedAt
    } = req.body;

    // Check if the exam has already been taken
    const existingStudentExam = await StudentExam.findOne({ studentId, examId });

    if (existingStudentExam) {
      return res.status(400).json({ message: 'Exam already taken' });
    }

    // Create and save to StudentExam collection
    const newStudentExam = new StudentExam({
      studentId,
      examId,
      examTitle,
      questions,
      score,
      attendedAt
    });

    const savedStudentExam = await newStudentExam.save();

    res.status(201).json(savedStudentExam);
  } catch (error) {
    console.error('Error saving exam:', error);
    res.status(500).json({ message: 'Failed to submit exam' });
  }
});
router.get('/', async (req, res) => {
  try {
    const reports = await StudentExam.find()
      .populate('studentId', 'fullName') // Adjust based on your User schema
      .populate('examId', 'examTitle'); // Adjust based on your Exam schema

    const formattedReports = reports.map(report => {
      const totalQuestions = report.questions.length;
      const percentage = totalQuestions ? ((report.score / totalQuestions) * 100).toFixed(2) : 0;
      
      return {
        _id: report._id,
        studentName: report.studentId.fullName, // Adjust based on actual field in User schema
        examTitle: report.examTitle, // Exam title from StudentExam document
        score: report.score,
        percentage: percentage
      };
    });

    res.json(formattedReports);
  } catch (error) {
    console.error('Error fetching student exams:', error);
    res.status(500).json({ message: 'Failed to fetch student exams' });
  }
});

// Route to check if an exam has been taken
router.get('/check-status', async (req, res) => {
  const { studentId, examId } = req.query;

  try {
    if (!studentId || !examId) {
      return res.status(400).json({ message: 'Missing studentId or examId' });
    }

    const studentExam = await StudentExam.findOne({ studentId, examId });

    if (studentExam) {
      return res.json({
        hasTaken: true,
        examTitle: studentExam.examTitle,
        score: studentExam.score,
        attendedAt: studentExam.attendedAt
      });
    } else {
      return res.json({ hasTaken: false });
    }
  } catch (error) {
    console.error('Error checking exam status:', error);
    res.status(500).json({ message: 'Failed to check exam status' });
  }
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const studentExam = await StudentExam.findById(id).populate('questions');
    if (!studentExam) {
      return res.status(404).json({ message: 'Student exam not found' });
    }
    res.json(studentExam);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
