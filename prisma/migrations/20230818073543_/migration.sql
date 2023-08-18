-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_subCategoryId_fkey`;

-- AlterTable
ALTER TABLE `Product` MODIFY `subCategoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_subCategoryId_fkey` FOREIGN KEY (`subCategoryId`) REFERENCES `SubCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
