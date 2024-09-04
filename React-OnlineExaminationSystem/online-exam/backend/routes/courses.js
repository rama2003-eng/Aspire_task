const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.get('/', async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
  });
  
  router.get('/api/courses', async (req, res) => {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Add a new course
router.post('/', async (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ message: 'Course name is required' });
    }

    const course = new Course({
        name: req.body.name
    });

    try {
        const newCourse = await course.save();
        res.status(201).json({
            message: 'Course added successfully!',
            course: newCourse
        });
    } catch (err) {
        console.error('Error adding course:', err); // Debugging log
        res.status(400).json({ message: 'Failed to create course', error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        // console.log('Request Parameters:', req.params);
        // console.log('Request Body:', req.body);
      const { id } = req.params;
      const { name } = req.body;
  
      // Validate ID
      if (!id) return res.status(400).send('Course ID is required');
  
      // Find and update the course
      const updatedCourse = await Course.findByIdAndUpdate(id, { name }, { new: true });
  
      if (!updatedCourse) return res.status(404).send('Course not found');
  
      res.send(updatedCourse);

    } catch (error) {
      console.error('Error updating course:', error);
      res.status(400).send('Error updating course');
    }
  });


router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send('Course ID is required');
  
      const deletedCourse = await Course.findByIdAndDelete(id);
      if (!deletedCourse) return res.status(404).send('Course not found');
  
      res.send(deletedCourse);
    } catch (error) {
      console.error('Error deleting course:', error);
      res.status(500).send('Error deleting course'); // Use 500 for server errors
    }
  });
  


module.exports = router;
