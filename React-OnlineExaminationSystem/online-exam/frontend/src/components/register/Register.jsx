import React, { useState } from 'react';
import axios from 'axios';
import '../register/Register.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const [userType, setUserType] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [focus, setFocus] = useState({
        userType: false,
        fullName: false,
        email: false,
        username: false,
        password: false,
        confirmPassword: false
    });

    const handleFocus = (field) => {
        setFocus((prevFocus) => ({ ...prevFocus, [field]: true }));
    };

    const handleBlur = (field, value) => {
        if (value === '') {
            setFocus((prevFocus) => ({ ...prevFocus, [field]: false }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                userType, 
                fullName, 
                email, 
                username, 
                password, 
                confirmPassword // Although you may not need to send this to the backend
            });
            alert(response.data.message);
        } catch (err) {
            if (err.response) {
                console.error(err.response.data); // Log the server response
                setError(err.response.data.error); // Display error message from the server
            } else {
                setError('Registration failed.');
            }
        }
    };
    
    

    return (
        <div className="container">
            <div className="img">
                <img src="./images/reg.jpg" alt="Background for registration" />
            </div>
            <div className="register-content">
                <form onSubmit={handleSubmit}>
                    <h2 className="title">Register</h2>
                    
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
                    <div className="error-message">{error}</div>

                    <div className={`input-div ${focus.fullName ? "focus" : ""}`}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <div className="div">
                            <input 
                                type="text" 
                                value={fullName} 
                                onChange={(e) => setFullName(e.target.value)} 
                                onFocus={() => handleFocus('fullName')}
                                onBlur={(e) => handleBlur('fullName', e.target.value)}
                                className="input" 
                                placeholder=" " 
                            />
                            <h5>Full Name</h5>
                        </div>
                    </div>

                    <div className={`input-div ${focus.email ? "focus" : ""}`}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <div className="div">
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                onFocus={() => handleFocus('email')}
                                onBlur={(e) => handleBlur('email', e.target.value)}
                                className="input" 
                                placeholder=" " 
                            />
                            <h5>Email</h5>
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

                    <div className={`input-div ${focus.confirmPassword ? "focus" : ""}`}>
                        <span className="icon">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                        <div className="div">
                            <input 
                                type="password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                onFocus={() => handleFocus('confirmPassword')}
                                onBlur={(e) => handleBlur('confirmPassword', e.target.value)}
                                className="input" 
                                placeholder=" " 
                            />
                            <h5>Confirm Password</h5>
                        </div>
                    </div>

                    {error && <div className="error-message">{error}</div>}
                    
                    <input type="submit" className="btn" value="Register" />

                   <p>Already have an account? <Link to="/login">Login</Link></p> 
                </form>
               
                   
                
            </div>
        </div>
    );
};

export default Register;
