/*Datos de categorias*/
INSERT INTO categories (name, description) VALUES
('Cocina', 'Muebles y accesorios para la cocina, incluyendo gabinetes, islas y más.'),
('Comedor', 'Muebles para el comedor, como mesas, sillas y vitrinas.'),
('Dormitorio', 'Muebles para el dormitorio, incluyendo camas, armarios y mesitas de noche.'),
('Sala de Estar', 'Muebles para la sala de estar, como sofás, mesas de centro y estanterías.'),
('Oficina', 'Muebles para la oficina, como escritorios, sillas y estanterías.');

/*Datos de products*/
INSERT INTO products (name, description, price, category_id, sku, stock) VALUES
('Gabinete de Cocina', 'Gabinete de cocina de madera con acabado en blanco.', 299.99, 1, 'COC-001', 10),
('Mesa de Comedor', 'Mesa de comedor de madera para 6 personas.', 499.99, 2, 'COM-001', 5),
('Cama Queen Size', 'Cama queen size con cabecera acolchada.', 799.99, 3, 'DOR-001', 7),
('Sofá de Seccional', 'Sofá de seccional moderno para sala de estar.', 899.99, 4, 'SAL-001', 3),
('Escritorio de Oficina', 'Escritorio de oficina con almacenamiento.', 199.99, 5, 'OFI-001', 12),
('Estantería de Cocina', 'Estantería de metal para almacenamiento de cocina.', 149.99, 1, 'COC-002', 8),
('Silla de Comedor', 'Silla de comedor tapizada en tela.', 99.99, 2, 'COM-002', 20),
('Mesita de Noche', 'Mesita de noche de madera con dos cajones.', 129.99, 3, 'DOR-002', 15),
('Mesa de Centro', 'Mesa de centro de cristal y metal para sala de estar.', 249.99, 4, 'SAL-002', 10),
('Silla de Oficina', 'Silla ergonómica de oficina con soporte lumbar.', 149.99, 5, 'OFI-002', 25);


-- Insertar datos reales para 5 clientes
INSERT INTO customers (first_name, last_name, email, phone, address, city, country) VALUES
('Laura', 'Gonzalez', 'laura.gonzalez@gmail.com', '50123456', 'Av. La Reforma 123', 'Guatemala City', 'Guatemala'),
('Pedro', 'Ramirez', 'pedro.ramirez@gmail.com', '50234567', 'Calle Real 45', 'Antigua Guatemala', 'Guatemala'),
('Sofia', 'Mendez', 'sofia.mendez@gmail.com', '50345678', 'Boulevard Liberación 789', 'Guatemala City', 'Guatemala'),
('Carlos', 'Fernandez', 'carlos.fernandez@gmail.com', '50456789', 'Zona 10, Edificio Reforma', 'Guatemala City', 'Guatemala'),
('Mariana', 'Lopez', 'mariana.lopez@gmail.com', '50567890', 'Zona 14, Calle Las Americas', 'Guatemala City', 'Guatemala');

/*Detalles de los productos*/

-- Insertar datos en la tabla product_details
INSERT INTO product_details (product_id, attribute, value) VALUES
(1, 'Material', 'Madera'),
(1, 'Color', 'Blanco'),
(2, 'Material', 'Madera'),
(2, 'Capacidad', '6 personas'),
(3, 'Tamaño', 'Queen Size'),
(4, 'Estilo', 'Moderno'),
(4, 'Color', 'Gris'),
(5, 'Función', 'Almacenamiento'),
(5, 'Material', 'Madera'),
(6, 'Material', 'Metal'),
(6, 'Color', 'Negro'),
(7, 'Material', 'Tela'),
(7, 'Color', 'Beige'),
(8, 'Material', 'Madera'),
(8, 'Color', 'Marrón'),
(9, 'Material', 'Cristal y Metal'),
(9, 'Color', 'Transparente y Plata'),
(10, 'Función', 'Ergonómica'),
(10, 'Color', 'Negro');


-- Datos del inventario

-- Insertar datos en la tabla inventory
INSERT INTO inventory (product_id, quantity, location) VALUES
(1, 10, 'Bodega Central'),
(2, 5, 'Bodega Norte'),
(3, 7, 'Bodega Sur'),
(4, 3, 'Bodega Este'),
(5, 12, 'Bodega Oeste'),
(6, 8, 'Bodega Central'),
(7, 20, 'Bodega Norte'),
(8, 15, 'Bodega Sur'),
(9, 10, 'Bodega Este'),
(10, 25, 'Bodega Oeste');
