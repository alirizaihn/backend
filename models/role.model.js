// Import mongoose
const mongoose = require('mongoose');

// Define a schema
const RoleSchema = new mongoose.Schema({
  roleId: {type:mongoose.Schema.Types.String, required: true, unique: true},
  roleName: {type:mongoose.Schema.Types.String, required: true},
},{ collection: 'roles' });

// Create a model
const Role = mongoose.model("Roles", RoleSchema);

module.exports = Role;