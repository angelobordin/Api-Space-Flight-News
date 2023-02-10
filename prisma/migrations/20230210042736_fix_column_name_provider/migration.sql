/*
  Warnings:

  - You are about to drop the column `providder` on the `launch` table. All the data in the column will be lost.
  - Added the required column `provider` to the `Launch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `launch` DROP COLUMN `providder`,
    ADD COLUMN `provider` VARCHAR(191) NOT NULL;
