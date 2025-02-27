-- CreateTable
CREATE TABLE `Vehicle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vehicleId` VARCHAR(191) NOT NULL,
    `vehicleCategory` VARCHAR(191) NOT NULL,
    `fuelType` VARCHAR(191) NOT NULL,
    `licensePlateNumber` VARCHAR(191) NOT NULL,
    `vehicleRemarks` VARCHAR(191) NOT NULL,
    `vehicleStatus` VARCHAR(191) NOT NULL,
    `staffId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Vehicle_vehicleId_key`(`vehicleId`),
    UNIQUE INDEX `Vehicle_licensePlateNumber_key`(`licensePlateNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
