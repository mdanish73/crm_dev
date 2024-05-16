import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
  companyname: {
    type: String,
    trim: true,
  },
  industry: {
    type: String,
  },
});
const companyModel =
  mongoose.models?.Company || mongoose.model("Company", companySchema);
export default companyModel;
