import { pool } from "../db.js";
import { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer  } from '../models/query/customersQuery.js'

export const getCustomers = async (req, res) => {
    try {
        const employees = await getAllCustomers();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};


export const getCustomer = async (req, res) => {
    try {
        const customer = await getCustomerById(req.params.id);
        if (!customer) {
            return res.status(404).send('Cliente no encontrado');
        }
        res.json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el cliente');
    }
};

export const addCustomer = async (req, res) => {
    try {
        const newCustomer = await createCustomer(req.body);
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el cliente');
    }
};

export const editCustomer = async (req, res) => {
    try {
        const updatedCustomer = await updateCustomer(req.params.id, req.body);
        res.json(updatedCustomer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el cliente');
    }
};

export const removeCustomer = async (req, res) => {
    try {
        await deleteCustomer(req.params.id);
        res.status(204).send("Cliente eliminado");
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el cliente');
    }
};