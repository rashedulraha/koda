import { Button } from "@/components/ui/button";
import { GrGoogle } from "react-icons/gr";


const SignInform = () => {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center w-md ">
      <div className="flex items-center justify-center flex-col gap-2">
      <h2 className="font-medium text-lg md:text-2xl underline">Koda</h2>
      <p>Login in to koda</p>
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <Button size={"lg"} className="w-75"><GrGoogle/>Continue with google</Button>
        <p className="text-muted-foreground mt-2 text-center">You use google to login last time</p>
      </div>
      <div className="flex items-center justify-center flex-col space-y-5">
        <Button size={"lg"} className="w-75" variant={"outline"}>Continue with email</Button>
        <Button size={"lg"} className="w-75" variant={"outline"}>Continue with SAML SSO</Button>
        <Button size={"lg"} className="w-75" variant={"outline"}>Continue with passkey</Button>
      </div>


    </div>
  );
};

export default SignInform;