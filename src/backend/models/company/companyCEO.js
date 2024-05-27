import mongoose from "mongoose";

const companyAdmin = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  identification_number: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    unique: true,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  accessLevel: {
    type: Number,
    enum: [1, 2, 3, 4],
    default: 3
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  otp: {
    type: String,
    unique: true
  },
  isVerified: {
    type: Boolean,
    default: false,
    required: true
  }
});

const companyCEO = mongoose.models?.CompanyCEO || mongoose.model('CompanyCEO', companyAdmin);
export default companyCEO;