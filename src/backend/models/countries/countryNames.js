import mongoose from "mongoose";

const countryName = new mongoose.Schema({
  country: [
    {
      countryName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      countryCode: {
        type: String,
        required: true,
        unique: true,
      },
      cities: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "CityNames",
        },
      ],
    },
  ],
});

const countryNamemodel =
  mongoose.models?.CountryName || mongoose.model("countryName", countryName);
export default countryNamemodel;
