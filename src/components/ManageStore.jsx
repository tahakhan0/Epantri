import React from "react";
import Form from "../forms/Form";
import { getWeeklyTimings, getMenuTags } from "../services/fakeRestaurant";
import HoursofOp from "../sideComponents/HoursofOp";

export class ManageStore extends Form {
  state = {
    data: {
      name: "",
      address: "",
      city: "",
      zipcode: "",
      phone: "",
      hours: "",
    },
    errors: {},
    timings: [],
    menuTags: [],
    verified: false,
  };

  componentDidMount() {
    this.setState({ timings: getWeeklyTimings(), menuTags: getMenuTags() });
  }

  render() {
    if (this.state.verified) return <h1>you're verified</h1>;
    const { timings, menuTags } = this.state;

    return (
      <div className="row ml-2" id="myGroup">
        <div className="col-md-4">
          <div className="row mb-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Restaurant Information</h5>
                <p class="card-text">
                  Information about the restaurant's address and location.
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <button
                      className="btn btn-link p-0"
                      data-toggle="collapse"
                      data-target="#restaurantInfoCollapse"
                      aria-expanded="false"
                      aria-controls="restaurantInfoCollapse"
                    >
                      Click to view more
                    </button>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div class="card" style={{ width: "100%" }}>
              <div class="card-body">
                <h5 class="card-title">Hours of Operation</h5>
                <p class="card-text">
                  Here you can configure timings for the week.
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <button
                      className="btn btn-link p-0"
                      data-toggle="collapse"
                      data-target="#hoursInfoCollapse"
                      aria-expanded="false"
                      aria-controls="hoursInfoCollapse"
                    >
                      Click to view more
                    </button>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Menu Tags</h5>
                <p class="card-text">
                  Configure timings for Breakfast, Lunch, and Dinner.
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <button
                      className="btn btn-link p-0"
                      data-toggle="collapse"
                      data-target="#menuTagsCollapse"
                      aria-expanded="false"
                      aria-controls="menuTagsCollapse"
                    >
                      Click to view more
                    </button>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="collapse col-md-10 mb-2"
            id="restaurantInfoCollapse"
            data-parent="#myGroup"
          >
            <div className="card">
              <div class="card-body">
                <form onSubmit={this.handleSubmit}>
                  <h5 className="card-title text-center">
                    Restaurant Information
                  </h5>
                  {this.renderInputField("name", "Name", "Name")}
                  {this.renderInputField("address", "", "Address")}
                  {this.renderInputField("city", "", "City")}
                  {this.renderInputField("zipcode", "", "Zip Code")}
                  {this.renderInputField("phone", "", "Phone")}
                  <button className="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div
            className="collapse col-md-10 mb-2"
            id="hoursInfoCollapse"
            data-parent="#myGroup"
          >
            <div className="card">
              <div class=" card-body">
                <h5 className="card-title text-center">Hours of operation</h5>
                <HoursofOp />
              </div>
            </div>
          </div>
          <div
            className="collapse col-md-10"
            id="menuTagsCollapse"
            data-parent="#myGroup"
          >
            <div className="card">
              <div class="card-body">Menu tags to be displayed</div>
            </div>
          </div>
        </div>
      </div>
    );
    // return (
    //   <div className="row">
    //     <div className="col-md-5 col-sm-12">
    //       <div className="card">
    //         <div className="card-body">
    //           <form onSubmit={this.handleSubmit}>
    //             <h4 className="text-center">Restaurant Information</h4>
    //             {this.renderInputField("name", "Name", "Name")}
    //             {this.renderInputField("address", "", "Address")}
    //             {this.renderInputField("city", "", "City")}
    //             {this.renderInputField("zipcode", "", "Zip Code")}
    //             {this.renderInputField("phone", "", "Phone")}
    //             <button className="btn btn-primary btn-block">Submit</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-5 col-sm-12">
    //       <div className="card">
    //         <div className="card-body">
    //           <h4 className="text-center">Hours</h4>
    //           <form onSubmit={this.handleSubmit}>
    //             <div className="form-group">
    //               <div className="form-row">
    //                 <div className="form-group col-md-2 p-2">
    //                   <label htmlFor="monday">Monday</label>
    //                 </div>
    //                 <div className="form-group col-2">
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     placeholder="9:00"
    //                     id="monday"
    //                   />
    //                 </div>
    //                 <div className="form-group col-2 p-0 ">
    //                   <select id="inputState" class="form-control">
    //                     <option selected>AM</option>
    //                     <option>PM</option>
    //                   </select>
    //                 </div>

    //                 <div className="form-group col-2">
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     placeholder="5:00"
    //                     id="monday"
    //                   />
    //                 </div>
    //                 <div className="form-group col-2 p-0">
    //                   <select id="inputState" class="form-control">
    //                     <option selected>AM</option>
    //                     <option>PM</option>
    //                   </select>
    //                 </div>
    //               </div>
    //             </div>
    //             <button className="btn btn-primary btn-block">Save</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default ManageStore;
