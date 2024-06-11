import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
  },
  cities: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

const countryModel =
  mongoose.models.Country || mongoose.model("Country", countrySchema);

export default countryModel;
