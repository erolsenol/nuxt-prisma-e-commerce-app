/*
  Warnings:

  - You are about to drop the column `mail` on the `ContactUs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ContactUs` DROP COLUMN `mail`,
    ADD COLUMN `email` VARCHAR(255) NULL;
