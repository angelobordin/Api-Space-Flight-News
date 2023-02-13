/*
  Warnings:

  - Added the required column `updatedAt` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `updatedAt` VARCHAR(191) NOT NULL,
    MODIFY `summary` VARCHAR(512) NOT NULL;
