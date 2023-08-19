/*
  Warnings:

  - You are about to drop the column `imageName` on the `Pageabout` table. All the data in the column will be lost.
  - You are about to drop the column `imagePath` on the `Pageabout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Pageabout` DROP COLUMN `imageName`,
    DROP COLUMN `imagePath`;
