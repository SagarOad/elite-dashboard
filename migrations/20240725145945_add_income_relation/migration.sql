-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_personalInfoId_fkey";

-- DropIndex
DROP INDEX "Income_personalInfoId_key";

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "personalInfoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "PersonalInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
