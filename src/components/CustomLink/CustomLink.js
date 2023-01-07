import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className="p-2 border-2 border-solid mx-6 my-2" style={{ textDecoration: match ? "underline" : "none" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
