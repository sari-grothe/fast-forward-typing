import { NextResponse } from "next/server";

// Sprint 6: Resend email webhook handler
export async function POST() {
  return NextResponse.json({ received: true });
}
