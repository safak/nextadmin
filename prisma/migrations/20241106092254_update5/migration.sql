/*
  Warnings:

  - You are about to alter the column `airHumidity` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `airPressure` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `airTemp` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `waterTemp` on the `measurement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `measurement` MODIFY `airHumidity` DOUBLE NOT NULL,
    MODIFY `airPressure` DOUBLE NOT NULL,
    MODIFY `airTemp` DOUBLE NOT NULL,
    MODIFY `waterTemp` DOUBLE NOT NULL;
