import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user: { name, id } }) => {
  const navigate = useNavigate();
  const handleUserDetails = (id) => {
    navigate(`${id}`);
  };
  return (
    <div>
      <h2 className="font-bold p-2 m-2 hover:bg-blue-800 hover:text-white hover:cursor-pointer border-2 border-solid border-blue-400">
        <div onClick={() => handleUserDetails(id)} className="border-2 border-solid border-blue-300">
          Name: {name}, ID: {id}
        </div>
      </h2>
    </div>
  );
};

export default User;
