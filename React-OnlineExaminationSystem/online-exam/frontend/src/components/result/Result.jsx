import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Result.css'; // Assuming you will add some CSS for styling

const Result = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/student-exams/${id}`)
      .then(response => {
        setResult(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching result:', error);
        setError('Failed to fetch result');
      });
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!result) return <div>Loading...</div>;

  const totalQuestions = result.questions.length;
  const percentage = ((result.score / totalQuestions) * 100).toFixed(2);


  return (
    <div className="result-page">
      <h1>Result</h1>
    <div className="result-container">
      <div className="left-side">
        <h2>Questions</h2>
        {result.questions.map((question) => (
          <div key={question._id} className="question-card">
            <p><strong>Question:</strong> {question.questionText}</p>
            <p><strong>Selected Option:</strong> {question.selectedOption}</p>
            <p><strong>Correct Option:</strong> {question.correctOption}</p>
          </div>
        ))}
      </div>
      <div className="right-side">
        <div className="score-card">
          <div className="card-content">
            Score: {result.score} / {totalQuestions}
          </div>
        </div>
        <div className="percentage-card">
          <div className="card-content">
            Percentage: {percentage}%
          </div>
        </div>
      </div>
    </div>
    <button className="back-home-button" onClick={() => navigate('/index')}>
      Back to Home
    </button>
  </div>
);
};

export default Result;
