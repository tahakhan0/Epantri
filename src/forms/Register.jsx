import React from "react";
import Form from "./Form";
import Input from "./fields/Input";
import { NavLink } from "react-router-dom";

const Joi = require("@hapi/joi");

export class Register extends Form {
  state = {
    data: { email: "", password: "", password2: "" },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().min(5).max(10).required().label("Password"),
    password2: Joi.ref("password"),
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
          <p className="text-center">Let's get started</p>
          <Input
            name="email"
            value={data.email}
            onChange={this.handleChange}
            placeholder="Email"
            error={errors.email}
          />
          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            placeholder="Password"
            error={errors.password}
          />
          <Input
            name="password2"
            value={data.password2}
            onChange={this.handleChange}
            placeholder="Enter your password again"
            error={errors.password2}
          />
          <button
            type="submit"
            disabled={this.validate()}
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
          <small className="text-muted mt-4">
            Alreay have an account?
            <NavLink to="/login" className="ml-1">
              Login
            </NavLink>
          </small>
        </form>
      </div>
    );
  }
}

export default Register;
