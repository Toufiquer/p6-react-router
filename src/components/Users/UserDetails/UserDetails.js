import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  console.log(userId, " => Line No: 6");
  return <div>users Details {userId}</div>;
};

export default UserDetails;
