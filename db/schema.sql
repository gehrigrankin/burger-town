DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers (
  `id` int AUTO_INCREMENT NOT NULL,
  `name` varchar(50) NOT NULL,
  `devoured` tinyint,

  PRIMARY KEY(id)
);



