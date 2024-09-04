import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Admin from './components/admin/Admin';
import Course from './components/course/Course';
import Sidebar from './components/sidebar/Sidebar';
import Exam from './components/exam/Exam';
import Question from './components/question/Question';
import Index from './components/index/Index';
import StudentExam from './components/studentexam/StudentExam';
import Result from './components/result/Result';
import Report from './components/report/Report' ;
import Home from './components/home/Home';
import Student from './components/student/Student';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/course" element={<Course />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/exam/:examId/questions" element={<Question />} />
        <Route path="/index" element={<Index />} />
        <Route path="/student-exam/:id" element={<StudentExam />} />
        <Route path="/result/:id" element={<Result />} /> 
        <Route path="report" element={<Report />} /> 
        <Route path="student" element={<Student />} /> 
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
