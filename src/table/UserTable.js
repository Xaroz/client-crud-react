import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Name</th>
        <th>Balance</th>
        <th>Fecha de Registro</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{parseFloat(user.balance).toFixed(2)}</td>
            <td>{user.registerDate}</td>
            <td>
              <button
                onClick={() => props.editRow(user)}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Borrar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
