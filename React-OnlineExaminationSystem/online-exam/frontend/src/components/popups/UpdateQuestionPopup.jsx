import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import './Popup.css';

export const UpdateQuestionPopup = ({ togglePopup, handleUpdateQuestion, question }) => {
  const [questionData, setQuestionData] = useState({
    questionText: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctAnswer: ''
  });

  useEffect(() => {
    if (question) {
      setQuestionData({
        questionText: question.questionText,
        option1: question.options[0],
        option2: question.options[1],
        option3: question.options[2],
        option4: question.options[3],
        correctAnswer: question.correctAnswer
      });
    }
  }, [question]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateQuestion({ ...question, ...questionData });
  };

  return (
    <div className="popup-overlay"> {/* Ensure correct positioning */}
      <div className="popup">
        <IonIcon icon={closeCircle} onClick={togglePopup} className="close-btn" />
        <form id="update-question-form" onSubmit={handleSubmit}>
          <h1>Update Question</h1>
          <hr />
          <div className="input-control">
            <label htmlFor="questionText">Question:</label>
            <input
              type="text"
              id="questionText"
              name="questionText"
              value={questionData.questionText}
              onChange={handleChange}
              placeholder="Enter question"
              required
            />
          </div>
          <div className="input-control">
            <label htmlFor="option1">Option 1:</label>
            <input
              type="text"
              id="option1"
              name="option1"
              value={questionData.option1}
              onChange={handleChange}
              placeholder="Enter option 1"
              required
            />
          </div>
          <div className="input-control">
            <label htmlFor="option2">Option 2:</label>
            <input
              type="text"
              id="option2"
              name="option2"
              value={questionData.option2}
              onChange={handleChange}
              placeholder="Enter option 2"
              required
            />
          </div>
          <div className="input-control">
            <label htmlFor="option3">Option 3:</label>
            <input
              type="text"
              id="option3"
              name="option3"
              value={questionData.option3}
              onChange={handleChange}
              placeholder="Enter option 3"
              required
            />
          </div>
          <div className="input-control">
            <label htmlFor="option4">Option 4:</label>
            <input
              type="text"
              id="option4"
              name="option4"
              value={questionData.option4}
              onChange={handleChange}
              placeholder="Enter option 4"
              required
            />
          </div>
          <div className="input-control">
            <label htmlFor="correctAnswer">Correct Answer:</label>
            <input
              type="text"
              id="correctAnswer"
              name="correctAnswer"
              value={questionData.correctAnswer}
              onChange={handleChange}
              placeholder="Enter correct answer"
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">Update Question</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateQuestionPopup;
