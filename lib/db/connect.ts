import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI missing in .env.local');
}

async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('🚀 Already connected to database');
      return;
    }

    await mongoose.connect(MONGODB_URI);
    console.log('✅ Database connected successfully!');
  } catch (error) {
    console.error('❌ Database connection error:', error);
    throw error;
  }
}

export default connectDB;