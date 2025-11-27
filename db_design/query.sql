INSERT INTO users (
  name, lastname, username, email, password_hash, phone, user_type, active, last_login, avatar_url, profile_description, stars
) VALUES
  ('Ana', 'García', 'ana_g', 'ana.garcia@example.com', '$2b$10$ejemplo.hash.seguro.1234567890123456789012', '+1234567890', 'recolector', TRUE, '2025-11-20 10:30:00', 'https://ejemplo.com/avatars/ana.jpg', 'Amante de la naturaleza y el café.', 4),
  ('Carlos', 'López', 'carlos_lopez', 'carlos.lopez@example.com', '$2b$10$ejemplo.hash.seguro.1234567890123456789012', '+1987654321', 'admin', TRUE, '2025-11-22 14:15:00', 'https://ejemplo.com/avatars/carlos.jpg', 'Desarrollador full-stack.', 5),
  ('María', 'Fernández', 'mfer', 'maria.fernandez@example.com', '$2b$10$ejemplo.hash.seguro.1234567890123456789012', NULL, 'cliente', TRUE, NULL, NULL, 'Nueva en la plataforma.', NULL),
  ('Javier', 'Ruiz', 'jruiz_dev', 'javier.ruiz@example.com', '$2b$10$ejemplo.hash.seguro.1234567890123456789012', '+5491123456789', 'moderador', FALSE, '2025-10-01 09:00:00', 'https://ejemplo.com/avatars/javier.jpg', 'En pausa temporal.', 3),
  ('Lucía', 'Hernández', 'lucia_h', 'lucia.hernandez@example.com', '$2b$10$ejemplo.hash.seguro.1234567890123456789012', '+34600123456', 'cliente', TRUE, '2025-11-24 08:45:00', NULL, NULL, 4);


  SELECT * FROM users WHERE id_user = 1;




  INSERT INTO greenpoints (
  id_category,
  coordinates,
  description,
  qr_code,
  stars,
  id_citizen,
  id_collector,
  status
) VALUES
  (1, POINT(-70.2520, -18.0050), 'Punto de reciclaje en Plaza Alto de la Alianza', 'QR_GP001', 4, 1, 2, 'approved'),
  (2, POINT(-70.2580, -18.0100), 'Contenedor para plásticos en Av. San Martín', 'QR_GP002', 5, 3, 2, 'approved'),
  (1, POINT(-70.2450, -18.0020), 'Punto verde cerca del Mercado Central', 'QR_GP003', NULL, 2, NULL, 'pending'),
  (3, POINT(-70.2600, -17.9950), 'Centro de acopio para cartón - Barrio Industrial', 'QR_GP004', 3, 4, 5, 'approved'),
  (2, POINT(-70.2510, -18.0150), 'Reciclaje de vidrio en zona residencial sur', 'QR_GP005', NULL, 5, NULL, 'pending'),
  (1, POINT(-70.2400, -18.0080), 'Punto móvil de recolección (martes y jueves)', 'QR_GP006', 4, 1, 2, 'approved'),
  (3, POINT(-70.2650, -18.0200), 'Depósito de electrónicos usados', 'QR_GP007', 2, 3, NULL, 'pending');




  INSERT INTO categories (name, description, icon_url, color_hex, recyclable) VALUES
  ('Plástico', 'Envases, botellas, bolsas y otros plásticos limpios y secos.', '/icons/plastic.png', '#3498db', true),
  ('Cartón', 'Cajas de cartón, papel corrugado, envases limpios.', '/icons/cardboard.png', '#e67e22', true),
  ('Metal', 'Latas de aluminio, latas de conserva, tapas metálicas.', '/icons/metal.png', '#95a5a6', true),
  ('Vidrio', 'Botellas, frascos y otros envases de vidrio (sin tapas).', '/icons/glass.png', '#27ae60', true),
  ('Papel', 'Periódicos, revistas, hojas impresas, cuadernos (sin grapas).', '/icons/paper.png', '#f1c40f', true);


INSERT INTO greenpoints_categories (id_greenpoint, id_category)
SELECT 1, id_category
FROM categories
WHERE name = 'Plástico';

-- Asignar "Cartón" al greenpoint 1
INSERT INTO greenpoints_categories (id_greenpoint, id_category)
SELECT 1, id_category
FROM categories
WHERE name = 'Cartón';