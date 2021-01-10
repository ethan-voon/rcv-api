
CREATE DATABASE rcv;

USE rcv;

CREATE TABLE people (
	`person-id` BIGINT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
    `email` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`person-id`)
);
