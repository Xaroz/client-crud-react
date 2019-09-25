import React from "react";
import { Link } from "react-router-dom";
// import { ClientProvider } from "../ClientContext";

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
                <Link
                  to= {{
                    pathname: "/ViewClientPage",
                    state: {
                      user
                    }
                  }}
                  className="button muted-button"
                >
                  Ver
                </Link>
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
