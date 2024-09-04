import React from 'react';
import { IonIcon } from '@ionic/react';
import { homeOutline, shieldHalfOutline, clipboardOutline, personOutline, ribbonOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Sidebar.css';

const Sidebar = ({ navigationActive }) => {
  return (
    <div className={`sidebar ${navigationActive ? 'active' : ''}`}>
      <header>
        <div className="lo">
          <IonIcon icon={homeOutline} />
          &nbsp;Online Examination System
        </div>
      </header>
      <nav>
        <ul>
          <li className="heading"><span className="link-name">Courses</span></li>
        
          <li>
            <Link to="/course">
              <IonIcon icon={shieldHalfOutline} />
              <span className="title">Manage Courses</span>
            </Link>
          </li>
          <li className="heading"><span className="link-name">Exam</span></li>
          <li>
            <Link to="/exam">
              <IonIcon icon={clipboardOutline} />
              <span className="title">Manage Exam</span>
            </Link>
          </li>
          <li className="heading"><span className="link-name">Students</span></li>
          <li>
            <Link to="/student">
              <IonIcon icon={personOutline} />
              <span className="title">Manage Student</span>
            </Link>
          </li>
          <li className="heading"><span className="link-name">Reports</span></li>
          <li>
            <Link to="/report">
              <IonIcon icon={ribbonOutline} />
              <span className="title">Students Result</span>
            </Link>
          </li>
          <li className="home-link">
            <Link to="/admin">
              <IonIcon icon={homeOutline} />
             Back to Home
            </Link>
          </li>
        </ul>
      </nav>
      {/* <footer className="sidebar-footer">
        <div className="footer-content">
          <p>© 2024 Online Examination System. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Sidebar;
