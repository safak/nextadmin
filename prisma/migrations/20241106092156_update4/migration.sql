/*
  Warnings:

  - You are about to alter the column `waterLevel` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `windSpeed` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `measurement` MODIFY `waterLevel` INTEGER NOT NULL,
    MODIFY `windSpeed` DOUBLE NOT NULL;
