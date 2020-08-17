import React from "react";
import Form from "./Form";
import { getCategories } from "../services/fakeRestaurant";
// import _ from "lodash";

const Joi = require("@hapi/joi");

export default class NewItemForm extends Form {
  state = {
    data: {
      itemName: "",
      categoryId: "",
      price: "",
      calories: "",
      description: "",
    },
    errors: {},
    categories: [],
    available: [],
    counter: 1,
  };
  schema = Joi.object({
    itemName: Joi.string().alphanum().min(2).max(30).required().label("Name"),
    categoryId: Joi.string().alphanum().required().label("Category"),
    price: Joi.number().integer().min(0).label("Price"),
    calories: Joi.number().integer().min(0).label("Calories"),
    description: Joi.string().max(140),
  });

  componentDidMount() {
    this.setState({ categories: getCategories() });
  }

  render() {
    // const { counter } = this.state;
    // const counterArray = _.range(1, counter + 1);
    return (
      <div className="container">
        <div className="col-6 p-0 mb-4">
          <h5>Adding a new item</h5>
          <hr />
          <form onSubmit={this.handleSubmit}>
            {this.renderInputField("itemName", "Name")}
            {this.renderSelect("c", "Category", this.state.categories)}
            {this.renderInputField("price", "Price")}
            {this.renderInputField("calories", "Calories")}
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              // disabled={this.validate()}
              className="btn btn-primary"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
