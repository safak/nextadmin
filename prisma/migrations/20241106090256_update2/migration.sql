/*
  Warnings:

  - You are about to alter the column `waterLevel` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `airHumidity` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `airPressure` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `airTemp` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `curahHujan` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `waterTemp` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `windSpeed` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `measurement` MODIFY `waterLevel` VARCHAR(191) NOT NULL,
    MODIFY `airHumidity` VARCHAR(191) NOT NULL,
    MODIFY `airPressure` VARCHAR(191) NOT NULL,
    MODIFY `airTemp` VARCHAR(191) NOT NULL,
    MODIFY `curahHujan` VARCHAR(191) NOT NULL,
    MODIFY `waterTemp` VARCHAR(191) NOT NULL,
    MODIFY `windSpeed` VARCHAR(191) NOT NULL;
