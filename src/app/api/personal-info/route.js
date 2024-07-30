import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const res = await request.json();
    const { fullName, dob, cnic, occupation, email, mobile } = res;
    console.log({ res });

    // Validate required fields
    const missingFields = [];
    if (!fullName) missingFields.push('fullName');
    if (!dob) missingFields.push('dob');
    if (!cnic) missingFields.push('cnic');
    if (!occupation) missingFields.push('occupation');
    if (!email) missingFields.push('email');
    if (!mobile) missingFields.push('mobile');

    if (missingFields.length > 0) {
      return NextResponse.json({ error: `Missing required fields: ${missingFields.join(', ')}` }, { status: 400 });
    }

    const result = await prisma.PersonalInfo.create({
      data: {
        fullName,
        dob: new Date(dob),
        cnic,
        occupation,
        email,
        mobile,
      },
    });

    return NextResponse.json({ data: result });
  } catch (error) {
    console.error("Error creating PersonalInfo:", error.message);  // Log detailed error message
    return NextResponse.json({ error: "An error occurred while creating PersonalInfo" }, { status: 500 });
  }
}
