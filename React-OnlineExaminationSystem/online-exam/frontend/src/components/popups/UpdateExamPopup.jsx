import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import './Popup.css';

export const UpdateExamPopup = ({ togglePopup, handleUpdateExam, exam = {}, courses = [] }) => {
  const [examData, setExamData] = useState({ ...exam });

  useEffect(() => {
    setExamData({ ...exam });
  }, [exam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateExam(examData);
  };

  return (
    <div className="popup-overlay"> {/* Ensure correct positioning */}
      <div className="popup">
        <IonIcon icon={closeCircle} onClick={togglePopup} className="close-btn" />
        <form id="update-exam-form" onSubmit={handleSubmit}>
          <h1>Update Exam</h1>
          <hr />
          <div className="input-control">
            <label htmlFor="course">Select Course:</label>
            <select 
              id="course" 
              name="course" 
              value={examData.course || ''} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Select a course</option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>{course.name}</option>
              ))}
            </select>
          </div>
          <div className="input-control">
            <label htmlFor="timeLimit">Exam Time Limit:</label>
            <select 
              id="timeLimit" 
              name="timeLimit" 
              value={examData.timeLimit || ''} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>Select time limit</option>
              <option value="30">30 Minutes</option>
              <option value="60">1 Hour</option>
              <option value="120">2 Hours</option>
            </select>
          </div>
          <div className="input-control">
            <label htmlFor="questionLimit">Question Limit to Display:</label>
            <input 
              type="number" 
              id="questionLimit" 
              name="questionLimit" 
              value={examData.questionLimit || ''} 
              onChange={handleChange} 
              min="1" 
              max="1000" 
              required 
            />
          </div>
          <div className="input-control">
            <label htmlFor="examTitle">Exam Title:</label>
            <input 
              type="text" 
              id="examTitle" 
              name="examTitle" 
              value={examData.examTitle || ''} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-control">
            <label htmlFor="examDescription">Exam Description:</label>
            <textarea 
              id="examDescription" 
              name="examDescription" 
              value={examData.examDescription || ''} 
              onChange={handleChange} 
              rows="8" 
              cols="65" 
              required 
            />
          </div>
          <div className="button-container">
            <button 
              type="submit" 
              className="submit-button"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateExamPopup;
