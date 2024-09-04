import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import AddCoursePopup from '../popups/AddCoursePopup';
import AddExamPopup from '../popups/AddExamPopup';
import UpdateCoursePopup from '../popups/UpdateCoursePopup';
import './Course.css';
import { IonIcon } from '@ionic/react';
import { menuOutline, logOutOutline } from 'ionicons/icons';

const ManageCourse = () => {
  const [courses, setCourses] = useState([]);
  const [isAddCoursePopupOpen, setIsAddCoursePopupOpen] = useState(false);
  const [isAddExamPopupOpen, setIsAddExamPopupOpen] = useState(false);
  const [isUpdateCoursePopupOpen, setIsUpdateCoursePopupOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [navigationActive, setNavigationActive] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses'); // Corrected URL
      setCourses(response.data);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
  };
  

  const handleAddCourse = async (courseData) => {
    try {
      const response = await axios.post('/api/courses', courseData);
      setCourses([...courses, response.data]);
      fetchCourses();
      setIsAddCoursePopupOpen(false);
    } catch (error) {
      console.error('Failed to add course:', error);
    }
  };
  const handleUpdateCourse = async (course) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/courses/${course._id}`, {
        name: course.name
        
      });
      console.log('Course updated:', response.data);
      fetchCourses();
    } catch (error) {
      console.error('Failed to update course:', error);
    }
  };
  
  
  const handleDeleteCourse = async (courseId) => {
    try {
      if (!courseId) {
        console.error('Course ID is missing');
        return;
      }
      await axios.delete(`http://localhost:5000/api/courses/${courseId}`);
      setCourses(courses.filter((course) => course._id !== courseId));
      fetchCourses();
    } catch (error) {
      console.error('Failed to delete course:', error);
    }
  };
  

  const toggleSidebar = () => setNavigationActive(!navigationActive);

  return (
    <div className="admin-container">
      <Sidebar
        navigationActive={navigationActive}
        onAddCourseClick={() => setIsAddCoursePopupOpen(true)}
        onAddExamClick={() => setIsAddExamPopupOpen(true)}
      />

      <div className="main-content">
        <div className="topbar">
          <div className="toggle" onClick={toggleSidebar}>
            <IonIcon icon={menuOutline} />
          </div>
          <div className="menu">
            <a href="main.html">
              <IonIcon icon={logOutOutline} />
              <span className="title">Sign Out</span>
            </a>
          </div>
        </div>

        <div className="dashboard">
          <h1>Manage Courses</h1>
          <div className="course-container">
          {/* Button to open Add Course Popup */}
          <button onClick={() => setIsAddCoursePopupOpen(true)} className="add-course-button">
            Add Course
          </button>

          <div className="cardBox">
            <table>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>
                      <button  className="action-button update-button" onClick={() => {
                        setSelectedCourse(course);
                        setIsUpdateCoursePopupOpen(true);
                      }}>
                        Update
                      </button>
                      <button  className="action-button delete-button" onClick={() => handleDeleteCourse(course._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
</div>
<footer className="footer">
         © 2024 Online Examination System. All rights reserved.
        </footer>
      {isAddCoursePopupOpen && (
        <AddCoursePopup
          togglePopup={() => setIsAddCoursePopupOpen(false)}
          handleAddCourse={handleAddCourse}
        />
      )}

      {isAddExamPopupOpen && (
        <AddExamPopup
          togglePopup={() => setIsAddExamPopupOpen(false)}
        />
      )}

      {isUpdateCoursePopupOpen && selectedCourse && (
        <UpdateCoursePopup
          togglePopup={() => setIsUpdateCoursePopupOpen(false)}
          handleUpdateCourse={handleUpdateCourse}
          course={selectedCourse}
        />
      )}
    </div>
  );
};

export default ManageCourse;
