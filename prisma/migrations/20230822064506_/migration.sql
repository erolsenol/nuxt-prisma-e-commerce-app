/*
  Warnings:

  - Added the required column `pageName` to the `Pageabout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pageabout` ADD COLUMN `pageName` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Site` ADD COLUMN `footerJson` JSON NULL,
    ADD COLUMN `headerJson` JSON NULL;
