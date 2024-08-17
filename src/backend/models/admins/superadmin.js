// import mongoose from "mongoose";

// const superAdminSchema = new mongoose.Schema(
//   {
//     fullname: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     username: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     phonenumber: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     AdminType: {
//       type: String,
//       default: "SuperAdmin",
//     },
//     otp: {
//       type: String,
//       // required: true,
//       unique: true,
//       trim: true,
//     },
//     photo: {
//       type: String,
//     },
//     cnic: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     dob: {
//       type: String,
//       required: true,
//     },
//     // isverifeid: {
//     //   type: Boolean,
//     //   default: false,
//     //   required: true,
//     // },
//     accesslevel: {
//       type: Number,
//       default: 4,
//       enum: [1, 2, 3, 4],
//     },
//   },
//   { timestamps: true }
// );

// const superAdminmodel =
//   mongoose.models?.Superadmin || mongoose.model("Superadmin", superAdminSchema);

// export default superAdminmodel;
