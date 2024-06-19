import { pool } from '../../db.js';

export const getAllEmployees = async () => {
    const [rows] = await pool.query('SELECT * FROM employees');
    return rows;
};


// Obtener un empleado por ID
export const getEmployeeById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
    return rows[0];
};

// Crear un nuevo empleado
export const createEmployee = async (employee) => {
    const { first_name, last_name, email, phone, job_title, salary } = employee;
    const [result] = await pool.query(
        'INSERT INTO employees (first_name, last_name, email, phone, job_title, salary) VALUES (?, ?, ?, ?, ?, ?)',
        [first_name, last_name, email, phone, job_title, salary]
    );
    return { id: result.insertId, ...employee };
};

// Actualizar un empleado por ID
export const updateEmployee = async (id, employee) => {
    const { first_name, last_name, email, phone, job_title, salary } = employee;
    await pool.query(
        'UPDATE employees SET first_name = ?, last_name = ?, email = ?, phone = ?, job_title = ?, salary = ? WHERE id = ?',
        [first_name, last_name, email, phone, job_title, salary, id]
    );
    return { id, ...employee };
};

// Eliminar un empleado por ID
export const deleteEmployee = async (id) => {
    await pool.query('DELETE FROM employees WHERE id = ?', [id]);
    return { id };
};

