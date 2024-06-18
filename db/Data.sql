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
