-- CreateTable
CREATE TABLE `Equipment` (
    `id` VARCHAR(191) NOT NULL,
    `equipmentName` VARCHAR(191) NOT NULL,
    `equipmentStatus` VARCHAR(191) NOT NULL,
    `equipmentType` VARCHAR(191) NOT NULL,
    `fieldId` VARCHAR(191) NOT NULL,
    `staffId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
