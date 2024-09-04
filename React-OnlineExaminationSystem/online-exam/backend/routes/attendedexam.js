// // routes/examRoutes.js
// const express = require('express');
// const router = express.Router();
// const AttendedExam = require('../models/attendedexam');

// // GET /api/exam/status?studentId=STUDENT_ID&examId=EXAM_ID
// router.get('/status', async (req, res) => {
//   const { studentId, examId } = req.query;

//   if (!studentId || !examId) {
//     return res.status(400).json({ error: 'studentId and examId are required' });
//   }

//   try {
//     // Check if the student has attended the exam
//     const attendedExam = await AttendedExam.findOne({ studentId, examId });
//     console.log(attendedExam);
//     if (attendedExam) {
//       // If the student has attended the exam, return the score and date
//       return res.json({
//         hasTaken: true,
//         examTitle: attendedExam.examTitle,
//         score: attendedExam.score,
//         attendedOn: attendedExam.attendedOn,
//       });
//     } else {
//       // If the student has not attended the exam, indicate that
//       return res.json({ hasTaken: false });
//     }
//   } catch (err) {
//     console.error('Error fetching exam status:', err);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
