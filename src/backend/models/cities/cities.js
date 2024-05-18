import mongoose from 'mongoose';

const city = new mongoose.Schema({
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

const cities = mongoose.models?.Cities || mongoose.model('Cities', city);
export default cities;