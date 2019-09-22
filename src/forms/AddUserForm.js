import React, { useState } from "react";

const AddUseForm = props => {
  const initialFormState = { id: null, name: "", balance: "" , registerDate: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.balance) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Balance</label>
      <input
        type="number"
        name="balance"
        value={user.balance}
        onChange={handleInputChange}
      />
      <button>Add New User</button>
    </form>
  );
};

export default AddUseForm;
