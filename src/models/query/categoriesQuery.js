import { pool } from '../../db.js';

export const getAllCategories = async () => {
    const [rows] = await pool.query('SELECT * FROM categories');
    return rows;
};


export const getCategoryById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [id]);
    return rows[0];
};


export const createCategory = async (category) => {
    const { name, description } = category;
    const [result] = await pool.query(
        'INSERT INTO categories (name, description) VALUES (?, ?)',
        [name, description]
    );
    return { id: result.insertId, ...category };
};


export const updateCategory = async (id, category) => {
    const { name, description } = category;
    await pool.query(
        'UPDATE categories SET name = ?, description = ? WHERE id = ?',
        [name, description, id]
    );
    return { id, ...category };
};


export const deleteCategory = async (id) => {
    await pool.query('DELETE FROM categories WHERE id = ?', [id]);
    return { id };
};