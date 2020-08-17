import React from "react";
import Form from "../forms/Form";
import Input from "../forms/fields/Input";
const Joi = require("@hapi/joi");

export default class MenuDetail extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  // schema = Joi.object({
  //   username: Joi.string()
  //     .alphanum()
  //     .max(8)
  //     .min(3)
  //     .required()
  //     .label("Username"),
  //   password: Joi.string().min(5).max(10).required().label("Password"),
  // });

  doSubmit = () => {
    console.log("data is submitted");
  };
  render() {
    console.log(this.props.match);
    return <div></div>;
  }
}
