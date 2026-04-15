import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    // Authentication & Basic Info
    username: { type: String, unique: true, required: true },  
    password: { type: String, required: true }, 
    role: { type: String, enum: ["employee", "manager", "hr", "admin"], default: "employee" },
    
    // Status Flags
    isAdmin: { type: Boolean, default: false },
    isManager: { type: Boolean, default: false },
    isHR: { type: Boolean, default: false },
    isEmployee: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
    status: { type: String, enum: ["active", "inactive", "terminated"], default: "active" },
    
    // Personal Information
    name: { type: String, default: "" },
    fatherName:{type:String,default:""},
    bloodGroup:{type:String,default:""},
    email: { type: String, required: true, unique: true },
    phone: { type: String, default: "" },
    
    address: {
        street: { type: String, default: "" },   
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        zip: { type: String, default: "" },
        country: { type: String, default: "India" }
      },
      
    dob: { type: Date, default: null },  
    gender: { type: String, enum: ["male", "female", "other"], default: "male" },
    profilePicture: { type: String, default: "" },
    professionalEmailId:{type:String, default: ""},
    emergencyContactNo:{type:String, default: ""},

    
    // Employment Information
    employeeId: { type: String, unique: true },
    joiningDate: { type: Date, default: Date.now }, 
    experience: [
        {
          company: { type: String, default:" " },
          designation: { type: String, default:" " },
          startDate: { type: Date, default: null },
          endDate: { type: Date, default: null }, 
          description: { type: String, default: "" } 
        }
      ],
      
      education: [
        {
          degree: { type: String, default: "" },   
          institution: { type: String, default: "" }, 
          fieldOfStudy: { type: String, default: "" },
          startDate: { type: Date },
          endDate: { type: Date },
          grade: { type: String, default: "" }        
        }
      ],
      
    
    // Bank Information
    bankDetails: [
        {
          bankName: { type: String, default: "" },
          bankAccountNumber: { type: String, default: "" },
          bankAccountType: { type: String, enum: ["savings", "current"], default: "savings" },
          bankIFSC: { type: String, default: "" },
          bankAccountHolderName: { type: String, default: "" },
         
        }
      ],
      
    // Work Details
    department: { type: String, enum: ["IT", "HR", "Marketing", "Sales", "Other"], default: "IT" },
    designation: { type: String, default: ""  },
    jobType:{type:String,enum:["FULL TIME" ,"INTERN","FREELANCE"]},
    workMode:{type:String,default:" "},
    lastLogin: { type: Date, default: Date.now },
    lastLogout: { type: Date, default: null },
    lastLoginImage: { type: String, default: "" },
    
    reportingTo: { 
        type: String,
        trim: true,
        default:" "
    },
    
    // Salary Structure (NEW FIELDS ADDED)
    salary: {
        basic: { type: Number, default: 0 },                    // Basic salary
        hra: { type: Number, default: 0 },                      // House Rent Allowance
        specialAllowance: { type: Number, default: 0 },         // Special Allowance
        pfContribution: { type: Number, default: 0 },           // PF deduction
        totalMonthly: { type: Number, default: 0 },             // Total monthly salary
        totalAnnual: { type: Number, default: 0 }               // Annual CTC
    },

    kraLimits: {
        calls: { type: Number, default: 250 },
        talktime: { type: Number, default: 150 }, // in minutes
        sales: { type: Number, default: 1 }
    },

    documents:{
        adharNumber:{type:String,default:""},
        panNumber:{type:String,default:""},
        uanNumber:{type:String,default:""},                     // NEW: UAN number for PF
        adharImage: { type: String, default: "" },
        panImage: { type: String, default: "" },
        experienceLetterImage: { type: String, default: "" },
        MarksheetImage_10: { type: String, default: "" },
        MarksheetImage_12: { type: String, default: "" },
        MarksheetImage_Graduation: { type: String, default: "" },
        MarksheetImage_PostGraduationImage: { type: String, default: "" }
}
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;