import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as client from "./client";
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil, BsPlusCircleFill } from "react-icons/bs";

function UserTable() {
  const initialUserState = { username: "", password: "", role: "USER", firstName: "", lastName: "" };
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(initialUserState);


  const createUser = async () => {
    if (user._id) {
      // User has an ID, should update instead
      updateUser();
    } else {
      // Create new user
      try {
        const newUser = await client.createUser(user);
        setUsers([newUser, ...users]);
        setUser(initialUserState); // Reset user state after creation
      } catch (err) {
        console.log(err);
      }
    }
  };

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
      setUser(initialUserState); // Reset user state after update
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };



  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>
              <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
              <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap">
              <BsFillCheckCircleFill className="me-2 text-success fs-1 text" onClick={updateUser}/>
              <BsPlusCircleFill className="text-success fs-1 text" onClick={createUser}/>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
              <Link to={`/project/account/${user._id}`}>
                {user.username}
              </Link>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
                <button className="btn btn-warning me-2">
                    <BsPencil onClick={() => selectUser(user)} />
                </button>
                <button className="btn btn-danger" onClick={() => deleteUser(user)}>
                  <BsTrash3Fill />
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;

