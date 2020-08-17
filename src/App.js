import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./forms/Login";
import Mainapp from "./components/Mainapp";
import Register from "./forms/Register";
// import NewItemForm from "./forms/NewItemForm";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Mainapp />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
