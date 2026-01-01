// app/auth/confirm/route.ts
import { createClient } from "@/lib/supabase/supbaseServer";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");
  const token_hash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type");

  const supabase = await createClient();

  // Handle PKCE flow (code parameter)
  if (code) {

    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.session) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  if (token_hash && type) {
    console.log("Using legacy token_hash flow");

    const { data, error } = await supabase.auth.verifyOtp({
      type: type as any,
      token_hash,
    });

    if (!error && data.user) {
      console.log("✅ User verified successfully");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  return NextResponse.redirect(
    new URL("/auth/login?error=invalid_link", request.url)
  );
}
