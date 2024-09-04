const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const courseRoutes = require('./routes/courses');
const examRoutes = require('./routes/exam'); 
const questionRoutes = require('./routes/question');
const studentExamRoutes = require('./routes/studentexam');
const userRoutes = require('./routes/user'); 
const adminRoutes = require('./routes/admin');
// const attendedExamRoutes = require('./routes/attendedexam');
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', userRoutes);
app.use('/api', loginRoute);
app.use('/api', registerRoute);
app.use('/api/courses', courseRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/student-exams', studentExamRoutes);
app.use('/api/admin', adminRoutes);
// app.use('/api/attended-exams', attendedExamRoutes);
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
