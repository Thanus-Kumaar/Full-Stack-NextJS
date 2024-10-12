import { NextResponse } from "next/server";
import Cors from "cors";
import { runMiddleware } from "./utils/corsMiddleware.js";

const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: "*", // You can specify allowed origins
});

export async function middleware(req) {
  // Apply CORS middleware globally
  await runMiddleware(req, null, cors);
  return NextResponse.next();
}
