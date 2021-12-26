import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/Signup/SignUp";
import Dashboard from "./Dashboard/dashboard";
import Error from "./error";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
