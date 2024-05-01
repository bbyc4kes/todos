/*
  Warnings:

  - You are about to drop the column `task` on the `Todo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Todo_task_key";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "task",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Todo_title_key" ON "Todo"("title");
