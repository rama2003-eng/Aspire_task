// src/components/Layout.js

import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, homeOutline, shieldCheckmarkOutline, shieldHalfOutline, bookOutline, clipboardOutline, personOutline, ribbonOutline, closeCircle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import './Layout.css'; // Import your CSS for layout styling

const Layout = ({ children }) => {
  const [navigationActive, setNavigationActive] = useState(false);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

  const toggleNavigation = () => setNavigationActive(!navigationActive);
  const toggleLogoutDropdown = () => setShowLogoutDropdown(!showLogoutDropdown);

  return (
    <div className="layout">
      <div className={`sidebar ${navigationActive ? 'active' : ''}`}>
        <header>
          <div className="logo">
            <IonIcon icon={homeOutline} />
            &nbsp;Online Examination System
          </div>
        </header>
        <nav>
          <ul>
            <li className="heading"><span className="link-name">Courses</span></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); /* Handle add course popup */ }}><IonIcon icon={shieldCheckmarkOutline} /><span className="title">Add Courses</span></a></li>
            <li>
              <Link to="/course">
                <IonIcon icon={shieldHalfOutline} />
                <span className="title">Manage Courses</span>
              </Link>
            </li>
            <li className="heading"><span className="link-name">Exam</span></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); /* Handle add exam popup */ }}><IonIcon icon={bookOutline} /><span className="title">Add Exam</span></a></li>
            <li><a href="manageexam.html"><IonIcon icon={clipboardOutline} /><span className="title">Manage Exam</span></a></li>
            <li className="heading"><span className="link-name">Students</span></li>
            <li><a href="managestudent.html"><IonIcon icon={personOutline} /><span className="title">Manage Student</span></a></li>
            <li className="heading"><span className="link-name">Reports</span></li>
            <li><a href="studentresult.html"><IonIcon icon={ribbonOutline} /><span className="title">Students Result</span></a></li>
            <li className="home-link"><a href="admin.html"><IonIcon icon={homeOutline} /><div className="title">Back to Home</div></a></li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="topbar">
          <div className="toggle" onClick={toggleNavigation}>
            <IonIcon icon={menuOutline} />
          </div>
          <div className="user">
            <div className="input-control">
              <img
                src="/path/to/avatar.jpg" // Update with the actual path
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

        <div className="content">
          {children}
        </div>

        <footer>
          <div className="footer-content">
            <p>&copy; 2024 Online Examination System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
