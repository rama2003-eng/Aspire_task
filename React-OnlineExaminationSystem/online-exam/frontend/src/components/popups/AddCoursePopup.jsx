import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import './Popup.css'; // Ensure this file is in the correct location

const AddCoursePopup = ({ togglePopup, handleAddCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send the course data to the backend
    try {
      const response = await fetch('http://localhost:5000/api/courses', { // Adjusted URL to include /api
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: courseName })
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message); // Show success message
        setCourseName(''); // Clear the input
        setTimeout(() => {
          togglePopup(); // Close the popup after a short delay
        }, 2000);
      } else {
        setMessage(result.message || 'Failed to add course'); // Show error message
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.'); // Handle network or server errors
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
          <h1>Add Course</h1>
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
            <button type="submit">Add Now</button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddCoursePopup;
