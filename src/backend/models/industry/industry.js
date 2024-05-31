import mongoose from "mongoose";
const industrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  subindustry: [
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    },
  ],
});

const industriesModel =
  mongoose.models?.industries || mongoose.model("industries", industrySchema);
export default industriesModel;
