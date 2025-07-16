const mongoose = require('mongoose');


const sweetSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  category: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model('Sweet', sweetSchema);
