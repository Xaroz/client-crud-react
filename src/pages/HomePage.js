import React, { useState, useEffect } from "react";
import UserTable from "../table/UserTable";
import EditUserForm from "../forms/EditUserForm";
import UseLocalStorage from "../UseLocalStorage";
import { Link } from "react-router-dom";

const App = () => {
  const currentId = () =>
    Number(
      window.localStorage.getItem("users")
        ? window.localStorage.getItem("lastUsedId")
        : 0
    );

  const [users, setUsers] = UseLocalStorage("users", "");
  const [lastUsedId, setLastUsedId] = useState(currentId);

  useEffect(() => {
    window.localStorage.setItem("lastUsedId", lastUsedId);
  }, [lastUsedId]);

  const addUser = user => {
    user.id = lastUsedId + 1;
    setLastUsedId(user.id);
    user.registerDate = new Date().toLocaleDateString();
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    name: "",
    balance: "",
    registerDate: ""
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      balance: user.balance,
      registerDate: user.registerDate
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>Clientes</h1>
      <hr />
      <Link to="UserPage" className="button">
        Add Client
      </Link>
      <div className="flex-large">
        <div className="flex-large">
          {editing ? (
            <div>
              <h4>Editar Cliente</h4>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : null}
        </div>
        <div className="flex-large">
          <h2>Tabla de clientes</h2>
          <hr />
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
