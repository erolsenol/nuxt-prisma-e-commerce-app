/*
  Warnings:

  - You are about to drop the column `image` on the `Image` table. All the data in the column will be lost.
  - Added the required column `path` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Image` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Image` DROP COLUMN `image`,
    ADD COLUMN `path` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL;
