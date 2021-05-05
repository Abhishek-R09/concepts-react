import { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

const App = () => {
  const [users, setUsers] = useState([
    { username: "Abhishek", age: 19, id: Math.random().toString() },
  ]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className="App">
      <AddUser onUserDetailsSubmit={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
