import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ChartName = ({ curr: { name, id } }) => {
  const navigate = useNavigate();
  const handleShoeCart = (id) => {
    navigate(`${id}`);
  };
  const colorDesign = "text-xl border-2 border-solid border-blue-600 mx-4 px-4 my-2 py-2 font-semibold cursor-pointer hover:bg-blue-200";
  const activeColor = "text-xl border-2 border-solid border-blue-600 mx-4 px-4 my-2 py-2 font-semibold cursor-pointer bg-blue-200";
  const param = useParams();
  return (
    <div onClick={() => handleShoeCart(id)} className={id === +param.chartsID ? activeColor : colorDesign}>
      Name: {name}
    </div>
  );
};

export default ChartName;
