/***CREATING TABLES*/
CREATE TABLE tasks (
  `id` INT NOT NULL AUTO_INCREMENT,
  `TaskId` VARCHAR(200) NOT NULL,
  `TaskTitle` VARCHAR(200) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `TaskId_UNIQUE` (`TaskId` ASC) VISIBLE);

/* INSERT DATA */
INSERT INTO tasks (TaskId, TaskTitle)
VALUES ('2bb2aec4-56ae-4712-bf59-02540fc6a8a4', 'Task1'), ('2bb2aec4-56ae-4712-bf59-02540fc6a8a5', 'Task2'), ('2bb2aec4-56ae-4712-bf59-02540fc6a8a6', 'Task3');
/******************************************************************/
