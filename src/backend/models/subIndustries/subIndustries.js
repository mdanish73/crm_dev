import mongoose from "mongoose";

const subIndustry = new mongoose.Schema({
  subIndustry : [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      subindustrycode: {
        type: String,
        required: true,
        unique: true
      }
    } 
  ]
});

const subIndustries = mongoose.models?.Sub_Industries || mongoose.model('Sub_Industries', subIndustry);
export default subIndustries;