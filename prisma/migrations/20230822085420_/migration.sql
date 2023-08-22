/*
  Warnings:

  - You are about to drop the `PageContent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_pageContentId_fkey`;

-- DropTable
DROP TABLE `PageContent`;

-- CreateTable
CREATE TABLE `Pagecontent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `locale` VARCHAR(255) NOT NULL,
    `bigTitle` VARCHAR(255) NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(2000) NOT NULL,
    `pageName` VARCHAR(255) NOT NULL,
    `deleted` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pagecontent_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_pageContentId_fkey` FOREIGN KEY (`pageContentId`) REFERENCES `Pagecontent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
