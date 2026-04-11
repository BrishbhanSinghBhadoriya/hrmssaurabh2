import mongoose from "mongoose";

const LeaveSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    
    leaveType: { type: String, enum: ["Casual", "Sick", "Earned", "Maternity", "Short Leave", "LOP", "FOP"] },
    role:{type:String,required:true},
    startDate: Date,
    endDate: Date,
    reason: String,
    remarks: { type: String, default: "" },
    status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }
  }, { timestamps: true });
  const Leave = mongoose.model("Leave", LeaveSchema);
  export default Leave;
