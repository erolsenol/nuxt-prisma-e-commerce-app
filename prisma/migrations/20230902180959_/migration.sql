-- CreateIndex
CREATE FULLTEXT INDEX `Comment_username_title_content_idx` ON `Comment`(`username`, `title`, `content`);
