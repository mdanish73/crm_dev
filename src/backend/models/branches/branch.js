import mongoose from "mongoose";

const branchSchema = new mongoose.Schema(
  {
    branchId: { type: String, default: mongoose.Types.ObjectId },
    name: { type: String, required: true },
    address: { type: String },
    phoneNumber: { type: Number },
    mainBranch: { type: Boolean, default: false },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const BranchAdmin = new mongoose.Schema(
  {
    id: { type: String, default: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String },
    password: { type: String, required: true },
    CNIC: { type: Number },
    photo: { type: String },
    dateOfBirth: { type: Date },
    branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
    accessLevel: {
      type: Number,
      enum: [1, 2, 3, 4],
      default: 1,
    },
  },
  { timestamps: true }
);

// const Branch = mongoose.models.Branch || mongoose.model('Branch', branchSchema);

module.exports = { branchSchema, BranchAdmin };
