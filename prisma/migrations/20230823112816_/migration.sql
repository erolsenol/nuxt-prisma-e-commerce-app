/*
  Warnings:

  - You are about to drop the column `content_en` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name_en` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title_en` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `content_en`,
    DROP COLUMN `name_en`,
    DROP COLUMN `title_en`;
