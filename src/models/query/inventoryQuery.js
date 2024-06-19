import { pool } from '../../db.js';


export const getAllInventory = async () => {
    const [rows] = await pool.query('SELECT * FROM inventory');
    return rows;
};


// Obtener inventario por ID
export const getInventoryById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM inventory WHERE id = ?', [id]);
    return rows[0];
};

// Crear nuevo inventario
export const createInventory = async (inventory) => {
    const { product_id, quantity, location } = inventory;
    const [result] = await pool.query(
        'INSERT INTO inventory (product_id, quantity, location) VALUES (?, ?, ?)',
        [product_id, quantity, location]
    );
    return { id: result.insertId, ...inventory };
};

// Actualizar inventario existente
export const updateInventory = async (id, inventory) => {
    const { product_id, quantity, location } = inventory;
    await pool.query(
        'UPDATE inventory SET product_id = ?, quantity = ?, location = ? WHERE id = ?',
        [product_id, quantity, location, id]
    );
    return { id, ...inventory };
};

// Eliminar inventario
export const deleteInventory = async (id) => {
    await pool.query('DELETE FROM inventory WHERE id = ?', [id]);
    return { id };
};

