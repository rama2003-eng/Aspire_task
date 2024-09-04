import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Question.css';
import Sidebar from '../sidebar/Sidebar';
import AddQuestionPopup from '../popups/AddQuestionPopup';
import UpdateQuestionPopup from '../popups/UpdateQuestionPopup';
import { IonIcon } from '@ionic/react';
import { menuOutline, logOutOutline } from 'ionicons/icons'; // Import IonIcon and icons

const Question = () => {
  const { examId } = useParams(); // Retrieve examId from URL
  const navigate = useNavigate(); // Initialize navigate function
  const [questions, setQuestions] = useState([]);
  const [isAddQuestionPopupOpen, setIsAddQuestionPopupOpen] = useState(false);
  const [isUpdateQuestionPopupOpen, setIsUpdateQuestionPopupOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Fetch questions using useCallback to avoid function re-creation on every render
  const fetchQuestions = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/questions/${examId}`);
      setQuestions(response.data || []); // Ensure we always have an array
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    }
  }, [examId]); // Dependency array includes examId

  useEffect(() => {
    fetchQuestions(); // Fetch questions when component mounts or examId changes
  }, [fetchQuestions]); // Dependency array includes fetchQuestions

  // Handle adding a new question
  const handleAddQuestion = async (questionData) => {
    console.log('Exam ID:', examId); // Log the examId to ensure it has the correct value
    try {
      const response = await axios.post(`http://localhost:5000/api/questions/${examId}`, questionData);
      setQuestions([...questions, response.data]); // Add the new question to the state
      setIsAddQuestionPopupOpen(false);
    } catch (error) {
      console.error('Failed to add question:', error);
    }
  };

  // Handle updating an existing question
  const handleUpdateQuestion = async (questionData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/questions/${examId}/${questionData._id}`, questionData);
      setQuestions(prevQuestions => 
        prevQuestions.map(question => 
          question._id === questionData._id ? response.data : question
        )
      );
      setIsUpdateQuestionPopupOpen(false);
      setSelectedQuestion(null);
    } catch (error) {
      console.error('Failed to update question:', error);
    }
  };

  // Handle deleting a question
  const handleDeleteQuestion = async (questionId) => {
    try {
      await axios.delete(`http://localhost:5000/api/questions/${examId}/${questionId}`);
      setQuestions(prevQuestions => 
        prevQuestions.filter(question => question._id !== questionId)
      );
    } catch (error) {
      console.error('Failed to delete question:', error);
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <div className="topbar">
          <div className="toggle" onClick={() => navigate('/')}>
            <IonIcon icon={menuOutline} />
          </div>
          <div className="menu">
            <a href="main.html">
              <IonIcon icon={logOutOutline} />
              <span className="title">Sign Out</span>
            </a>
          </div>
        </div>
        <h1>Manage Questions</h1>
        <button onClick={() => setIsAddQuestionPopupOpen(true)} className="add-question-button">Add Question</button>
        <div className="table-container">
          {questions.map((question, index) => (
            <div key={question._id} className="question-card">
              <div className="question-header">
                <div className="question-index">
                  <strong>Q{index + 1}:</strong> {question.questionText}
                </div>
              </div>
              <div className="question-options">
                <strong>Options:</strong>
                {question.options.map((option, optIndex) => (
                  <div key={optIndex}>{optIndex + 1}. {option}</div>
                ))}
              </div>
              <div className="question-answer">
                <strong>Correct Answer:</strong> {question.correctAnswer}
              </div>
              <div className="question-actions">
                <button
                  onClick={() => {
                    setSelectedQuestion(question);
                    setIsUpdateQuestionPopupOpen(true);
                  }}
                  className="action-button update-button"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteQuestion(question._id)}
                  className="action-button delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {isAddQuestionPopupOpen && (
          <AddQuestionPopup
            togglePopup={() => setIsAddQuestionPopupOpen(false)}
            handleAddQuestion={handleAddQuestion}
          />
        )}
        {isUpdateQuestionPopupOpen && selectedQuestion && (
          <UpdateQuestionPopup
            togglePopup={() => setIsUpdateQuestionPopupOpen(false)}
            handleUpdateQuestion={handleUpdateQuestion}
            question={selectedQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default Question;
