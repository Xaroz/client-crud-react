import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
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
      <button>Guardar Cambios</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  );
};

export default EditUserForm;
