import mongoose from "mongoose";

const industry = new mongoose.Schema({
  industry: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      options: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Sub_Industries",
        },
      ],
    },
  ],
});

const industries =
  mongoose.models?.Industries || mongoose.model("Industries", industry);
export default industries;
