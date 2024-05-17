import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema(
  {
    branchId: { type: String, type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    address: {
        city: { type: String, required: true },
        streetNumber: { type: String, required: true },
        building: { type: String, required: true },
        floorNumber: { type: String, required: true },
      },
    phoneNumber: { type: Number },
    mainBranch: { type: Boolean, default: false },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
    password: { type: String, required: true },
    branchadmin: { type : mongoose.Schema.Types.ObjectId, ref:'BranchAdmin'}
  },
  { timestamps: true }
);



const Branch = mongoose.models?.Branches || mongoose.model('Branches', branchSchema);

export { Branch };