-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "cnic" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Income" (
    "id" TEXT NOT NULL,
    "salaryCheck" BOOLEAN NOT NULL DEFAULT false,
    "businessCheck" BOOLEAN NOT NULL DEFAULT false,
    "freelancerCheck" BOOLEAN NOT NULL DEFAULT false,
    "professionalCheck" BOOLEAN NOT NULL DEFAULT false,
    "pensionCheck" BOOLEAN NOT NULL DEFAULT false,
    "agriculturalCheck" BOOLEAN NOT NULL DEFAULT false,
    "commissionCheck" BOOLEAN NOT NULL DEFAULT false,
    "aopCheck" BOOLEAN NOT NULL DEFAULT false,
    "propertyCheck" BOOLEAN NOT NULL DEFAULT false,
    "profitOnSavingsCheck" BOOLEAN NOT NULL DEFAULT false,
    "investmentCheck" BOOLEAN NOT NULL DEFAULT false,
    "otherCheck" BOOLEAN NOT NULL DEFAULT false,
    "personalInfoId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_cnic_key" ON "PersonalInfo"("cnic");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_email_key" ON "PersonalInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Income_personalInfoId_key" ON "Income"("personalInfoId");

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "PersonalInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
