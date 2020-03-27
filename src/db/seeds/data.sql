-- users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'Alice@mx.com', 'password');
-- polls table seeds here (Example)
INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Tops book', 'executive notebook', 5, 025932253300, 'picture', false, false);
INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Notebook', '3 subject notebook', 4, 667888093731, 'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/m005664459_0730bb46-a5e4-4967-aed7-b17a794e1124_1000x1000@2x.jpg?v=1582279298', true, false);
INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Axe Black', 'Aerosol deodorant', 7, 079400641670, 'https://images.freshop.com/00079400379979/885da018da1ac07f3657036390148f35_large.png', false, false);
INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Vaseline', 'Extremely Dry Skin Rescue', 6, 305210042247, 'https://pics.drugstore.com/prodimg/437503/900.jpg', false, false);
INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Book', 'Traction - Expanded edition', 6, 9781936661831, 'https://images-na.ssl-images-amazon.com/images/I/51s%2BPBMjJ%2BL._SX331_BO1,204,203,200_.jpg', true, false);
-- options table seeds here (Example)
INSERT INTO orders (user_id, date_created, total) VALUES (1, NOW(), 5);
-- voters table seeds here (Example)
INSERT INTO products_orders (quantity, product_id, order_id) VALUES (2, 1, 1);

-- INSERT INTO products (name, picture)
-- VALUES
-- ('notebook', '/images/notebook.jpg')

-- ('Aerosol deodorant', '/images/axe.jpg')

-- ('Extremely Dry Skin Rescue', '/images/vaseline.jpg')