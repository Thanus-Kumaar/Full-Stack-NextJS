import { NextResponse } from "next/server";
import { User } from "@/app/utils/database/associations.js";

export async function POST(req) {
  const { email, password, name, loc, phone } = await req.json();
  if (!email || !password || !name || !loc || !phone) {
    return NextResponse.json(
      { ERR: "Some fields are empty!" },
      { status: 400 }
    );
  }
  try {
    const foundUser = await User.create({
      email: email,
      password: password,
      name: name,
      location: loc,
      phone_number: phone,
    });
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      // Extract validation messages in a cleaner format
      const validationErrors = err.errors.map(error => ({
        message: error.message,
        field: error.path,
        value: error.value,
      }));
  
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    } else {
      // Handle other types of errors
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  }

  return NextResponse.json(
    { MSG: "User added successfully!" },
    { status: 200 }
  );
}
