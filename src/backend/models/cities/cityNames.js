import mongoose from 'mongoose';

const city_names = new mongoose.Schema({
  city: [
    {
      cityName: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      cityCode: {
        type: String,
        required: true,
        unique: true
      }
    }
  ]
});

const cityNames = mongoose.models?.CityNames || mongoose.models('CityNames', city_names);
export default cityNames;