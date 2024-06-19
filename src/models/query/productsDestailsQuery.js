import { pool } from '../../db.js';


// Obtener todos los detalles del producto
export const getAllProductDetails = async () => {
    const [rows] = await pool.query('SELECT * FROM product_details');
    return rows;
};

// Obtener detalles del producto por ID
export const getProductDetailsById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM product_details WHERE id = ?', [id]);
    return rows[0];
};

// Crear nuevos detalles del producto
export const createProductDetails = async (productDetails) => {
    const { product_id, attribute, value } = productDetails;
    const [result] = await pool.query(
        'INSERT INTO product_details (product_id, attribute, value) VALUES (?, ?, ?)',
        [product_id, attribute, value]
    );
    return { id: result.insertId, ...productDetails };
};

// Actualizar detalles del producto existente
export const updateProductDetails = async (id, productDetails) => {
    const { product_id, attribute, value } = productDetails;
    await pool.query(
        'UPDATE product_details SET product_id = ?, attribute = ?, value = ? WHERE id = ?',
        [product_id, attribute, value, id]
    );
    return { id, ...productDetails };
};

// Eliminar detalles del producto
export const deleteProductDetails = async (id) => {
    await pool.query('DELETE FROM product_details WHERE id = ?', [id]);
    return { id };
};
