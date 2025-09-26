-- Active: 1758748310594@@127.0.0.1@5432@rygreen@public
DROP DATABASE IF EXISTS rygreen;
CREATE DATABASE  rygreen;


-- Habilitar extensión espacial
-- CREATE EXTENSION IF NOT EXISTS postgis;

-- Tabla de usuarios
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    tipo VARCHAR(20) CHECK (tipo IN ('ciudadano', 'recolector', 'centro')),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de materiales
DROP TABLE IF EXISTS materiales;
CREATE TABLE materiales (
    id_material SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50),
    descripcion TEXT
);

-- Tabla de puntos de recolección (GreenPoints)
DROP TABLE IF EXISTS greenpoints;
CREATE TABLE greenpoints (
    id_greenpoint SERIAL PRIMARY KEY,
    coordenada POINT, -- usa lat/long
    descripcion TEXT,
    qr_code VARCHAR(255),
    id_ciudadano INT NOT NULL REFERENCES usuarios(id_usuario),
    id_recolector INT REFERENCES usuarios(id_usuario),
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(20) CHECK (estado IN ('pendiente', 'en_proceso', 'finalizado')) DEFAULT 'pendiente'
);

-- Tabla intermedia GreenPoint-Materiales
DROP TABLE IF EXISTS greenpoint_materiales;
CREATE TABLE greenpoint_materiales (
    id_greenpoint_material SERIAL PRIMARY KEY,
    id_greenpoint INT NOT NULL REFERENCES greenpoints(id_greenpoint) ON DELETE CASCADE,
    id_material INT NOT NULL REFERENCES materiales(id_material),
    cantidad VARCHAR(50),
    descripcion_extra TEXT
);
