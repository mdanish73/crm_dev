import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
  companyname: {
    type: String,
    trim: true,
    unique: true,
  },
  industry: {
    type: String,
    unique: true,
  },
});
const companyModel =
  mongoose.models?.Company || mongoose.model("Company", companySchema);
export default companyModel;
