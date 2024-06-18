import { pool } from "../db.js";
import {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../models/query/productQuery.js'

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el producto');
    }
};

export const addProduct = async (req, res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el producto');
    }
};

export const editProduct = async (req, res) => {
    try {
        const updatedProduct = await updateProduct(req.params.id, req.body);
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el producto');
    }
};

export const removeProduct = async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.status(204).send("Se ha eliminado correctamente el producto");
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el producto');
    }
};