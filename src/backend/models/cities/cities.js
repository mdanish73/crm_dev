import mongoose from 'mongoose';

const city = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  hasHeadQuarters: {
    type: Boolean,
    default: false,
    required: true
  },
  branches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Branches',
    }
  ],
  cityNames: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CityNames'
    }
  ]
});

const cities = mongoose.models?.Cities || mongoose.models('Cities', city);
export default cities;