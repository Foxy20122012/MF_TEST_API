import { Router } from "express";
import { getEmployees, getEmployee, addEmployee, editEmployee, removeEmployee } from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee);      
router.post("/employees", addEmployee);          
router.put("/employees/:id", editEmployee);      
router.delete("/employees/:id", removeEmployee);



export default router;

