const mongoose = require('mongoose');
// Define a schema
const CountDownSchema = new mongoose.Schema({
  count: {type:mongoose.Schema.Types.Number, required: true},
  code: {type:mongoose.Schema.Types.String, required: true, unique: true},
},{ collection: 'countdown' });

// Create a model
const CountDown = mongoose.model("CountDown", CountDownSchema);

// Export the model
module.exports =  CountDown;
