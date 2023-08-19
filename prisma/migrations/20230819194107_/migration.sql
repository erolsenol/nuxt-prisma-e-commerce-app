/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pageaboutId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_pageaboutId_fkey`;

-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_productId_fkey`;

-- AlterTable
ALTER TABLE `Image` MODIFY `productId` INTEGER NULL,
    MODIFY `pageaboutId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Image_productId_key` ON `Image`(`productId`);

-- CreateIndex
CREATE UNIQUE INDEX `Image_pageaboutId_key` ON `Image`(`pageaboutId`);

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_pageaboutId_fkey` FOREIGN KEY (`pageaboutId`) REFERENCES `Pageabout`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
