import { NextResponse } from "next/server";
import { User } from "@/app/utils/database/associations.js";

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { ERR: "Some fields are empty!" },
      { status: 400 }
    );
  }
  const foundUser = await User.findOne({
    email: email,
    password: password,
  });
  console.log(foundUser);
  return NextResponse.json(
    { MSG: "Login Successful" },
    { status: 200 }
  );
}
