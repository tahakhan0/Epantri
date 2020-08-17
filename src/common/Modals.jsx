import React, { Component } from "react";
import { Form } from "../forms/Form";
const Joi = require("@hapi/joi");

export class Modals extends Form {
  state = {
    data: { name: "" },
    errors: {},
  };
  schema = Joi.object({
    name: Joi.string().min(2).max(10).required().label("Category"),
  });

  handleButton = (option) => {
    console.log(option, "is selected");
  };

  doSubmit() {
    console.log("Modal is submitted");
  }

  render() {
    const { buttonText, title, modalMessage, option1, option2 } = this.props;
    return (
      <div>
        <a type="button" data-toggle="modal" data-target="#exampleModal">
          {buttonText}
        </a>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInputField("name", "Category")}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  {option1}
                </button>
                <button
                  type="button"
                  onClick={() => this.handleButton(option2)}
                  className="btn btn-primary"
                >
                  {option2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modals;
