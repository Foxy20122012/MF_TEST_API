import { Router } from "express";
import { getInventorys, getInventoryItem, addInventoryItem, editInventoryItem, removeInventoryItem  } from "../controllers/invetory.controllers.js";

const router = Router();

router.get("/inventory", getInventorys);
router.get('/inventory/:id', getInventoryItem);
router.post('/inventory', addInventoryItem);
router.put('/inventory/:id', editInventoryItem);
router.delete('/inventory/:id', removeInventoryItem);


export default router;