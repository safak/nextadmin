-- CreateTable
CREATE TABLE `Measurement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `waterLevel` DOUBLE NOT NULL,
    `waterTemperature` DOUBLE NOT NULL,
    `airTemperature` DOUBLE NOT NULL,
    `humidity` DOUBLE NOT NULL,
    `pressure` DOUBLE NOT NULL,
    `velocity` DOUBLE NOT NULL,
    `rainfall` DOUBLE NOT NULL,
    `radiation` DOUBLE NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
