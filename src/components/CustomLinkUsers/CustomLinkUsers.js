import React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";

const CustomLinkUsers = ({ data: { name, id, handleUserDetails }, children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const colorDesign = "  font-bold p-2 m-2 hover:bg-blue-800 hover:text-white hover:cursor-pointer border-2 border-solid border-blue-400";
  const activeColor = "  font-bold p-2 m-2 bg-blue-800 text-white cursor-pointer border-2 border-solid border-blue-400";
  return (
    <div>
      <h2 className={match ? activeColor : colorDesign}>
        <div onClick={() => handleUserDetails(id)} className="border-2 border-solid border-blue-300">
          {`Name: ${name}, ID: ${id}`}
        </div>
      </h2>
    </div>
  );
};

export default CustomLinkUsers;
