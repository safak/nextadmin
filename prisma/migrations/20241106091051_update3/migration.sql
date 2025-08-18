/*
  Warnings:

  - You are about to alter the column `curahHujan` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `measurement` MODIFY `curahHujan` DOUBLE NOT NULL;
