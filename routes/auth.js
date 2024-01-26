const express = require('express');
const { register } = require('../controllers/auth.controller.js');
const { checkDuplicateUsernameOrEmail } = require('../middlewares/verifySignUp.js');
const User = require('../models/user.model.js');
const ReferralCode = require('../models/referralCode.model.js');
const Role = require('../models/role.model.js');

const router = express.Router();

router.post('/register',checkDuplicateUsernameOrEmail, register);

router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
     const mappedUsers = await Promise.all(users.map(async (user) => {
        const referralCode = await ReferralCode.findById(user.referralCode);
        const registerCode = await ReferralCode.findById(user.registerCode);
        const role = await Role.findById(user?.role);
  
        return {
          ...user._doc,
          referralCode,
          registerCode,
          role
        };
      }));
      res.json(mappedUsers);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;