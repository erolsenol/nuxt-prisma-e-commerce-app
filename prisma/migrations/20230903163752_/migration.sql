-- CreateIndex
CREATE FULLTEXT INDEX `ContactUs_name_surname_email_phone_title_content_idx` ON `ContactUs`(`name`, `surname`, `email`, `phone`, `title`, `content`);
