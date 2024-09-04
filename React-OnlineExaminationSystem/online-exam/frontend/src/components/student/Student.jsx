import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Student.css'; // Create a separate CSS file for styling
import Sidebar from '../sidebar/Sidebar';
import { IonIcon } from '@ionic/react';
import { menuOutline} from 'ionicons/icons';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  

  const deleteStudent = async (id) => {
    try {
      console.log(`Attempting to delete student with ID: ${id}`);
      const response = await axios.delete(`http://localhost:5000/api/students/${id}`);
      
      if (response.status === 200) {
        console.log(`Student with ID: ${id} deleted successfully.`);
        setStudents(students.filter(student => student._id !== id));
      } else {
        console.error(`Failed to delete student. Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };
  

  return (
    <div className="students-container">
     <Sidebar />
      <div className="students-table-container">
      <div className="topbar">
          <div className="toggle" >
            <IonIcon icon={menuOutline} />
          </div>
          <div className="user">
            <div className="input-control">
              <img
                src="./images/user.jpg"
                alt="User Avatar"
                id="userAvatar"
                
              />
           
            </div>
            <button className="sign-out-button" onClick={() => { /* Add sign out logic here */ }}>Sign Out</button>
          </div>
        </div>
        <h1>Student List</h1>
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id}>
                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td>{student.username}</td>
                <td>
                  <button onClick={() => deleteStudent(student._id)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="footer">
      © 2024 Online Examination System. All rights reserved.
    </footer>
    </div>
    
  );
};

export default StudentsTable;
