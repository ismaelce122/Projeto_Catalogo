CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE produtos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
descricao TEXT,
categoria VARCHAR(50),
preco DECIMAL(10, 2) NOT NULL,
img_url VARCHAR(50)
);

CREATE TABLE usuarios (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email TEXT,
senha VARCHAR(50)
);

DROP TABLE products;

DROP DATABASE catalogo;

INSERT INTO produtos (nome, descricao, categoria, preco, img_url) 
VALUES ('vestido', 'preto', 'longo', '88.99', '20/04/2025');

SELECT * FROM produtos;

DESC produtos;


DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=ecommerce