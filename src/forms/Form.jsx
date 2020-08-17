import React, { Component } from "react";
import Select from "./fields/Select";
import Input from "./fields/Input";
const Joi = require("@hapi/joi");

export class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);

    if (!error) return null;

    const errors = {};
    for (let err of error.details) errors[err.path[0]] = err.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subschema = Joi.object({ [name]: this.schema.extract([name]) });
    const { error } = subschema.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        onChange={this.handleChange}
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        options={options}
      />
    );
  };

  renderInputField = (name, placeholder, label) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        placeholder={placeholder}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
}

export default Form;
