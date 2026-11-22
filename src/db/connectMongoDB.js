import mongoose from 'mongoose';
import {Note} from '../models/note.js';

export const connectMongoDB = async () => {
  const dbUrl = process.env.MONGO_URL;
  try {
    await mongoose.connect(dbUrl);
    console.log('✅ MongoDB connection established successfully');
    await Note.syncIndexes();
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
