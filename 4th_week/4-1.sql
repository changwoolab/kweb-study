CREATE TABLE `students` (
    `name` VARCHAR(20) NOT NULL,
    `studentId` VARCHAR(20) NOT NULL,
    `phoneNumber` VARCHAR(20) NOT NULL,
    `address` VARCHAR(20) NOT NULL,
    `accumulate` INT  NOT NULL DEFAULT 1,
    `grade` FLOAT NOT NULL,
    `attending` TINYINT(1) NOT NULL DEFAULT 1,
    PRIMARY KEY (`studentId`)
);

CREATE TABLE `studentId` (
    `individualNumber` VARCHAR(20) NOT NULL,
    `major` VARCHAR(20) NOT NULL,
    `enroll_year` INT NOT NULL,
    PRIMARY KEY (`individualNumber`, 
    `major`, `enroll_year`),
    FOREIGN KEY (`individualNumber`)
    REFERENCES `students`(`studentId`)
);
