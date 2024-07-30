-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    "questionName" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "personalInfoId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "PersonalInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
