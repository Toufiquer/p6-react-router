import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className="p-2 border-2 border-solid mx-6 my-2" to="/home">
        Home
      </Link>
      <Link className="p-2 border-2 border-solid mx-6 my-2" to="/users">
        Users
      </Link>
      <Link className="p-2 border-2 border-solid mx-6 my-2" to="/about">
        About
      </Link>
      <Link className="p-2 border-2 border-solid mx-6 my-2" to="/profile">
        Profile
      </Link>
      <Link className="p-2 border-2 border-solid mx-6 my-2" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
