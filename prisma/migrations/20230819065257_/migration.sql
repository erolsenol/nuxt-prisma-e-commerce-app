/*
  Warnings:

  - You are about to drop the column `image` on the `Pageabout` table. All the data in the column will be lost.
  - Added the required column `pageaboutId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Image` ADD COLUMN `pageaboutId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Pageabout` DROP COLUMN `image`,
    ADD COLUMN `imageName` VARCHAR(255) NULL,
    ADD COLUMN `imagePath` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_pageaboutId_fkey` FOREIGN KEY (`pageaboutId`) REFERENCES `Pageabout`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
