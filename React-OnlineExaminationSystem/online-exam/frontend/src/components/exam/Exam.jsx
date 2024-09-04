import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Exam.css';
import AddExamPopup from '../popups/AddExamPopup';
import UpdateExamPopup from '../popups/UpdateExamPopup';
import Sidebar from '../sidebar/Sidebar';
import { IonIcon } from '@ionic/react';
import { menuOutline, logOutOutline } from 'ionicons/icons';

const ManageExam = () => {
  const [exams, setExams] = useState([]);
  const [courses, setCourses] = useState([]); 
  const [isAddExamPopupOpen, setIsAddExamPopupOpen] = useState(false);
  const [isUpdateExamPopupOpen, setIsUpdateExamPopupOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchExams();
    fetchCourses();
  }, []);
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses'); // Replace with your API endpoint
      setCourses(response.data || []); // Ensure we always have an array
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
  };
  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/exams');
      setExams(response.data || []); // Ensure we always have an array
    } catch (error) {
      console.error('Failed to fetch exams:', error);
    }
  };

  const handleAddExam = async (examData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/exams', examData);
      alert('Exam added successfully');
      setExams([...exams, response.data]); // Add the new exam to the state
      setIsAddExamPopupOpen(false);
    } catch (error) {
      console.error('Failed to add exam:', error);
    }
  };

  const handleDeleteExam = async (examId) => {
    try {
      await axios.delete(`http://localhost:5000/api/exams/${examId}`);
      setExams(exams.filter(exam => exam._id !== examId));
    } catch (error) {
      console.error('Failed to delete exam:', error);
    }
  };

  const handleUpdateExam = async (examData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/exams/${examData._id}`, examData);
      setExams(exams.map(exam => (exam._id === examData._id ? response.data : exam)));
      setIsUpdateExamPopupOpen(false);
      setSelectedExam(null);
    } catch (error) {
      console.error('Failed to update exam:', error);
    }
  };

  const handleManageQuestions = (examId) => {
    navigate(`/exam/${examId}/questions`); // Navigate to Questions component
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <div className="topbar">
          <div className="toggle" onClick={() => navigate('/')}><IonIcon icon={menuOutline} /></div>
          <div className="menu">
            <a href="main.html">
              <IonIcon icon={logOutOutline} />
              <span className="title">Sign Out</span>
            </a>
          </div>
        </div><br />
        <h1>Manage Exams</h1>
        <div className="exam-container">
          <button onClick={() => setIsAddExamPopupOpen(true)} className="add-exam-button">Add Exam</button>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Exam Title</th>
                  <th>Course</th>
                  <th>Time Limit</th>
                  <th>Question Limit</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => (
                  <tr key={exam._id}>
                    <td>{exam.examTitle}</td>
                    <td>{exam.course.name}</td>
                    <td>{exam.timeLimit} Minutes</td>
                    <td>{exam.questionLimit}</td>
                    <td>{exam.examDescription}</td>
                    <td>
                      <button
                        onClick={() => {
                          setSelectedExam(exam); // Set the selected exam
                          setIsUpdateExamPopupOpen(true); // Open the popup
                        }}
                        className="action-button update-button"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteExam(exam._id)}
                        className="action-button delete-button"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleManageQuestions(exam._id)} // Manage button
                        className="action-button manage-button"
                      >
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <footer className="footer">
          © 2024 Online Examination System. All rights reserved.
        </footer>
          {isAddExamPopupOpen && (
            <AddExamPopup
              togglePopup={() => setIsAddExamPopupOpen(false)}
              handleAddExam={handleAddExam}
              courses={courses}
            />
          )}
          {isUpdateExamPopupOpen && selectedExam && (
            <UpdateExamPopup
              togglePopup={() => setIsUpdateExamPopupOpen(false)}
              handleUpdateExam={handleUpdateExam}
              exam={selectedExam}
              courses={courses}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageExam;
