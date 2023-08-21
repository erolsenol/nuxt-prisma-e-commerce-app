-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_productId_fkey`;

-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_userId_fkey`;

-- AlterTable
ALTER TABLE `Question` MODIFY `productId` INTEGER NULL,
    MODIFY `userId` INTEGER NULL,
    MODIFY `answered` BOOLEAN NULL DEFAULT false,
    MODIFY `reply` VARCHAR(1000) NULL;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
