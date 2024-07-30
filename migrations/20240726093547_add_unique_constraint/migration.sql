/*
  Warnings:

  - A unique constraint covering the columns `[personalInfoId]` on the table `Income` will be added. If there are existing duplicate values, this will fail.
  - Made the column `personalInfoId` on table `Income` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_personalInfoId_fkey";

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "personalInfoId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Income_personalInfoId_key" ON "Income"("personalInfoId");

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "PersonalInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
