import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import Sidebar from '../sidebar/Sidebar';
import { IonIcon } from '@ionic/react';
import { menuOutline, homeOutline,shieldCheckmarkOutline ,chatbubbleOutline ,personOutline} from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 
const Admin = () => {
  const [navigationActive, setNavigationActive] = useState(false);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);


  const [courseCount, setCourseCount] = useState(0);
  const [examCount, setExamCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [error, setError] = useState('');

  const toggleNavigation = () => setNavigationActive(!navigationActive);
  const toggleLogoutDropdown = () => setShowLogoutDropdown(!showLogoutDropdown);
 
  const navigate = useNavigate();
  // Define the fetchCounts function
  const fetchCounts = async () => {
    try {
      const [coursesRes, examsRes, studentsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/admin/courses/count'),
        axios.get('http://localhost:5000/api/admin/exams/count'),
        axios.get('http://localhost:5000/api/admin/students/count')
      ]);

      setCourseCount(coursesRes.data.count);
      setExamCount(examsRes.data.count);
      setStudentCount(studentsRes.data.count);
    } catch (error) {
      console.error('Error fetching counts:', error.response?.data || error.message);
      setError(`Failed to fetch data: ${error.response?.statusText || error.message}`);
    }
  };

  // Call fetchCounts inside useEffect
  useEffect(() => {
    fetchCounts();
  }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get('/api/admin/courses/count');
        setCourseCount(response.data.count);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);
  const handleSignOut = () => {
   
    navigate('/home');
  };
  return (
    <div className="admin-container">
      <Sidebar navigationActive={navigationActive} />

      <div className="main-content">
        <div className="topbar">
          <div className="toggle" onClick={toggleNavigation}>
            <IonIcon icon={menuOutline} />
          </div>
          <div className="user">
            <div className="input-control">
              <img
                src="./images/user.jpg"
                alt="User Avatar"
                id="userAvatar"
                onClick={toggleLogoutDropdown}
              />
           
            </div>
            <button className="sign-out-button" onClick={() => { handleSignOut()}}>Sign Out</button>
          </div>
        </div>

        <div className="dashboard">
          <div className="cardBox">
            <div className="card">
            <div className="iconBx">
                <IonIcon icon={homeOutline} />  Dashboard
              </div>
            </div>
          </div>

          <div className="cardBox">
            <div className="card">
              <div>
                <div className="cardName">Total Courses</div>
                <div className="numbers">{courseCount}</div>
              </div>
              <div className="iconBx">
                <IonIcon icon={shieldCheckmarkOutline} />
              </div>
            </div>
            <div className="card">
              <div>
                <div className="cardName">Total Exams</div>
                <div className="numbers">{examCount}</div>
              </div>
              <div className="iconBx">
                <IonIcon icon={chatbubbleOutline} />
              </div>
            </div>
            <div className="card">
              <div>
                <div className="cardName">Total Students</div>
                <div className="numbers">{studentCount}</div>
              </div>
              <div className="iconBx">
                <IonIcon icon={personOutline} />
              </div>
            </div>
          </div>
        </div>

        {/* Display error message if there is an error */}
        {error && <div className="error-message">{error}</div>}

        {/* Footer added inside the main-content */}
        <footer className="footer">
          © 2024 Online Examination System. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Admin;
