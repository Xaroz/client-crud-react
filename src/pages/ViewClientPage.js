import React from "react";
import { Link } from "react-router-dom";

const ViewClientPage = props => {
  const {user} = props.location.state;
  return (
    <div className="container">
      <form>
        <label>Codigo</label>
        <input readOnly value={user.id} />
        <label>Nombre</label>
        <input readOnly value={user.name} />
        <label>Balance</label>
        <input readOnly value={user.balance} />
        <label>Fecha de registro</label>
        <input readOnly value={user.registerDate} />
      </form>
      <hr />
      <Link to="/" className="button">
        Volver
      </Link>
    </div>
  );
};

export default ViewClientPage;