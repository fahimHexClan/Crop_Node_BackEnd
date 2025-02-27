-- CreateTable
CREATE TABLE `Monitoring` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `monitoringId` VARCHAR(191) NOT NULL,
    `monitoringDate` VARCHAR(191) NOT NULL,
    `monitoringLogDetails` VARCHAR(191) NOT NULL,
    `monitoringImage` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Monitoring_monitoringId_key`(`monitoringId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
