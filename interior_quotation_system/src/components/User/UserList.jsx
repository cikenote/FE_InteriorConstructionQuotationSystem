import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://swp391api.developvn.click/api/AccountManager?page=1&pageSize=20"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data.users.$values))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Full Name</th>
            <th>Birthdate</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Avatar URL</th>
            <th>Role ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.$id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.fullname}</td>
              <td>{user.birthdate}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.avtUrl}</td>
              <td>{user.roleId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
