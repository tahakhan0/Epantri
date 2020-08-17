import React from "react";
import Form from "./Form";
import { NavLink } from "react-router-dom";
import Input from "./fields/Input";

const Joi = require("@hapi/joi");

export class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().min(5).max(10).required().label("Password"),
  });

  doSubmit = () => {
    console.log("data is submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="row formLoginParent">
        <form onSubmit={this.handleSubmit} className="formLogin">
          <h3 className="text-center">Storekeeper</h3>
          <p className="text-center text-secondary">Welcome back</p>
          <Input
            name="email"
            value={data.email}
            onChange={this.handleChange}
            // label="Email"
            placeholder="Email id"
            error={errors.email}
          />
          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            placeholder="Password"
            error={errors.password}
          />
          <button
            type="submit"
            disabled={this.validate()}
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
          <small className="text-muted mt-4">
            Need an account?
            <NavLink to="/register" className="ml-1">
              Signup here
            </NavLink>
          </small>
        </form>
      </div>
    );
  }
}

export default Login;
