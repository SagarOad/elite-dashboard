import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      salaryCheck,
      businessCheck,
      freelancerCheck,
      professionalCheck,
      pensionCheck,
      agriculturalCheck,
      commissionCheck,
      aopCheck,
      propertyCheck,
      profitOnSavingsCheck,
      investmentCheck,
      otherCheck,
      personalInfoId,
    } = await request.json();

    if (!personalInfoId) {
      return NextResponse.json(
        { error: "Missing required field: personalInfoId" },
        { status: 400 }
      );
    }

    const income = await prisma.income.upsert({
      where: { personalInfoId },
      update: {
        salaryCheck,
        businessCheck,
        freelancerCheck,
        professionalCheck,
        pensionCheck,
        agriculturalCheck,
        commissionCheck,
        aopCheck,
        propertyCheck,
        profitOnSavingsCheck,
        investmentCheck,
        otherCheck,
      },
      create: {
        salaryCheck,
        businessCheck,
        freelancerCheck,
        professionalCheck,
        pensionCheck,
        agriculturalCheck,
        commissionCheck,
        aopCheck,
        propertyCheck,
        profitOnSavingsCheck,
        investmentCheck,
        otherCheck,
        personalInfoId,
      },
    });

    return NextResponse.json({ data: income });
  } catch (error) {
    console.error("Error handling income data:", error);
    return NextResponse.json(
      {
        error: `An error occurred while processing income data: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
