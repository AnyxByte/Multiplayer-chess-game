import mongoose from "mongoose";

export default async function connectDb() {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected successfully");
  } catch (error) {
    console.log("error connecting to db", error);
  }
}
