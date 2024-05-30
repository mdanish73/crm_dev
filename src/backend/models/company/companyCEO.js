import mongoose from "mongoose";

const companyAdmin = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
  },
  identification_number: {
    type: String,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true,
  },
  dateOfBirth: {
    type: String,
  },
  accessLevel: {
    type: Number,
    enum: [1, 2, 3, 4],
    default: 3,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  otp: {
    type: String,
    unique: true,
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
