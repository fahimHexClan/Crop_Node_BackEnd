/*
  Warnings:

  - The primary key for the `equipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `equipment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `equipment` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Field` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fieldId` VARCHAR(191) NOT NULL,
    `fieldName` VARCHAR(191) NOT NULL,
    `fieldLocation` VARCHAR(191) NOT NULL,
    `extentSize` VARCHAR(191) NOT NULL,
    `fieldImage1` VARCHAR(191) NOT NULL,
    `fieldImage2` VARCHAR(191) NOT NULL,
    `logId` VARCHAR(191) NOT NULL,
    `staffId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Field_fieldId_key`(`fieldId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
