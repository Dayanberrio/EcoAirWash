CREATE DATABASE IF NOT EXISTS empresaeco;

USE empresaeco;

CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS muebles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    puestoCantidad INT NOT NULL,
    tipoServicio VARCHAR(255) NOT NULL,
    tipoMaterial VARCHAR(255) NOT NULL
);
