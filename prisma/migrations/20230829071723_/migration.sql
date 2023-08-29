-- DropIndex
DROP INDEX `SubCategory_name_en_key` ON `SubCategory`;

-- AlterTable
ALTER TABLE `SubCategory` MODIFY `name_en` VARCHAR(255) NULL;
