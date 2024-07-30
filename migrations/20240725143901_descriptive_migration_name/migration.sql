-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_personalInfoId_fkey";

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "PersonalInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
