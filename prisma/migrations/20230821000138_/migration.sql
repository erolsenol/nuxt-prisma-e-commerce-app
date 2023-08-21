/*
  Warnings:

  - Added the required column `reply` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Question` ADD COLUMN `reply` VARCHAR(1000) NOT NULL;
