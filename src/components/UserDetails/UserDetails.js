import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState([]);
  const params = useParams();
  const id = params.userID;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  return (
    <div className="border-2 border-solid border-blue-200 w-[600px] mx-auto my-4 text-white text-2xl text-left p-4">
      <h2>
        <span className="font-semibold">Name:</span> {user.name}
      </h2>
      <h2>
        <span className="font-semibold">Email: </span> {user.email}
      </h2>
      <h2>
        <span className="font-semibold">User Name: </span> {user.username}
      </h2>
      <h2>
        <span className="font-semibold">City: </span> {user.address?.city}
      </h2>
      <h2>
        <span className="font-semibold">ID: </span> {user.id}
      </h2>
    </div>
  );
};

export default UserDetails;
