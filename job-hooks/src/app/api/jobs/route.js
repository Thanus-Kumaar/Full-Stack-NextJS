import { NextResponse } from "next/server";
import { Job } from "@/app/utils/database/associations.js";

export async function GET(req) {
  const jobs = Job.findAll();
  return NextResponse.json({ jobs }, { status: 200 });
}
