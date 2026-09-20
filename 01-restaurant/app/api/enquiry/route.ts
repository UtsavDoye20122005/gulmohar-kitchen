import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Plug-in point for a real desk:
  // 1) Resend — send an email to reservations@gulmoharkitchen.in
  //    await resend.emails.send({ from, to, subject, html: JSON.stringify(body) })
  // 2) Google Sheets — POST the row to an Apps Script web app URL
  //    await fetch(process.env.SHEETS_WEBHOOK_URL, { method: "POST", body: JSON.stringify(body) })
  // 3) WhatsApp Cloud API — message the restaurant number with the booking payload
  //    await fetch(`https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`, { ... })

  console.log("[enquiry]", body);
  return NextResponse.json({ ok: true });
}
