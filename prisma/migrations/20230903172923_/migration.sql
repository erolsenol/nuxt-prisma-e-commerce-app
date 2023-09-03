/*
  Warnings:

  - You are about to drop the column `facebook` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `Site` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Site` DROP COLUMN `facebook`,
    DROP COLUMN `instagram`,
    DROP COLUMN `twitter`,
    ADD COLUMN `facebookName` VARCHAR(255) NULL,
    ADD COLUMN `instagramName` VARCHAR(255) NULL,
    ADD COLUMN `twitterName` VARCHAR(255) NULL;
