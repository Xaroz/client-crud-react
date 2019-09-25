import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ViewClientPage() {
  const [user, setUser] = useState(0);
  return (
    <div className="container">
      <form>
        <label>Codigo</label>
        <input readOnly value={user} />
        <label>Nombre</label>
        <input readOnly value={user} />
        <label>Balance</label>
        <input readOnly value={user} />
        <label>Fecha de registro</label>
        <input readOnly value={user} />
      </form>
      <hr />
      <Link to="/HomePage" className="button">
        Volver
      </Link>
    </div>
  );
}
