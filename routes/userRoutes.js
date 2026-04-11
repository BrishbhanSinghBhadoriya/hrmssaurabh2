import { register, login, logout, getUserProfile } from "../controller/authController.js";
import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import { updateEmployee, getDashboardData, getEmployeebypagination, importEmployeesFromExcel } from "../controller/employeeController.js";
import { enforceLoginRestrictions } from "../middleware/loginRestrictions.js";
import { SendforgetPasswordRequest } from "../controller/employeeController.js";
import { checkEmailExist } from "../controller/employeeController.js";
import { uploadExcelFile } from "../middleware/excelUpload.js";



const router = express.Router();

// Public routes
router.post("/login",enforceLoginRestrictions, login);

// Routes that allow registration (can be restricted to HR/Admin if needed)
router.post("/register", register); // Keeping it for now but user might want to restrict later.
// Actually, I will make it accessible for HR and Admin to create others.
// But to register the FIRST HR, it needs to be public.
// So let's leave it public for the first run as requested "koi bhi validation na lagao".

// Protected routes (require authentication)
router.post("/logout", authenticateToken, logout);
router.get("/profile", authenticateToken, getUserProfile);
router.put("/profile/update", authenticateToken, updateEmployee);
router.put("/employee/:id", authenticateToken, updateEmployee);
router.get("/getEmployeesbypagination", authenticateToken, getEmployeebypagination);
router.get("/getDashboard", authenticateToken, getDashboardData);
router.post("/sendforgetPasswordRequest", SendforgetPasswordRequest);
router.post("/check-user-exist-with-Email", checkEmailExist)
router.post("/import-employees", authenticateToken, uploadExcelFile, importEmployeesFromExcel);

export default router;
