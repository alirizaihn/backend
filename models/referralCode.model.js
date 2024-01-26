const mongoose = require('mongoose');
// Define a schema
const ReferralCodeSchema = new mongoose.Schema({
  count: {type:mongoose.Schema.Types.Number, required: true},
  code: {type:mongoose.Schema.Types.String, required: true, unique: true},
},{ collection: 'referral_codes' });

// Create a model
const ReferralCode = mongoose.model("ReferralCode", ReferralCodeSchema);

// Export the model
module.exports =  ReferralCode;
