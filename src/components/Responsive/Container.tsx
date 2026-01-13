import React from "react";

interface props {
  children: React.ReactNode;
}

const Container = ({ children }: props) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default Container;
