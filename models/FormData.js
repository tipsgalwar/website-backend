const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  qualification: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

// Explicitly specifying the collection name 'contactForm'
module.exports = mongoose.model('FormData', formDataSchema, 'contactForm');
