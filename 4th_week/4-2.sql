CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(20) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `userName` VARCHAR(20) NOT NULL,
    `profile_link` VARCHAR(20) NOT NULL,
    `profile_mes` VARCHAR(20) NOT NULL,
    `out` TINYINT(1) NOT NULL DEFAULT 0,
    `inDay` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`userName`)
);

CREATE TABLE `channels` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `channelName` VARCHAR(20) NOT NULL,
    `userName` VARCHAR(20) NOT NULL,
    `link` VARCHAR(20) NOT NULL,
    `max` INT NOT NULL,
    `out` TINYINT(1) NOT NULL DEFAULT 0,
    `inDay` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userName`)
    REFERENCES `users`(`userName`),
    UNIQUE KEY (`channelName`)
);

CREATE TABLE `chats` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `desc` VARCHAR(20) NOT NULL,
    `userName` VARCHAR(20) NOT NULL,
    `channelName` VARCHAR(20) NOT NULL,
    `inDay` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`channelName`)
    REFERENCES `channels`(`channelName`),
    FOREIGN KEY (`userName`)
    REFERENCES `users`(`userName`)
);

CREATE TABLE `follows` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `follower` VARCHAR(20) NOT NULL,
    `followee` VARCHAR(20) NOT NULL,
    `followDate` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`follower`)
    REFERENCES `users`(`userName`),
    FOREIGN KEY (`followee`)
    REFERENCES `users`(`userName`)
);

CREATE TABLE `blocks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `blocker` VARCHAR(20) NOT NULL,
    `blockee` VARCHAR(20) NOT NULL,
    `blockDate` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`blocker`)
    REFERENCES `users`(`userName`),
    FOREIGN KEY (`blockee`)
    REFERENCES `users`(`userName`)
);