// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         // Fetch user data on mount
//         const fetchCurrentUser = async () => {
//             try {
//                 const userId = localStorage.getItem('userId');
//                 if (!userId) {
//                     throw new Error('No user ID found in localStorage.');
//                 }
//                 const response = await axios.get('http://localhost:5000/api/current-user', {
//                     headers: { 'user-id': userId }
//                 });
//                 console.log('Current User:', response.data);
//             } catch (err) {
//                 console.error('Error fetching current user:', err.response ? err.response.data : err.message);
//             }
//         };
        
//         fetchCurrentUser();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        // Fetch user data on mount
        const fetchCurrentUser = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    throw new Error('No user ID found in localStorage.');
                }
                const response = await axios.get('http://localhost:5000/api/current-user', {
                    headers: { 'user-id': userId }
                });
                console.log('Current User:', response.data);
                setUser(response.data); // Set user data
            } catch (err) {
                console.error('Error fetching current user:', err.response ? err.response.data : err.message);
                setUser(null); // Clear user data on error
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };
        
        fetchCurrentUser();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', credentials);
            const { userId } = response.data;
            localStorage.setItem('userId', userId);
            const userResponse = await axios.get('http://localhost:5000/api/current-user', {
                headers: { 'user-id': userId }
            });
            setUser(userResponse.data);
        } catch (err) {
            console.error('Login failed:', err.response ? err.response.data : err.message);
        }
    };

    const logout = () => {
        localStorage.removeItem('userId');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
