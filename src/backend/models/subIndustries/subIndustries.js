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
      options: [
        {
          type: mongoose.Schema.Types.ObjectId
        }
      ]
    } 
  ]
});

const subIndustries = mongoose.models?.Sub_Industries || mongoose.models('Sub_Industries', subIndustry);
export default subIndustries;