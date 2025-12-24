const express = require('express');
const router = express.Router();
const Course = require('./model.course'); // Import the Course model

router.post('/', async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const result = await Course.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json({ message: 'Course updated successfully', result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await Course.deleteOne({ _id: req.params.id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json({ message: 'Course deleted successfully', result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
