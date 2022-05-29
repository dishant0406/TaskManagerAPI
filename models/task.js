const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    unique: true,
    index: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
});

//Export the model
module.exports = mongoose.model('Task', taskSchema);