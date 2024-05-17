import mongoose from 'mongoose';

const country_names = new mongoose.Schema({
  country: [
    {
      countryName: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      countryCode: {
        type: String,
        required: true,
        unique: true
      }
    }
  ]
});

const countryNames = mongoose.models?.CountryNames || mongoose.models('CountryNames', country_names);
export default countryNames;