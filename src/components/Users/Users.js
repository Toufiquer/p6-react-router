import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="grid grid-cols-[350px_1fr]">
      <div className="bg-blue-200 w-full min-h-screen">
        {users.map((user) => (
          <User user={user} key={user.id}></User>
        ))}
      </div>
      <div className="bg-blue-400 w-full min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Users;
