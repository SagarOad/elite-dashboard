/*
  Warnings:

  - A unique constraint covering the columns `[personalInfoId]` on the table `Question` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Question_personalInfoId_key" ON "Question"("personalInfoId");
