import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/libs/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();

  if (!username !== "admin" && password !== "admin")
    return NextResponse.json({ success: false });

  const token = await new SignJWT({ username, role: "admin" })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("1m")
    .sign(getJwtSecretKey());

  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    maxAge: 60 * 1000,
  });

  return response;
}
