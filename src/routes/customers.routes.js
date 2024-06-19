import { Router } from "express";
import { getCustomers,    getCustomer, addCustomer, editCustomer, removeCustomer } from "../controllers/customers.controllers.js";

const router = Router();

router.get("/customers", getCustomers);
router.get('/customers/:id', getCustomer);
router.post('/customers', addCustomer);
router.put('/customers/:id', editCustomer);
router.delete('/customers/:id', removeCustomer);



export default router;