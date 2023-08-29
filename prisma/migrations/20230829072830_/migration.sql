/*
  Warnings:

  - You are about to drop the column `subCategoryId` on the `SubCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[lowerSubCategoryId]` on the table `SubCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `SubCategory` DROP FOREIGN KEY `SubCategory_subCategoryId_fkey`;

-- AlterTable
ALTER TABLE `SubCategory` DROP COLUMN `subCategoryId`,
    ADD COLUMN `lowerSubCategoryId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `SubCategory_lowerSubCategoryId_key` ON `SubCategory`(`lowerSubCategoryId`);

-- AddForeignKey
ALTER TABLE `SubCategory` ADD CONSTRAINT `SubCategory_lowerSubCategoryId_fkey` FOREIGN KEY (`lowerSubCategoryId`) REFERENCES `SubCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
