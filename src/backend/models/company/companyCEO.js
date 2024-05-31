import mongoose from "mongoose";

const companyAdmin = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  identification_number: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  accessLevel: {
    type: Number,
    enum: [1, 2, 3, 4],
    default: 3,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  otp: {
    type: String,
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const companyCEO =
  mongoose.models?.CompanyCEO || mongoose.model("CompanyCEO", companyAdmin);
export default companyCEO;
