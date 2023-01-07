import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="border-2 border-sky-400 border-solid">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default Header;
