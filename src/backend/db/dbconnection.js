import mongoose from "mongoose";
const dbConnection = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("mongodb is Already Connected!");
    return;
  }
  try {
    await mongoose.connect("mongodb+srv://info:Y8gORoh2XZzPKufo@edify-college.ajku8l8.mongodb.net/crm?retryWrites=true&w=majority");
    // await mongoose.connect("mongodb://127.0.0.1:27017/testing");
    console.log("Mongodb is Now Connected");
  } catch (error) {
    console.log(error, "Error From Mongodb Connection Error");
  }
};
export default dbConnection;
