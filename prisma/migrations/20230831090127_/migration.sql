/*
  Warnings:

  - You are about to drop the column `footerColor` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `headerColor` on the `Site` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Site` DROP COLUMN `footerColor`,
    DROP COLUMN `headerColor`,
    ADD COLUMN `address_en` VARCHAR(255) NULL,
    ADD COLUMN `footerBgColor` VARCHAR(255) NULL,
    ADD COLUMN `footerFontColor` VARCHAR(255) NULL,
    ADD COLUMN `headerBgColor` VARCHAR(255) NULL,
    ADD COLUMN `headerFontColor` VARCHAR(255) NULL,
    ADD COLUMN `mail_en` VARCHAR(255) NULL,
    ADD COLUMN `phone_en` VARCHAR(255) NULL;
