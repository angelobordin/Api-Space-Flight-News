/*
  Warnings:

  - You are about to alter the column `featured` on the `article` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `article` MODIFY `featured` BOOLEAN NOT NULL;
