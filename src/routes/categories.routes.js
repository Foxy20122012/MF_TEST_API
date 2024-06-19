import { Router } from "express";
import { getCategories,  getCategory, addCategory, editCategory, removeCategory } from "../controllers/categories.controllers.js";

const router = Router();

router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);        
router.post("/categories", addCategory);           
router.put("/categories/:id", editCategory);      
router.delete("/categories/:id", removeCategory);


export default router;