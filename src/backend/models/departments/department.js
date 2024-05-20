import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{2}$/.test(v) && parseInt(v, 10) >= 1 && parseInt(v,10) <= 99;
            }, 
            message: props => `${props.value} is not a valid two-digit number! It must be between 01 and 99.`
        }   
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