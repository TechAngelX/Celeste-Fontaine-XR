// models/UserModel.js - for the individual user entity

const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  // userId: {
  //   type: Number, // Represents USER_ID
  //   required: true,
  //   unique: true // Assuming USER_ID is unique
  // },
  uname: {
    type: String, // Represents UNAME
    required: true,
    minlength: 8, // Minimum length to match "1st initial, first 5 characters of last name, 3 random numbers"
    maxlength: 8
  },
  pword: {
    type: String, // Represents PWORD
    required: true,
    minlength: 8, // Minimum length for hashed password
    maxlength: 1024
  },
  fname: {
    type: String, // Represents FNAME
    required: true,
    minlength: 2, // Minimum length
    maxlength: 50 // FNAME max length
  },
  lname: {
    type: String, // Represents LNAME
    required: true,
    minlength: 2, // Minimum length
    maxlength: 50 // LNAME max length
  },
  email: {
    type: String, // Represents EMAIL
    required: true,
    minlength: 8,
    maxlength: 50,
    match: /.+\@.+\..+/ // Simple regex for basic email validation
  },
  accType: {
    type: Number, // Represents ACCTYPE
    enum: [0, 1, 2, 3], // Correspond to Customer, RetailStaff, AdminStaff,ExternalAPI,
    default: 0 // Default to Customer
  },
  created: {
    type: Date,
    default: Date.now // Represents CREATED timestamp
  },
  modified: {
    type: Date,
    default: Date.now // Represents MODIFIED timestamp
  },
  confirmationToken: {
    type: String, // Represents CONFIRMATION_TOKEN
    maxlength: 255 // Max length for the confirmation token
  }
});

// Create the User model from the schema
module.exports = mongoose.model('users', userSchema);
