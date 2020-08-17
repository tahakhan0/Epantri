import React, { Component, Fragment } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import NewItemForm from "../forms/NewItemForm";
import * as icons from "../icons/allicons";
import Modals from "../common/Modals";
import ManageStore from "./ManageStore";
import MenuDetail from "./MenuDetail";

class Mainapp extends Component {
  render() {
    return (
      <Fragment>
        <div className="d-flex" id="wrapper">
          <div className="border-right sideBarCss" id="sidebar-wrapper">
            <div className="sidebar-heading">Epantri</div>
            <div className="list-group list-group-flush">
              <Link
                to="/dashboard"
                className="list-group-item list-group-item-action"
              >
                {icons.dashboardIcon}
                <span className="align-middle">Dashboard</span>
              </Link>
              <a
                className="list-group-item list-group-item-action"
                data-toggle="collapse"
                href="#collapseMenu"
                role="button"
                aria-expanded="false"
                aria-controls="collapseMenu"
              >
                {icons.menuIcon}
                <span className="align-middle">Menu</span>
              </a>
              <div className="collapse" id="collapseMenu">
                <ul className="list-group-menu">
                  <li className="list-group-item">
                    <Link to="/menu"> View Menu</Link>
                  </li>
                  <li className="list-group-item">
                    <Modals
                      title="Adding new category"
                      buttonText="Add new category"
                      option1="Close"
                      option2="Save"
                    />
                  </li>
                  <li className="list-group-item">
                    <Link to="/newitem">Add a new item</Link>
                  </li>
                </ul>
              </div>
              <Link
                to="/managestore"
                className="list-group-item list-group-item-action"
              >
                {icons.managestoreIcon}
                <span className="align-middle">Manage Store</span>
              </Link>

              <a href="#" className="list-group-item list-group-item-action ">
                {icons.helpIcon}
                <span className="align-middle">Help</span>
              </a>
            </div>
          </div>
          <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light border-bottom">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container-fluid">
              <Switch>
                <Route path="/menu/:id" component={MenuDetail} />
                <Route path="/menu" component={Menu} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/newitem" component={NewItemForm} />
                <Route path="/newcategory" component={Modals} />
                <Route path="/managestore" component={ManageStore} />
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Mainapp;
