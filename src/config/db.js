import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://siva:Sivaprasad03@problem.v2sdi.mongodb.net/?retryWrites=true&w=majority&appName=Problem", {

    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
