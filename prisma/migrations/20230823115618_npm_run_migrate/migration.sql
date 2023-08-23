-- DropIndex
DROP INDEX `Category_name_en_key` ON `Category`;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `description_en` VARCHAR(255) NULL,
    MODIFY `name_en` VARCHAR(255) NULL,
    MODIFY `description` VARCHAR(255) NULL;
