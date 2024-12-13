import mongoose from 'mongoose';

const prospectSchema = new mongoose.Schema({
  name: String,
  email: String,
  country: String,
  jobTitle: String,
  yearsOfExperience: Number,
  industry: String,
  companySize: String,
  score: Number,
});

export const Prospect = mongoose.model('Prospect', prospectSchema);

