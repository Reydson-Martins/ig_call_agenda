/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `users_name_key` ON `users`;

-- AlterTable
ALTER TABLE `accounts` MODIFY `refresh_token` TEXT NULL,
    MODIFY `access_token` TEXT NULL,
    MODIFY `id_token` TEXT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `bio` TEXT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);
