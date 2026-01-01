"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/supabaseClient";
import { Loader2 } from "lucide-react";



export default function Signup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleMagicLinkLogin(e: React.FormEvent, email: string) {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
        // Metadata must be inside the 'data' object
        data: {
          username: email.split("@")[0],
        },
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Check your email for the login link!");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border bg-card p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Start building in public today
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* <Input type="text" placeholder="Name" required /> */}
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          {/* <Input type="password" placeholder="Password" required /> */}

          <Button onClick={(e) => handleMagicLinkLogin(e,email)} className="w-full">
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Sign up"
            )}
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
