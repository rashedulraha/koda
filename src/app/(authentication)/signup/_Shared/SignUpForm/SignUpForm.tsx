"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";

export function SignUpForm() {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center w-full max-w-sm mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-center flex-col gap-3">
        <h2 className="font-bold text-3xl tracking-tight">Koda</h2>

        <div className="flex items-center justify-between w-full gap-6 text-sm">
          <p className="text-muted-foreground">Create your workspace</p>
          <Link
            href="/signin"
            className="text-primary font-medium hover:underline transition-all">
            Signin
          </Link>
        </div>
      </div>

      {/* Primary Action (Google) */}
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Button
          size="lg"
          className="w-full flex gap-3 items-center font-medium">
          <GrGoogle className="text-lg" />
          Continue with Google
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          You used Google to login last time
        </p>
      </div>

      {/* Divider - visually separates methods */}
      <div className="relative w-full flex items-center">
        <div className="grow border-t border-muted"></div>
        <span className="shrink mx-4 text-xs text-muted-foreground uppercase">
          or
        </span>
        <div className="grow border-t border-muted"></div>
      </div>

      {/* Secondary Actions */}
      <div className="flex flex-col space-y-3 w-full">
        <Button size="lg" className="w-full" variant="outline">
          Continue with Email
        </Button>
        <Button size="lg" className="w-full" variant="outline">
          Continue with SAML SSO
        </Button>
        <Button size="lg" className="w-full" variant="outline">
          Continue with Passkey
        </Button>
      </div>

      {/* Footer Note */}
      <p className="text-[12px] text-center text-muted-foreground px-4">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
