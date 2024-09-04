// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ConfirmationPopup from '../popups/ConfirmationPopup';
// import './Index.css';

// const Index = () => {
//   const [exams, setExams] = useState([]);
//   const [attendedExams, setAttendedExams] = useState([]);
//   const [error, setError] = useState('');
//   const [username, setUsername] = useState('');
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       const userId = localStorage.getItem('userId');
//       if (!userId) {
//         setError('No user ID found. Please log in again.');
//         return;
//       }
//       try {
//         const response = await axios.get('http://localhost:5000/api/current-user', {
//           headers: { 'user-id': userId }
//         });
//         setUsername(response.data.username);
//       } catch (err) {
//         setError('Error fetching current user: ' + err.message);
//         console.error('Error fetching current user:', err);
//       }
//     };

//     const fetchExams = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/exams');
//         setExams(response.data);
//       } catch (err) {
//         setError('Error fetching exams: ' + err.message);
//         console.error('Error fetching exams:', err);
//       }
//     };

//     // const fetchAttendedExams = async () => {
//     //     const studentId = localStorage.getItem('userId'); // Get student ID from localStorage
//     //     if (!studentId) {
//     //       setError('No student ID found. Please log in again.');
//     //       return;
//     //     }
//     //     try {
//     //       const response = await axios.get(`http://localhost:5000/api/student-exams/attended/${studentId}`);
//     //       setAttendedExams(response.data);
//     //     } catch (err) {
//     //       setError('Error fetching attended exams: ' + err.message);
//     //       console.error('Error fetching attended exams:', err);
//     //     }
//     //   };

//     fetchCurrentUser();
//     fetchExams();
//     // fetchAttendedExams();
//   }, []);

//   const handleTakeExamClick = (examId) => {
//     setSelectedExam(examId);
//     setIsPopupVisible(true);
//   };

//   const handleConfirm = () => {
//     setIsPopupVisible(false);
//     if (selectedExam) {
//       // Navigate to the exam page
//       window.location.href = `/student-exam/${selectedExam}`;
//     }
//   };

//   const handleCancel = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div className="container">
//       <header className="topbar">
//         <h1>Welcome, {username}</h1>
//       </header>
//       <div className="main-content">
//         <aside className="sidebar">
//           <h2>Sidebar</h2>
//           <ul>
//             <li><a href="/profile">Profile</a></li>
//             <li><a href="/settings">Settings</a></li>
//             <li><a href="/logout">Logout</a></li>
//           </ul>
//         </aside>
//         <div className="content">
//           <h1>Available Exams</h1>
//           {error && <div className="error-message">{error}</div>}
//           <div className="exam-list">
//             {exams.map((exam) => (
//               <div key={exam._id} className="exam-item">
//                 <h3>{exam.examTitle}</h3>
//                 <button 
//                   className="start-exam-btn"
//                   onClick={() => handleTakeExamClick(exam._id)}
//                 >
//                   Take Exam
//                 </button>
//               </div>
//             ))}
//           </div>
          
//           <h1>Attended Exams</h1>
//           <div className="exam-list">
//             {attendedExams.length > 0 ? (
//               attendedExams.map((exam) => (
//                 <div key={exam._id} className="exam-item">
//                   <h3>{exam.examTitle}</h3>
//                   <p>Score: {exam.score}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No attended exams</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <footer className="footer">
//         <p>Footer Content</p>
//       </footer>

//       {/* Render ConfirmationPopup */}
//       <ConfirmationPopup
//         isVisible={isPopupVisible}
//         onConfirm={handleConfirm}
//         onCancel={handleCancel}
//       />
//     </div>
//   );
// };

// export default Index;
// import React, { useEffect, useState } from 'react';  // Ensure useState and useEffect are imported
// import axios from 'axios';
// import ConfirmationPopup from '../popups/ConfirmationPopup';
// import './Index.css';
// import { IonIcon } from '@ionic/react';
// import { menuOutline, homeOutline } from 'ionicons/icons';
// const Index = () => {
//   const [exams, setExams] = useState([]);
//   const [error, setError] = useState('');
//   const [username, setUsername] = useState('');
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [navigationActive, setNavigationActive] = useState(false);
//   const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
//   const toggleNavigation = () => setNavigationActive(!navigationActive);
//   const toggleLogoutDropdown = () => setShowLogoutDropdown(!showLogoutDropdown);

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       const userId = localStorage.getItem('userId');
//       if (!userId) {
//         setError('No user ID found. Please log in again.');
//         return;
//       }
//       try {
//         const response = await axios.get('http://localhost:5000/api/current-user', {
//           headers: { 'user-id': userId }
//         });
//         setUsername(response.data.username);
//       } catch (err) {
//         setError('Error fetching current user: ' + err.message);
//         console.error('Error fetching current user:', err);
//       }
//     };

//     const fetchExams = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/exams');
//         setExams(response.data);
//       } catch (err) {
//         setError('Error fetching exams: ' + err.message);
//         console.error('Error fetching exams:', err);
//       }
//     };

//     fetchCurrentUser();
//     fetchExams();
//   }, []);

//   const handleTakeExamClick = (examId) => {
//     setSelectedExam(examId);
//     setIsPopupVisible(true);
//   };

//   const handleConfirm = () => {
//     setIsPopupVisible(false);
//     if (selectedExam) {
//       // Navigate to the exam page
//       window.location.href = `/student-exam/${selectedExam}`;
//     }
//   };

//   const handleCancel = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div className="container">
//       {/* <header className="topbar">
//         <h1>Welcome, {username}</h1>
//       </header> */}
//        <div className="topbar">
//           <div className="toggle" onClick={toggleNavigation}>
//             <IonIcon icon={menuOutline} />
//           </div>
//           <div className="user">
//             <div className="input-control">
//               <img
//                 src="/path/to/avatar.jpg" 
//                 alt="User Avatar"
//                 id="userAvatar"
//                 onClick={toggleLogoutDropdown}
//               />
//               {showLogoutDropdown && (
//                 <div className="dropdown-content">
//                   <a href="#">Logout</a>
//                 </div>
//               )}
//             </div>
//             <button className="sign-out-button" onClick={() => { /* Add sign out logic here */ }}>Sign Out</button>
//           </div></div>
//       <div className="main-content">
//         <aside className="sidebar">
//           <h2>Sidebar</h2>
//           <ul>
//             <li><a href="/profile">Profile</a></li>
//             <li><a href="/settings">Settings</a></li>
//             <li><a href="/logout">Logout</a></li>
//           </ul>
//         </aside>
//         <div className="content">
//           <h1>Available Exams</h1>
//           {error && <div className="error-message">{error}</div>}
//           <div className="exam-list">
//             {exams.map((exam) => (
//               <div key={exam._id} className="exam-item">
//                 <h3>{exam.examTitle}</h3>
//                 <button 
//                   className="start-exam-btn"
//                   onClick={() => handleTakeExamClick(exam._id)}
//                 >
//                   Take Exam
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <footer className="footer">
//         <p>Footer Content</p>
//       </footer>

//       {/* Render ConfirmationPopup */}
//       <ConfirmationPopup
//         isVisible={isPopupVisible}
//         onConfirm={handleConfirm}
//         onCancel={handleCancel}
//       />
//     </div>
//   );
// };

// export default Index;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ConfirmationPopup from '../popups/SuccessPopup';
import './Index.css';
import { IonIcon } from '@ionic/react';
import { menuOutline,homeOutline} from 'ionicons/icons';

const Index = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState('');
  const [ username,setUsername] = useState('');
  const [selectedExam, setSelectedExam] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [navigationActive, setNavigationActive] = useState(false);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

  const toggleNavigation = () => setNavigationActive(!navigationActive);
  const toggleLogoutDropdown = () => setShowLogoutDropdown(!showLogoutDropdown);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('No user ID found. Please log in again.');
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/current-user', {
          headers: { 'user-id': userId }
        });
        setUsername(response.data.username);
      } catch (err) {
        setError('Error fetching current user: ' + err.message);
        console.error('Error fetching current user:', err);
      }
    };

    const fetchExams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/exams');
        setExams(response.data);
      } catch (err) {
        setError('Error fetching exams: ' + err.message);
        console.error('Error fetching exams:', err);
      }
    };

    fetchCurrentUser();
    fetchExams();
  }, []);

  const handleTakeExamClick = async (examId) => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setPopupMessage('No user ID found. Please log in again.');
        setIsPopupVisible(true);
        return;
      }

      // Check if the exam has already been taken
      const response = await axios.get('http://localhost:5000/api/student-exams/check-status', {
        params: {
          studentId: userId,
          examId: examId
        }
      });

      setSelectedExam(examId);
      if (response.data.hasTaken) {
        setPopupMessage('You have already taken this exam.');
        setIsPopupVisible(true);
      } else {
        // Redirect to exam page directly
        window.location.href = `/student-exam/${examId}`;
      }

    } catch (error) {
      console.error('Error response:', error.response?.data);
      console.error('Error status:', error.response?.status);
      console.error('Error headers:', error.response?.headers);
      console.error('Error request:', error.request);
      console.error('Error message:', error.message);
      console.error('Error config:', error.config);
      setPopupMessage('An error occurred while checking the exam status. Please try again later.');
      setIsPopupVisible(true);
    }
  };

  const handleConfirm = () => {
    setIsPopupVisible(false);
    // Only redirect if the exam was not taken
    if (selectedExam) {
      window.location.href = `/student-exam/${selectedExam}`;
    }
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="container">
      
      <div className="main">
        <aside className={`sidebar ${navigationActive ? 'active' : ''}`}>
        <div className="lo">
          <IonIcon icon={homeOutline} />
          &nbsp;Online Examination System
        </div>
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </aside>
        <div className="index-content">
        <div className="topbar">
        <div className="toggle" onClick={toggleNavigation}>
          <IonIcon icon={menuOutline} />
        </div>
        <div className="user">
          <div className="input-control">
            <img
             src="./images/avatar.svg"
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
          <h1>Available Exams</h1>
          {error && <div className="error-message">{error}</div>}
          <div className="exam-list">
            {exams.map((exam) => (
              <div key={exam._id} className="exam-item">
                <h3>{exam.examTitle}</h3>
                <button 
                  className="start-exam-btn"
                  onClick={() => handleTakeExamClick(exam._id)}
                >
                  Take Exam
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        © 2024 Online Examination System. All rights reserved.
      </footer>

      <ConfirmationPopup
        isVisible={isPopupVisible}
        message={popupMessage}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Index;



