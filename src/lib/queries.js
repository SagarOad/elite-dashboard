import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const personalInfoId = searchParams.get("personalInfoId");

  if (!personalInfoId) {
    return NextResponse.json({ error: "personalInfoId is required" }, { status: 400 });
  }

  try {
    const income = await prisma.income.findUnique({
      where: { personalInfoId },
      select: {
        salaryCheck: true,
        businessCheck: true,
        freelancerCheck: true,
        professionalCheck: true,
        pensionCheck: true,
        agriculturalCheck: true,
        commissionCheck: true,
        aopCheck: true,
        propertyCheck: true,
        profitOnSavingsCheck: true,
        investmentCheck: true,
        otherCheck: true,
      },
    });

    if (!income) {
      return NextResponse.json({ error: "Income data not found" }, { status: 404 });
    }

    return NextResponse.json(income);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
