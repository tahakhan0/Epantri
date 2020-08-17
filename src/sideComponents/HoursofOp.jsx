import React, { Component } from "react";
import Form from "../forms/Form";

export class HoursofOp extends Form {
  time = [
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
  ];
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="form-row">
            <div className="form-group col-md-2 p-2">
              <label htmlFor="monday">Monday</label>
            </div>
            <div className="form-group col-2">
              <select className="form-control">
                {this.time.map((t) => (
                  <option>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-2 p-0 ">
              <select id="inputState" className="form-control">
                <option selected>AM</option>
                <option>PM</option>
              </select>
            </div>

            <div className="form-group col-2">
              <select className="form-control">
                {this.time.map((t) => (
                  <option>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-2 p-0">
              <select id="inputState" class="form-control">
                <option selected>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-block">Save</button>
      </form>
    );
  }
}

export default HoursofOp;
