import mongoose from "mongoose";

const industry = new mongoose.Schema({
  industry: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      subindustries: [
        {
          name: {
            type: String,
            trim: true,
          },
        },
      ],
    },
  ],
});

const industries = mongoose.models?.Industries || mongoose.model('Industries', industry);
export default industries;
