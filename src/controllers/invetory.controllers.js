import { pool } from "../db.js";
import { getAllInventory, getInventoryById, createInventory, updateInventory, deleteInventory  } from '../models/query/inventoryQuery.js'



export const getInventorys = async (req, res) => {
    try {
        const employees = await getAllInventory();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los datos del inventario');
    }
};


export const getInventoryItem = async (req, res) => {
    try {
        const inventoryItem = await getInventoryById(req.params.id);
        if (!inventoryItem) {
            return res.status(404).send('Artículo de inventario no encontrado');
        }
        res.json(inventoryItem);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el artículo de inventario');
    }
};

export const addInventoryItem = async (req, res) => {
    try {
        const newInventoryItem = await createInventory(req.body);
        res.status(201).json(newInventoryItem);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el artículo de inventario');
    }
};

export const editInventoryItem = async (req, res) => {
    try {
        const updatedInventoryItem = await updateInventory(req.params.id, req.body);
        res.json(updatedInventoryItem);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el artículo de inventario');
    }
};

export const removeInventoryItem = async (req, res) => {
    try {
        await deleteInventory(req.params.id);
        res.status(204).send("Artículo de inventario eliminado");
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el artículo de inventario');
    }
};


