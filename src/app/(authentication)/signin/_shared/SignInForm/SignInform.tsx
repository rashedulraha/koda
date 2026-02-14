"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import ManualSignin from "./ManualSignin";

const SignInform = () => {
  const [isEmailAndPassword, setEmailAndPassword] = useState<boolean>(true);

  // handle isEmail and password form function

  const handleChangeCondition = () => {
    setEmailAndPassword(!isEmailAndPassword);
  };

  return (
    <div className="flex flex-col space-y-8 items-center justify-center w-full max-w-md mx-auto p-4">
      <div className="flex items-center justify-center flex-col gap-3 text-center">
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight text-foreground">
          Koda
        </h2>

        <div className="flex items-center gap-2 text-sm md:text-base">
          <p className="text-muted-foreground">Login to Koda</p>
          <span className="text-muted-foreground">•</span>
          <p className="text-primary font-medium hover:underline">
            <Link href={"/signup"}>Create your new koda workspace</Link>
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Button size={"lg"} className="w-full flex gap-2 items-center">
          <GrGoogle className="text-lg" />
          Continue with Google
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          You used Google to login last time
        </p>
      </div>

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

      <div className="w-full flex items-center justify-center flex-col space-y-3">
        {/* condition form */}
        {isEmailAndPassword ? (
          <>
            <Button
              onClick={handleChangeCondition}
              size={"lg"}
              className="w-full text-sm"
              variant={"outline"}>
              Create with email and password
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
        ) : (
          <>
            <ManualSignin />
          </>
        )}
      </div>

      <p className="text-[12px] text-center text-muted-foreground px-8">
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </div>
  );
};

export default SignInform;
