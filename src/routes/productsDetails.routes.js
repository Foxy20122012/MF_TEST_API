import { Router } from 'express';
import { getProductDetails, getProductDetail, addProductDetail, editProductDetail, removeProductDetail } from '../controllers/productDetailsController.js';

const router = Router();

router.get('/product_details', getProductDetails);
router.get('/product_details/:id', getProductDetail);
router.post('/product_details', addProductDetail);
router.put('/product_details/:id', editProductDetail);
router.delete('/product_details/:id', removeProductDetail);

export default router;
