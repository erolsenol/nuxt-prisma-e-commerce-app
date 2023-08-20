/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_productId_fkey`;

-- AlterTable
ALTER TABLE `Image` MODIFY `productId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Image_name_key` ON `Image`(`name`);

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
