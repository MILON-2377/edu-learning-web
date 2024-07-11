import { parse } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request) {
  console.log("Middleware is running");

  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || null;

  console.log("Token:", token);

  if (!token) {
    console.log("Token not found, redirecting to login page");
    return NextResponse.redirect(new URL('/LogIn', request.url));
  }

  return NextResponse.next();
}

// Config to match specific paths
export const config = {
  matcher: ['/DashBoard'],
};
