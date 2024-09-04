// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose'); 
// Middleware to authenticate users
const authenticate = async (req, res, next) => {
    const userId = req.headers['user-id'];
    if (!userId) {
        return res.status(401).json({ error: 'No user ID provided.' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ error: 'Server error during authentication.' });
    }
};

// Route to get the current user's details
router.get('/current-user', authenticate, (req, res) => {
    res.status(200).json(req.user);
});

// routes/user.js
router.get('/students', async (req, res) => {
    try {
        const students = await User.find({ userType: 'student' });
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// DELETE a student by ID
router.delete('/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
      
        if (!mongoose.Types.ObjectId.isValid(studentId)) {
            return res.status(400).json({ message: 'Invalid student ID' });
        }

        const student = await User.findById(studentId);
        if (!student) {
            console.log('Student not found');
            return res.status(404).json({ message: 'Student not found' });
        }
        await User.findByIdAndDelete(studentId);
        res.json({ message: 'Student deleted' });
    } catch (err) {
        console.error('Server error during student deletion:', err.message);
        res.status(500).json({ message: err.message });
    }
});

  
  
module.exports = router;
