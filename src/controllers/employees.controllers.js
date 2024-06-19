import { pool } from "../db.js";
import { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from '../models/query/employeesQuery.js'



export const getEmployees = async (req, res) => {
    try {
        const employees = await getAllEmployees();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};


export const getEmployee = async (req, res) => {
    try {
        const employee = await getEmployeeById(req.params.id);
        if (!employee) {
            return res.status(404).send('Empleado no encontrado');
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el empleado');
    }
};

export const addEmployee = async (req, res) => {
    try {
        const newEmployee = await createEmployee(req.body);
        res.status(201).json(newEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el empleado');
    }
};

export const editEmployee = async (req, res) => {
    try {
        const updatedEmployee = await updateEmployee(req.params.id, req.body);
        res.json(updatedEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el empleado');
    }
};

export const removeEmployee = async (req, res) => {
    try {
        await deleteEmployee(req.params.id);
        res.status(204).send("Empleado eliminado");
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el empleado');
    }
};

