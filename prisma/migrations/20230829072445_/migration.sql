/*
  Warnings:

  - You are about to drop the column `lowerSubCategoryId` on the `SubCategory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `SubCategory` DROP FOREIGN KEY `SubCategory_lowerSubCategoryId_fkey`;

-- AlterTable
ALTER TABLE `SubCategory` DROP COLUMN `lowerSubCategoryId`,
    ADD COLUMN `subCategoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `SubCategory` ADD CONSTRAINT `SubCategory_subCategoryId_fkey` FOREIGN KEY (`subCategoryId`) REFERENCES `SubCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
