/*
  Warnings:

  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `image`;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` BLOB NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
