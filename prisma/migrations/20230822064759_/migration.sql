/*
  Warnings:

  - You are about to drop the column `pageaboutId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the `Pageabout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_pageaboutId_fkey`;

-- AlterTable
ALTER TABLE `Image` DROP COLUMN `pageaboutId`,
    ADD COLUMN `pagecontentId` INTEGER NULL;

-- DropTable
DROP TABLE `Pageabout`;

-- CreateTable
CREATE TABLE `Pagecontent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `locale` VARCHAR(255) NOT NULL,
    `bigTitle` VARCHAR(255) NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(2000) NOT NULL,
    `pageName` VARCHAR(255) NOT NULL DEFAULT 'pageAbout',
    `deleted` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pagecontent_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_pagecontentId_fkey` FOREIGN KEY (`pagecontentId`) REFERENCES `Pagecontent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
