
const express = require('express');
const ReferralCode = require('../models/referralCode.model.js');
const router = express.Router();

 const generateUniqueReferralCode = () => {
  const datePart = new Date().getTime().toString(36);
  const randomPart = Math.random().toString(36).substr(2, 5);
  return datePart + randomPart;
};
router.get('/init', async (req, res) => {
    try {
      const uniqueReferralCode = generateUniqueReferralCode();
      const newReferralCode = new ReferralCode({
        count:0,
        code:uniqueReferralCode
      })
      await newReferralCode.save()
      res.json({data:uniqueReferralCode});
    } catch (error) {
      console.error('Error fetching Code:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;