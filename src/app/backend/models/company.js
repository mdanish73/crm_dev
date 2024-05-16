import mongoose from "mongoose";
const companySchema = new mongoose.Schema(
  {
    companyname: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    branch: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch",
      },
    ],
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
    industry: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const companyModel =
  mongoose?.models?.Company || mongoose.model("Company", companySchema);

export default companyModel;
