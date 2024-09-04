import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import './Popup.css';

export const AddQuestionPopup = ({ togglePopup, handleAddQuestion }) => {
  const [questionData, setQuestionData] = useState({
    questionText: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctAnswer: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate data (e.g., check if all options are filled)
    if (!Object.values(questionData).every((field) => field.trim())) {
      alert('Please fill out all fields.');
      return;
    }

    // Convert options into an array
    const options = [
      questionData.option1,
      questionData.option2,
      questionData.option3,
      questionData.option4
    ];

    // Prepare data to send
    const dataToSend = {
      questionText: questionData.questionText,
      options: options,
      correctAnswer: questionData.correctAnswer
    };

    handleAddQuestion(dataToSend);

    // Optionally, reset form after submission
    setQuestionData({
      questionText: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correctAnswer: ''
    });
    togglePopup(); // Close the popup after submission
  };

  return (
    <div className="popup-overlay"> {/* Ensure correct positioning */}
      <div className="popup">
       
        <form id="add-question-form" onSubmit={handleSubmit}>
          <h1>Add Question</h1>
          <IonIcon icon={closeCircle} onClick={togglePopup} className="close-btn" />
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
            <button type="submit" className="submit-button">Add Question</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionPopup;
