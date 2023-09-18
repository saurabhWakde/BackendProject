const mongoose = require('mongoose');

// Define a schema for the data
const travelSchema = new mongoose.Schema({
  image_url: String,
  destination_title: String,
  location: String,
  grade: Number,
  fees: Number,
  description: String,
  id: Number,
});

// Create a model based on the schema
const Data = mongoose.model('Data', travelSchema);

module.exports = Data;
