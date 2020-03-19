-- Drop and recreate users table (Example)
-- Drop and recreate products table (Example)
-- Drop and recreate products-orders table (Example)
-- Drop and recreate orders table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS products_orders CASCADE;
DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  UPC char(13) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  recyclable Boolean,
  compostable Boolean
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date_created TIMESTAMP NOT NULL,
  total INTEGER NOT NULL
);
CREATE TABLE products_orders (
  id SERIAL PRIMARY KEY NOT NULL,
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE
);

