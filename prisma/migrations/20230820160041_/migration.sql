/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ContactUs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Pageabout` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Site` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `SubCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Category_id_key` ON `Category`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Comment_id_key` ON `Comment`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `ContactUs_id_key` ON `ContactUs`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Image_id_key` ON `Image`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Pageabout_id_key` ON `Pageabout`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_id_key` ON `Product`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Site_id_key` ON `Site`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `SubCategory_id_key` ON `SubCategory`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_id_key` ON `User`(`id`);
