-- Create database
CREATE DATABASE ems_db;

-- Switch to the new database
\c ems_db;

-- Create sequence for bigint id
CREATE SEQUENCE employee_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- Create employee table with bigint id
CREATE TABLE employee (
    id BIGINT PRIMARY KEY DEFAULT nextval('employee_id_seq'),
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

-- Add sample data
INSERT INTO employee (email, first_name, last_name)
VALUES 
    ('john.doe@example.com', 'John', 'Doe'),
    ('jane.smith@example.com', 'Jane', 'Smith'),
    ('michael.johnson@example.com', 'Michael', 'Johnson'),
    ('susan.williams@example.com', 'Susan', 'Williams'),
    ('david.brown@example.com', 'David', 'Brown'),
    ('emily.jones@example.com', 'Emily', 'Jones'),
    ('daniel.miller@example.com', 'Daniel', 'Miller'),
    ('laura.davis@example.com', 'Laura', 'Davis'),
    ('robert.garcia@example.com', 'Robert', 'Garcia'),
    ('mary.rodriguez@example.com', 'Mary', 'Rodriguez');

