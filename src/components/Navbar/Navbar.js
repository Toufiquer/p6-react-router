import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/users">Users</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/products">Products</CustomLink>
      <CustomLink to="/charts">Charts</CustomLink>
      <CustomLink to="/profile">Profile</CustomLink>
      <CustomLink to="contact">Contact</CustomLink>
    </div>
  );
};

export default Navbar;
