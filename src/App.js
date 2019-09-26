import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import AddUserForm from "./forms/AddUserForm";
import ViewClientPage from "./pages/ViewClientPage";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/AddUserForm" component={AddUserForm} /> */}
      <Route path="/ViewClientPage" component={ViewClientPage} />
    </Switch>
  );
}

