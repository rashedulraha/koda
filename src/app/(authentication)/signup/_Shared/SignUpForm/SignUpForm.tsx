"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import ManualSignup from "./ManualSignup";
import { Undo2 } from "lucide-react";

export function SignUpForm() {
  const [showManualForm, setShowManualForm] = useState(false);

  const toggleForm = () => {
    setShowManualForm((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-8 items-center justify-center w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl tracking-tight text-center">Koda</h2>

        <div className="flex items-center justify-between text-sm">
          <p className="text-muted-foreground">Create your workspace</p>
          <Link
            href="/signin"
            className="text-primary font-medium hover:underline">
            Already have an account?
          </Link>
        </div>
      </div>

      {/* Google Button */}
      <div className="w-full flex flex-col space-y-2">
        <Button size="lg" className="w-full flex gap-2 items-center">
          <GrGoogle className="text-lg" />
          Continue with Google
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          You used Google to login last time
        </p>
      </div>

      {/* Divider */}
      <div className="relative w-full flex items-center">
        <div className="grow border-t border-muted"></div>
        <span className="mx-4 text-xs text-muted-foreground uppercase">Or</span>
        <div className="grow border-t border-muted"></div>
      </div>

      {/* Toggle Section */}
      <div className="w-full flex flex-col space-y-3">
        {showManualForm && (
          <div onClick={toggleForm} className="flex justify-end cursor-pointer">
            <Undo2 size={18} />
          </div>
        )}

        {!showManualForm ? (
          <>
            <Button
              onClick={toggleForm}
              size="lg"
              variant="outline"
              className="w-full text-sm">
              Continue with email and password
            </Button>

            <Button disabled size="lg" variant="outline" className="w-full">
              Continue with SAML SSO
            </Button>

            <Button disabled size="lg" variant="outline" className="w-full">
              Continue with Passkey
            </Button>
          </>
        ) : (
          <ManualSignup />
        )}
      </div>

      <p className="text-xs text-center text-muted-foreground px-4">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
