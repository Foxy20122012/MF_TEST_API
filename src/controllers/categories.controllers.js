import { pool } from "../db.js";
import {getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../models/query/categoriesQuery.js'



export const getCategories = async (req, res) => {
    try {
        const category = await getAllCategories();
        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};


export const getCategory = async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        if (!category) {
            return res.status(404).send('Categoría no encontrada');
        }
        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la categoría');
    }
};

export const addCategory = async (req, res) => {
    try {
        const newCategory = await createCategory(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la categoría');
    }
};

export const editCategory = async (req, res) => {
    try {
        const updatedCategory = await updateCategory(req.params.id, req.body);
        res.json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar la categoría');
    }
};

export const removeCategory = async (req, res) => {
    try {
        await deleteCategory(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar la categoría');
    }
};