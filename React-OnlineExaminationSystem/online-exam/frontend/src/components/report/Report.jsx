// src/pages/Report.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import './Report.css'; // Add your styles for the report page here
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
const Report = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);
  const [navigationActive, setNavigationActive] = useState(false);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
  const toggleLogoutDropdown = () => setShowLogoutDropdown(!showLogoutDropdown);
  const toggleNavigation = () => setNavigationActive(!navigationActive);
  useEffect(() => {
    axios.get('http://localhost:5000/api/student-exams')
      .then(response => {
        setReports(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
        setError('Failed to fetch reports');
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!reports.length) return <div>Loading...</div>;

  // Group reports by exam title
  const groupedReports = reports.reduce((acc, report) => {
    if (!acc[report.examTitle]) {
      acc[report.examTitle] = [];
    }
    acc[report.examTitle].push(report);
    return acc;
  }, {});

  return (
    <div className="page-container">
      <Sidebar />
      <div className="report-content">
      <div className="topbar">
          <div className="toggle" onClick={toggleNavigation}>
            <IonIcon icon={menuOutline} />
          </div>
          <div className="user">
            <div className="input-control">
              <img
                src="/path/to/avatar.jpg" 
                alt="User Avatar"
                id="userAvatar"
                onClick={toggleLogoutDropdown}
              />
              {showLogoutDropdown && (
                <div className="dropdown-content">
                  <a href="#">Logout</a>
                </div>
              )}
            </div>
            <button className="sign-out-button" onClick={() => { /* Add sign out logic here */ }}>Sign Out</button>
          </div>
        </div> 
        <h1>Reports</h1>
        {Object.keys(groupedReports).map(examTitle => (
          <div key={examTitle} className="exam-section">
            <h2>{examTitle}</h2>
            <table className="report-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Score</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {groupedReports[examTitle].map(report => (
                  <tr key={report._id}>
                    <td>{report.studentName}</td>
                    <td>{report.score}</td>
                    <td>{report.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <footer className="footer">
          © 2024 Online Examination System. All rights reserved.
        </footer>
    </div>
    
  );
};

export default Report;
