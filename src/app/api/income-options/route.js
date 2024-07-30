import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const options = await prisma.option.findMany();
    return NextResponse.json({ data: options });
  } catch (error) {
    console.error("Error fetching options:", error.message, error.stack);
    return NextResponse.json({ error: `Error fetching options: ${error.message}` }, { status: 500 });
  }
}
