import React, { Component } from "react";
import ListGroup from "./ListGroup";

export default class Searchbar extends Component {
  render() {
    const { sortBy, SortedBy, onItemSelect, selectedItem, items } = this.props;
    const tableMenu = [
      { name: "Name", sortingUsing: "name" },
      { name: "Category", sortingUsing: "menu.category" },
      { name: "Calories", sortingUsing: "calories" },
      { name: "Price", sortingUsing: "price" },
    ];
    return (
      <div className="container searchBarCss">
        <div className="row mb-4">
          <div className="col">
            <form>
              <div className="input-group">
                <div className="input-group-append">
                  <ListGroup
                    items={items}
                    onItemSelect={onItemSelect}
                    selectedItem={selectedItem}
                    groupName="Filter"
                  />
                </div>

                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <ListGroup
                    items={tableMenu}
                    onItemSelect={sortBy}
                    selectedItem={SortedBy}
                    groupName="Sort by"
                    sortingUsed={true}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// <ul className="navbar-nav">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdownMenuLink"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Sort By
//                 </a>
//                 <div
//                   className="dropdown-menu"
//                   aria-labelledby="navbarDropdownMenuLink"
//                 >
//                   <a
//                     onClick={() => sortBy(name)}
//                     className={
//                       SortedBy === "name"
//                         ? "dropdown-item active"
//                         : "dropdown-item"
//                     }
//                     href="#"
//                   >
//                     Name
//                   </a>
//                   <a
//                     onClick={() => sortBy(menuCategory)}
//                     className={
//                       SortedBy === "menu.category"
//                         ? "dropdown-item active"
//                         : "dropdown-item"
//                     }
//                     href="#"
//                   >
//                     Category
//                   </a>
//                   <a
//                     onClick={() => sortBy(calories)}
//                     className={
//                       SortedBy === "calories"
//                         ? "dropdown-item active"
//                         : "dropdown-item"
//                     }
//                     href="#"
//                   >
//                     Calories
//                   </a>
//                   <a
//                     onClick={() => sortBy(price)}
//                     className={
//                       SortedBy === "price"
//                         ? "dropdown-item active"
//                         : "dropdown-item"
//                     }
//                     href="#"
//                   >
//                     Price
//                   </a>
//                 </div>
//               </li>
//             </ul>
