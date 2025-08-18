/*
  Warnings:

  - You are about to drop the column `airTemperature` on the `measurement` table. All the data in the column will be lost.
  - You are about to drop the column `humidity` on the `measurement` table. All the data in the column will be lost.
  - You are about to drop the column `pressure` on the `measurement` table. All the data in the column will be lost.
  - You are about to drop the column `rainfall` on the `measurement` table. All the data in the column will be lost.
  - You are about to drop the column `velocity` on the `measurement` table. All the data in the column will be lost.
  - You are about to drop the column `waterTemperature` on the `measurement` table. All the data in the column will be lost.
  - Added the required column `airHumidity` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `airPressure` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `airTemp` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `curahHujan` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waterTemp` to the `Measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `windSpeed` to the `Measurement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `measurement` DROP COLUMN `airTemperature`,
    DROP COLUMN `humidity`,
    DROP COLUMN `pressure`,
    DROP COLUMN `rainfall`,
    DROP COLUMN `velocity`,
    DROP COLUMN `waterTemperature`,
    ADD COLUMN `airHumidity` DOUBLE NOT NULL,
    ADD COLUMN `airPressure` DOUBLE NOT NULL,
    ADD COLUMN `airTemp` DOUBLE NOT NULL,
    ADD COLUMN `curahHujan` DOUBLE NOT NULL,
    ADD COLUMN `waterTemp` DOUBLE NOT NULL,
    ADD COLUMN `windSpeed` DOUBLE NOT NULL;
