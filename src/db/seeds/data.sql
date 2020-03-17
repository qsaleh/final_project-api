-- users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'Alice@mx.com', 'password');

-- polls table seeds here (Example)
INSERT INTO products (name, description, price, UPC, picture, recyclable, compostable)
VALUES ('book', 'description', 5, 2593225330, 'picture', false, true);

-- options table seeds here (Example)
INSERT INTO orders (user_id, date_created, total) VALUES (1, NOW(), 5);

-- voters table seeds here (Example)
INSERT INTO products_orders (quantity, product_id, order_id) VALUES (2, 1, 1);
