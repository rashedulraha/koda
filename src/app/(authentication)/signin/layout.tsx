import React from "react";

interface signInLayout {
  children: React.ReactNode;
}

const SigninLayout = ({ children }: signInLayout) => {
  return <div>{children}</div>;
};

export default SigninLayout;
