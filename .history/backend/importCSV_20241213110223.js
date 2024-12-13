import csv from 'csv-parser';
import fs from 'fs';
import mongoose from 'mongoose';
import { Prospect } from './models/Prospect.js';
import { CONFIG } from './config.js';
import { calculateScore } from './utils/scoreCalculator.js';

mongoose.connect(CONFIG.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const importCSV = async () => {
  try {
    await Prospect.deleteMany({});  // Clear existing data
    
    await new Promise((resolve, reject) => {
      fs.createReadStream('prospects.csv')
        .pipe(csv())
        .on('data', async (row) => {
          const prospect = new Prospect({
            ...row,
            yearsOfExperience: parseInt(row.yearsOfExperience),
            score: calculateScore(row),
          });
          await prospect.save();
        })
        .on('end', resolve)
        .on('error', reject);
    });

    console.log('CSV file successfully processed');
  } catch (error) {
    console.error('Error importing CSV:', error);
  } finally {
    mongoose.connection.close();
  }
};

importCSV();

