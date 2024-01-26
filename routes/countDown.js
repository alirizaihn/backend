
const express = require('express');
const CountDown = require('../models/countDown.model.js');


const router = express.Router();

router.get('/', async (req, res) => {
    try {
     const countDown = await CountDown.find();
      res.json({data:countDown});
    } catch (error) {
      console.error('Error fetching countDown:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;