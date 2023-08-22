-- AlterTable
ALTER TABLE `Image` ADD COLUMN `minisliderId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Minislider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `texts` JSON NOT NULL,
    `deleted` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Minislider_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_minisliderId_fkey` FOREIGN KEY (`minisliderId`) REFERENCES `Minislider`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
