/*
  Warnings:

  - A unique constraint covering the columns `[eqiipmentId]` on the table `Equipment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `eqiipmentId` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `equipment` ADD COLUMN `eqiipmentId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Equipment_eqiipmentId_key` ON `Equipment`(`eqiipmentId`);
