import React, { Component } from "react";
import { getMenu, getCategories } from "../services/fakeRestaurant";
import Pagination from "../utils/Pagination";
import { paginate } from "../utils/paginate";
import itemphoto from "./itemphoto.jpg";
import _ from "lodash";
import Searchbar from "../common/Searchbar";
import MenuDetail from "./MenuDetail";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  state = {
    Menu: [],
    Categories: [],
    pageSize: 6,
    currentPage: 1,
    sortColumn: { path: "menu.category", order: "asc" },
    itemDetail: [],
    openDetails: false,
  };
  componentDidMount() {
    const Categories = [
      { id: null, name: "All Categories" },
      ...getCategories(),
    ];

    this.setState({ Menu: getMenu(), Categories });
  }

  handleCategorySelection = (category) => {
    console.log("category selected", category);
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  provideDetailView = (menuItem) => {
    this.setState({
      itemDetail: menuItem,
      openDetails: !this.state.openDetails,
    });
  };

  render() {
    const {
      Menu: currentMenu,
      Categories,
      pageSize,
      currentPage,
      sortColumn,
      selectedCategory,
      openDetails,
    } = this.state;

    const filtered =
      selectedCategory && selectedCategory.id
        ? currentMenu.filter(
            (menuItems) => menuItems.menu.id === selectedCategory.id
          )
        : currentMenu;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const Menu = paginate(sorted, currentPage, pageSize);

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <Searchbar
              items={Categories}
              onItemSelect={this.handleCategorySelection}
              selectedItem={selectedCategory}
              SortedBy={sortColumn.path}
              sortBy={this.handleSort}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-8" id="left">
            {Menu.map((menuItem) => (
              <div key={menuItem.id} className="card mb-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <div className="row imageContainer">
                        <img src={itemphoto} alt="itempic" />
                      </div>
                      <div className="row availableItem mt-4">
                        <ul>
                          <li>
                            <span id="badgeDesignAvailable">Available at</span>
                          </li>
                          <li>
                            <span className="badge badge-pill" id="badgeDesign">
                              Breakfast
                            </span>
                          </li>
                          <li>
                            <span className="badge badge-pill" id="badgeDesign">
                              Lunch
                            </span>
                          </li>
                          <li>
                            <span className="badge badge-pill" id="badgeDesign">
                              Dinner
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col ml-4 mr-2">
                      <div className="row card-title">
                        <div className="col-10">
                          <h5>{menuItem.name}</h5>
                        </div>
                        <div className="col">
                          <button
                            className="btn btn-outline-primary btn-md"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseExample"
                            aria-expanded={openDetails}
                            aria-controls="collapseExample"
                            onClick={() => this.provideDetailView(menuItem.id)}
                          >
                            {/* <Link to={`/menu/${menuItem.id}`}>Edit</Link> */}
                            Edit
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <ul style={{ listStyle: "none", padding: "0" }}>
                          <li>Category:{menuItem.menu.category}</li>
                          <li>Price:{menuItem.price}</li>
                          <li>Calories:{menuItem.calories}</li>
                        </ul>
                      </div>
                      <div className="row text-secondary">
                        Description Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Amet asperiores ipsum fuga voluptatem
                        xercitationem quae corrupti distinctio aperiam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
          <div className="col-lg-6 col-sm-4" id="right">
            <MenuDetail
              itemDetails={this.state.itemDetail}
              open={openDetails}
            />
          </div>
        </div>
      </div>
    );
  }
}

// <table className="table table-hover content-table">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Category</th>
//                   <th>Calories</th>
//                   <th>Price</th>
//                   <th>Available</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Menu.map((menuItem) => (
//                   <tr key={menuItem.id}>
//                     <td>{menuItem.name}</td>
//                     <td>{menuItem.menu.category}</td>
//                     <td>{menuItem.calories}</td>
//                     <td>{menuItem.price}</td>
//                     <td>
//                       <div className="d-flex justify-content-center custom-control custom-switch">
//                         <input
//                           type="checkbox"
//                           className="custom-control-input"
//                           id="customSwitch1"
//                           // value={menuItem.available ? true : false}
//                           checked={menuItem.available}
//                           onChange={() =>
//                             (menuItem.available = !menuItem.available)
//                           }
//                           // onClick={(e) => (m.available = !m.available)}
//                         />
//                         <label
//                           className="custom-control-label"
//                           htmlFor="customSwitch1"
//                         />
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
