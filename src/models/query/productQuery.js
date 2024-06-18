import { pool } from '../../db.js';

export const getAllProducts = async () => {
    const [rows] = await pool.query('SELECT * FROM products');
    return rows;
};


export const getProductById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
};

export const createProduct = async (product) => {
    const { name, description, price, category_id, sku, stock } = product;
    const [result] = await pool.query(
        'INSERT INTO products (name, description, price, category_id, sku, stock) VALUES (?, ?, ?, ?, ?, ?)',
        [name, description, price, category_id, sku, stock]
    );
    return { id: result.insertId, ...product };
};

export const updateProduct = async (id, product) => {
    const { name, description, price, category_id, sku, stock } = product;
    await pool.query(
        'UPDATE products SET name = ?, description = ?, price = ?, category_id = ?, sku = ?, stock = ? WHERE id = ?',
        [name, description, price, category_id, sku, stock, id]
    );
    return { id, ...product };
};

export const deleteProduct = async (id) => {
    await pool.query('DELETE FROM products WHERE id = ?', [id]);
    return { id };
};
