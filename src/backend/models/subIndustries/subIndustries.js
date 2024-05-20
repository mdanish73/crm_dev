import mongoose from "mongoose";

const subIndustry = new mongoose.Schema({
  subIndustry : [
    {
      name: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      code: {
        type: String,
        required: true,
        unique: true
      }
    } 
  ]
});

const subIndustries = mongoose.models?.Sub_Industries || mongoose.models('Sub_Industries', subIndustry);
export default subIndustries;