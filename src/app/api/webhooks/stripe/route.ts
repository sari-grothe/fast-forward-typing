import { NextResponse } from "next/server";

// Sprint 5: Stripe webhook handler
export async function POST() {
  return NextResponse.json({ received: true });
}
