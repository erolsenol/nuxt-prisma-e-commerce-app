/*
  Warnings:

  - You are about to drop the column `Content` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Product` table. All the data in the column will be lost.
  - Added the required column `images` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `Content`,
    DROP COLUMN `Title`,
    ADD COLUMN `content` VARCHAR(255) NULL,
    ADD COLUMN `images` BLOB NOT NULL,
    ADD COLUMN `title` VARCHAR(255) NULL;
