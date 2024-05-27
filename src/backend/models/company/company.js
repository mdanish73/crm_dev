import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyname: {
    type: String,
    trim: true,
  },
  contact: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  identificationNumber: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  industry: {
    type: String,
  },
  subIndustry: {
    type: String,
  },
  country: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Countries",
    },
  ],
  companyCeo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CompanyCEO",
  },
});

const companies =
  mongoose.models?.Companies || mongoose.model("Companies", companySchema);
export default companies;
