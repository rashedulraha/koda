"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import ManualSignup from "./ManualSignup";
import { Undo2 } from "lucide-react";

export function SignUpForm() {
  //  condition change  to  button to manual signin
  const [isEmailAndPassword, setEmailAndPassword] = useState<boolean>(true);

  //  condition change  function
  const handleToggleButtonToForm = () => {
    setEmailAndPassword(!isEmailAndPassword);
  };

  const handleToggleFormToButton = () => {
    setEmailAndPassword(!isEmailAndPassword);
  };

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
            Already have an account
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
      <div className="flex flex-col space-y-3 w-full ">
        {isEmailAndPassword && (
          <div
            onClick={handleToggleFormToButton}
            className="flex items-center justify-end w-full cursor-pointer">
            <Undo2 size={18} />
          </div>
        )}

        {isEmailAndPassword ? (
          <>
            <ManualSignup />{" "}
          </>
        ) : (
          <>
            <Button
              onClick={handleToggleButtonToForm}
              size={"lg"}
              className="w-full text-sm"
              variant={"outline"}>
              signin with email and password
            </Button>
            <Button
              disabled
              size={"lg"}
              className="w-full text-sm"
              variant={"outline"}>
              Continue with SAML SSO
            </Button>
            <Button
              disabled
              size={"lg"}
              className="w-full text-sm"
              variant={"outline"}>
              Continue with Passkey
            </Button>
          </>
        )}
      </div>

      {/* Footer Note */}
      <p className="text-[12px] text-center text-muted-foreground px-4">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
