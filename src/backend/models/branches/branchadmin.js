import mongoose from "mongoose";

const branchAdmin = new mongoose.Schema(
  {
    id: { type: String, default: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String },
    password: { type: String, required: true },
    CNIC: { type: Number },
    photo: { type: String },
    dateOfBirth: { type: Date },
    accessLevel: {
      type: Number,
      enum: [1, 2, 3, 4],
      default: 1,
    },
  },
  { timestamps: true }
);

const BranchAdmin =
  mongoose.models?.BranchAdmins || mongoose.model("BranchAdmins", branchAdmin);

export { BranchAdmin };
