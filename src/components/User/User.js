import React from "react";
import { Link } from "react-router-dom";

const User = ({ user: { name, id } }) => {
  return (
    <div>
      <h2 className="font-bold p-2 m-2 hover:bg-blue-800 hover:text-white hover:cursor-pointer border-2 border-solid border-blue-400">
        <Link to={/user/ + id}>
          Name: {name}, ID: {id}
        </Link>
      </h2>
    </div>
  );
};

export default User;
