import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import './Popup.css';

const UpdateCoursePopup = ({ togglePopup, handleUpdateCourse, course }) => {
  const [courseName, setCourseName] = useState(course.name);
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await handleUpdateCourse({ ...course, name: courseName });
      setMessage('Course updated successfully!');
      setCourseName(''); // Clear the input
      setTimeout(() => {
        togglePopup(); // Close the popup after a short delay
      }, 2000);
    } catch (error) {
      setMessage('Failed to update course.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
      <IonIcon icon={closeCircle} onClick={togglePopup} style={{ float: 'left', fontSize: '2.0em', color: '#287bff', position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer", }} />
        <form onSubmit={handleSubmit}>
          <h1>Update Course</h1>
          <hr />
          <div className="input-control">
            <label htmlFor="courseName">Course Name:</label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="submit">Update</button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateCoursePopup;
