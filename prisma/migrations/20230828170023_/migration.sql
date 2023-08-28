/*
  Warnings:

  - A unique constraint covering the columns `[lowerSubCategoryId]` on the table `SubCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `SubCategory` DROP FOREIGN KEY `SubCategory_categoryId_fkey`;

-- AlterTable
ALTER TABLE `SubCategory` ADD COLUMN `lowerSubCategoryId` INTEGER NULL,
    MODIFY `categoryId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `SubCategory_lowerSubCategoryId_key` ON `SubCategory`(`lowerSubCategoryId`);

-- AddForeignKey
ALTER TABLE `SubCategory` ADD CONSTRAINT `SubCategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubCategory` ADD CONSTRAINT `SubCategory_lowerSubCategoryId_fkey` FOREIGN KEY (`lowerSubCategoryId`) REFERENCES `SubCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
