import { pool } from "../db.js";
import { getAllProductDetails, getProductDetailsById, createProductDetails, updateProductDetails, deleteProductDetails } from '../models/query/productsDestailsQuery.js';

export const getProductDetails = async (req, res) => {
    try {
        const productDetails = await getAllProductDetails();
        res.json(productDetails);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los detalles del producto');
    }
};

export const getProductDetail = async (req, res) => {
    try {
        const productDetail = await getProductDetailsById(req.params.id);
        if (!productDetail) {
            return res.status(404).send('Detalle del producto no encontrado');
        }
        res.json(productDetail);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el detalle del producto');
    }
};

export const addProductDetail = async (req, res) => {
    try {
        const newProductDetail = await createProductDetails(req.body);
        res.status(201).json(newProductDetail);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el detalle del producto');
    }
};

export const editProductDetail = async (req, res) => {
    try {
        const updatedProductDetail = await updateProductDetails(req.params.id, req.body);
        res.json(updatedProductDetail);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el detalle del producto');
    }
};

export const removeProductDetail = async (req, res) => {
    try {
        await deleteProductDetails(req.params.id);
        res.status(204).send("Detalle del producto eliminado");
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el detalle del producto');
    }
};
