
const express = require('express');
const Role = require('../models//role.model.js');


const router = express.Router();

router.get('/', async (req, res) => {
    try {
     const roles = await Role.find();
     const mappedRoles = roles.map(role => ({
        value: role._id,
        label:role.roleName,
     }))
      res.json({data:mappedRoles});
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;