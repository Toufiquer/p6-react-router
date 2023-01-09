import React from "react";
import { useNavigate } from "react-router-dom";

const ChartName = ({ curr: { name, id } }) => {
  const navigate = useNavigate();
  const handleShoeCart = (id) => {
    navigate(`${id}`);
  };
  return (
    <div onClick={() => handleShoeCart(id)} className="text-xl border-2 border-solid border-blue-600 mx-4 px-4 my-2 py-2 font-semibold cursor-pointer hover:bg-blue-200">
      Name: {name}
    </div>
  );
};

export default ChartName;
