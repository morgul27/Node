Create DATABASE IF NOT EXISTS base_de_datos;

use base_de_datos;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameuser VARCHAR(255) NOT NULL,
    pswduser VARCHAR(255) NOT NULL
);

DESCRIBE users;

INSERT INTO users(id, nameuser, pswduser) VALUES (6, 'paco', 'dos');
SELECT * from users