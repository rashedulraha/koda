import React from "react";

interface props {
  children: React.ReactNode;
}

const Container = ({ children }: props) => {
  return <div className="max-w-[1200] mx-auto px-4">{children}</div>;
};

export default Container;
