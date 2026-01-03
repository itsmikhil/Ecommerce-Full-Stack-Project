import mongoose from "mongoose";

let isConnected = false;

const mongoDBConnect = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
      bufferCommands: false,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error; 
  }
};

export default mongoDBConnect;
