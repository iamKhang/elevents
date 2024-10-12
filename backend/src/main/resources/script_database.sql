DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS product_variants;
DROP TABLE IF EXISTS product_images;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS cart_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS order_details;
DROP TABLE IF EXISTS collections;
DROP TABLE IF EXISTS collection_images;
DROP TABLE IF EXISTS product_collections;
DROP TABLE IF EXISTS discount_codes;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    date_of_birth DATE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') NOT NULL
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    main_image_url VARCHAR(2083),
    size_chart_url VARCHAR(2083),
    category ENUM('top', 'bottom', 'outerwear', 'bag', 'accessories') NOT NULL
    
);

CREATE TABLE product_variants (
    variant_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    sku VARCHAR(255) UNIQUE NOT NULL,
    color VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    size VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    discount_percentage DECIMAL(5, 2)
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

ALTER TABLE product_variants
    MODIFY COLUMN size ENUM('S', 'M', 'L', 'XL', 'FREE') NOT NULL;

ALTER TABLE product_variants
    MODIFY COLUMN color ENUM('Black', 'White', 'Gray', 'Blue', 'Red', 'Green', 'Yellow', 'Brown', 'Pink', 'Purple') NOT NULL;


CREATE TABLE product_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    product_variant_id INT,
    image_url VARCHAR(2083) NOT NULL,
    FOREIGN KEY (product_variant_id) REFERENCES product_variants(variant_id)
);

CREATE TABLE carts (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE cart_items (
    cart_item_id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT,
    product_variant_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES carts(cart_id),
    FOREIGN KEY (product_variant_id) REFERENCES product_variants(variant_id)
);

CREATE TABLE discount_codes (
    discount_id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    discount_type ENUM('percentage', 'fixed') NOT NULL,
    discount_value DECIMAL(10, 2) NOT NULL,
    min_order_value DECIMAL(10, 2),
    max_discount_value DECIMAL(10, 2),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

CREATE TABLE orders (
    discount_id INT,
    shipping_fee DECIMAL(10, 2) NOT NULL,
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    phone_number VARCHAR(20) NOT NULL,
    shipping_address TEXT NOT NULL,
    order_date DATETIME NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (discount_id) REFERENCES discount_codes(discount_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_details (
    order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_variant_id INT,
    quantity INT NOT NULL,
    price_at_order_time DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_variant_id) REFERENCES product_variants(variant_id)
);

CREATE TABLE collections (
    collection_id INT AUTO_INCREMENT PRIMARY KEY,
    collection_name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE collection_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    collection_id INT,
    image_url VARCHAR(2083) NOT NULL,
    FOREIGN KEY (collection_id) REFERENCES collections(collection_id)
);

CREATE TABLE product_collections (
    product_id INT,
    collection_id INT,
    PRIMARY KEY (product_id, collection_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (collection_id) REFERENCES collections(collection_id)
);

