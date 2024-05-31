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
  mongoose.models?.Industries || mongoose.model("Industries", industrySchema);
export default industriesModel;
