-- CreateTable
CREATE TABLE `Crop` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cropId` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `commonName` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `scientificName` VARCHAR(191) NOT NULL,
    `season` VARCHAR(191) NOT NULL,
    `fieldId` VARCHAR(191) NOT NULL,
    `logId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Crop_cropId_key`(`cropId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
