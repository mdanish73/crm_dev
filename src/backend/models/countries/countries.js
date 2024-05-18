import mongoose from 'mongoose';

const country = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  hasHeadQuarters: {
    type: Boolean,
    required: true,
    default: false
  },
  cities: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Cities'
    }
  ],
  countryNames: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CountryNames'
    }
  ]
});

const countries = mongoose.models?.Countries || mongoose.models('Countries', country);
export default countries;