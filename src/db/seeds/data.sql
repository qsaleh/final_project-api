-- users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'Alice@mx.com', 'password');

-- polls table seeds here (Example)
INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Tops book', 'executive notebook', 5, 025932253300, 'picture', false, false);

INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Notebook', '3 subject notebook', 4, 667888093731, 'picture', true, false);

INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Axe Black', 'Aerosol deodorant', 7, 079400641670, 'picture', false, false);

INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Vaseline', 'Extremely Dry Skin Rescue', 6, 305210042247, 'picture', false, false);

INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('Book', 'Traction - Expanded edition', 6, 9781936661831, 'picture', true, false);

-- options table seeds here (Example)
INSERT INTO orders (user_id, date_created, total) VALUES (1, NOW(), 5);

-- voters table seeds here (Example)
INSERT INTO products_orders (quantity, product_id, order_id) VALUES (2, 1, 1);

-----------------------------------------------------------------
INSERT INTO products (name, picture)
VALUES
('notebook', 'images')

('Aerosol deodorant', 'images')

('Extremely Dry Skin Rescue', 'images')