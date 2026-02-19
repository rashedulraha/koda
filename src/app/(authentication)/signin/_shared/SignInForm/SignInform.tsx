"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import ManualSignin from "./ManualSignin";
import { Undo2 } from "lucide-react";

const SignInForm = () => {
  const [showManualForm, setShowManualForm] = useState(false);

  const toggleForm = () => {
    setShowManualForm((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-8 items-center justify-center w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight">Koda</h2>

        <div className="flex items-center gap-2 text-sm md:text-base justify-center">
          <p className="text-muted-foreground">Login to Koda</p>
          <span className="text-muted-foreground">•</span>
          <Link
            href="/signup"
            className="text-primary font-medium hover:underline">
            Create your new workspace
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
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-muted" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
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
          <ManualSignin />
        )}
      </div>

      <p className="text-xs text-center text-muted-foreground px-8">
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </div>
  );
};

export default SignInForm;
