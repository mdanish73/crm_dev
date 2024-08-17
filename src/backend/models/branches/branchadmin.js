// import mongoose from "mongoose";

// const branchAdmin = new mongoose.Schema(
//   {
//     id: { type: mongoose.Schema.Types.ObjectId },
//     name: { type: String, required: true },
//     phoneNumber: { type: Number, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     CNIC: { type: Number, required: true },
//     photo: { type: String },
//     dateOfBirth: { type: Date },
//     accessLevel: {
//       type: Number,
//       enum: [1, 2, 3, 4],
//       default: 1,
//       required: true
//     },
//   },
//   { timestamps: true }
// );

// const BranchAdmin =
//   mongoose.models?.BranchAdmins || mongoose.model("BranchAdmins", branchAdmin);

// export { BranchAdmin };
