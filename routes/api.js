const express = require('express');
const router = express.Router();
const AudienceFormEntry = require('../models/AudienceFormEntry');

router.post('/audience', async (req, res) => {
    try {
        const formData = req.body;
        const newFormEntry = new AudienceFormEntry(formData);
        await newFormEntry.save();
        console.log('form data saved', formData);
        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
