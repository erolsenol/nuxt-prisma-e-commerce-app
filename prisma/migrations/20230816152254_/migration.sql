/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `title` VARCHAR(255) NOT NULL,
    MODIFY `content` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    ADD COLUMN `email` VARCHAR(255) NOT NULL,
    ADD COLUMN `firstname` VARCHAR(255) NULL,
    ADD COLUMN `lastname` VARCHAR(255) NULL,
    ADD COLUMN `phone` VARCHAR(255) NULL,
    ADD COLUMN `username` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_name_key` ON `Product`(`name`);
