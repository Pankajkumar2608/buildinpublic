"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/supabaseClient";
import { Loader2 } from "lucide-react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleMagicLinkLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/confirm`,
          data: {
            username: email.split("@")[0], // Fallback username
          },
        },
      });

      if (error) throw error;
      toast.success("Check your email for the login link!");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false); 
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border bg-card p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back 👋
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Login to enter the world of build in public
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleMagicLinkLogin} className="space-y-4">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            disabled={loading}
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Send Magic Link"}
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
