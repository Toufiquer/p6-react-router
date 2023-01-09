import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const User = ({ user: { name, id } }) => {
  const param = useParams();
  const navigate = useNavigate();
  const handleUserDetails = (id) => {
    navigate(`${id}`);
  };
  const colorDesign = "  font-bold p-2 m-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer border-2 border-solid border-blue-400";
  const activeColor = "  font-bold p-2 m-2 bg-blue-600 text-white cursor-pointer border-2 border-solid border-blue-400";
  return (
    <div>
      <h2 className={id === +param.userID ? activeColor : colorDesign}>
        <div onClick={() => handleUserDetails(id)} className="border-2 border-solid border-blue-300">
          Name: {name}, ID: {id}
        </div>
      </h2>
    </div>
  );
};

export default User;
