CREATE DATABASE foodcollectors_db;
USE foodcollectors_db;

CREATE TABLE 
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255),
devoured BOOLEAN default false,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
