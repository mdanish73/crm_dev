import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyname: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
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
    trim: true,
    required: true,
  },
  subIndustry: {
    type: String,
    trim: true,
    required: true,
  },
  country: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Countries",
    },
  ],
  companyCeo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Companyceo",
  },
});

const companyModel =
  mongoose.models?.Company || mongoose.model("Company", companySchema);
export default companyModel;
