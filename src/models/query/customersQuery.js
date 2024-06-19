import { pool } from '../../db.js';

export const getAllCustomers = async () => {
    const [rows] = await pool.query('SELECT * FROM customers');
    return rows;
};



// Obtener un cliente por ID
export const getCustomerById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM customers WHERE id = ?', [id]);
    return rows[0];
};

// Crear un nuevo cliente
export const createCustomer = async (customer) => {
    const { first_name, last_name, email, phone, address, city, country } = customer;
    const [result] = await pool.query(
        'INSERT INTO customers (first_name, last_name, email, phone, address, city, country) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [first_name, last_name, email, phone, address, city, country]
    );
    return { id: result.insertId, ...customer };
};

// Actualizar un cliente existente
export const updateCustomer = async (id, customer) => {
    const { first_name, last_name, email, phone, address, city, country } = customer;
    await pool.query(
        'UPDATE customers SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, city = ?, country = ? WHERE id = ?',
        [first_name, last_name, email, phone, address, city, country, id]
    );
    return { id, ...customer };
};

// Eliminar un cliente
export const deleteCustomer = async (id) => {
    await pool.query('DELETE FROM customers WHERE id = ?', [id]);
    return { id };
};