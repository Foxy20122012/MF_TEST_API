import { Router } from 'express';
import { getProductDetails, getProductDetail, addProductDetail, editProductDetail, removeProductDetail } from '../controllers/productsDetails.controllers.js';

const router = Router();

router.get('/productDetails', getProductDetails);
router.get('/productDetails/:id', getProductDetail);
router.post('/productDetails', addProductDetail);
router.put('/productdetails/:id', editProductDetail);
router.delete('/productdetails/:id', removeProductDetail);

export default router;
