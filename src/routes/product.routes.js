import { Router } from "express";
import {getProducts, getProduct, addProduct, editProduct, removeProduct} from '../controllers/products.controllers.js'

const router = Router();

router.get("/products", getProducts);
router.get('/products/:id', getProduct);
router.post('/products', addProduct);
router.put('/products/:id', editProduct);
router.delete('/products/:id', removeProduct);



export default router;