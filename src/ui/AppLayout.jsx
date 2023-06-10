import React from "react";
import Header from "../app/components/Header";
import Navbar from "../app/components/Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default AppLayout;
