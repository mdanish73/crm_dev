// import mongoose from "mongoose";
// const dbConnection = async () => {
//   if (mongoose.connection.readyState >= 1) {
//     console.log("mongodb is Already Connected!");
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.DB_URI);
//     // await mongoose.connect("mongodb://127.0.0.1:27017/testing");
//     console.log("Mongodb is Now Connected");
//   } catch (error) {
//     console.log(error, "Error From Mongodb Connection Error");
//   }
// };
// export default dbConnection;
// //