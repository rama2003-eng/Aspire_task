import React, { useState } from 'react';
import axios from 'axios';
import '../login/Login.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [userType, setUserType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [focus, setFocus] = useState({
        userType: false,
        username: false,
        password: false
    });

    const navigate = useNavigate();

    const handleFocus = (field) => {
        setFocus((prevFocus) => ({ ...prevFocus, [field]: true }));
    };

    const handleBlur = (field, value) => {
        if (value === '') {
            setFocus((prevFocus) => ({ ...prevFocus, [field]: false }));
        }
    };

   // In your login function
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/login', { username, password });
        if (response.data.message === 'Login successful!') {
            // Store user ID in localStorage or context
            localStorage.setItem('userId', response.data.userId);
            navigate(userType === 'admin' ? '/admin' : '/index'); // Navigate to the appropriate page
        } else {
            setError(response.data.error || 'Invalid credentials.');
        }
    } catch (err) {
        setError('Invalid credentials.');
        console.error('Login Error:', err);
    }
};


    return (
        <div className="container">
            <div className="img">
                <img src="./images/8.jpg" alt="Login" />
            </div>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <img src="./images/student.png" alt="Student" />
                    <h2 className="title">Login</h2>

                    <div className={`input-div ${focus.userType ? "focus" : ""}`}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </span>
                        <div className="div">
                            <select 
                                value={userType} 
                                onChange={(e) => setUserType(e.target.value)} 
                                onFocus={() => handleFocus('userType')}
                                onBlur={(e) => handleBlur('userType', e.target.value)}
                                className="input"
                            >
                                <option value="" disabled>Select User Type</option>
                                <option value="student">Student</option>
                                <option value="admin">Admin</option>
                            </select>
                         
                        </div>
                    </div>

                    <div className={`input-div ${focus.username ? "focus" : ""}`}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <div className="div">
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                onFocus={() => handleFocus('username')}
                                onBlur={(e) => handleBlur('username', e.target.value)}
                                className="input" 
                                placeholder=" " 
                            />
                            <h5>Username</h5>
                        </div>
                    </div>

                    <div className={`input-div ${focus.password ? "focus" : ""}`}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                        <div className="div">
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                onFocus={() => handleFocus('password')}
                                onBlur={(e) => handleBlur('password', e.target.value)}
                                className="input" 
                                placeholder=" " 
                            />
                            <h5>Password</h5>
                        </div>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="btn">Login</button>
                    <p>Don't have an account? <Link to="/register">Create Account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
