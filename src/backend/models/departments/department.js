import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    code: {
        type: Number,
        required: true,
        unique: true
      },
      description: {
        type: String,
        required: false
      },
      employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employeeModel'
      }],

},{
    timestamps :true,
})

const departmentModel = mongoose?.models?.department || mongoose.model("department",userSchema)
export default departmentModel;