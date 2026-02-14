import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ManualSignin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" shadow-md w-full max-w-sm space-y-4">
      {/* Email */}
      <div className="space-y-1">
        <Label>Email</Label>
        <Input type="email" placeholder="Enter your email" />
      </div>

      {/* Password */}
      <div className="space-y-1">
        <Label>Password</Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-muted-foreground">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Register Button */}
      <Button className="w-full">Register</Button>
    </div>
  );
};

export default ManualSignin;
