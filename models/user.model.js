const mongoose = require('mongoose');
// Define a schema
const UserSchema = new mongoose.Schema({
  name: {type:String, required: true},
  role: { type: mongoose.Schema.Types.ObjectId, ref: "roles" , required: true},
  email: {type:String, required: true},
  phone: {type:String, required: true},
  instagram: {type:String, required: true},
  referralCode: { type: mongoose.Schema.Types.ObjectId, ref: "referral_codes" },
  registerCode: { type: mongoose.Schema.Types.ObjectId, ref: "referral_codes" , required: true},
  password: String,
},{ timestamps: true, collection:"users" });

// Create a model
const User = mongoose.model('User', UserSchema);

module.exports = User;

