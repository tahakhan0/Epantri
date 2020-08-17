import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    onItemSelect,
    selectedItem,
    groupName,
    sortingUsed,
  } = props;
  // console.log(items);
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-primary dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {groupName}
      </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
        {items.map((item) => (
          <a
            key={item[textProperty]}
            href="#"
            className={
              selectedItem === item ? "dropdown-item active" : "dropdown-item"
            }
            onClick={() => onItemSelect(sortingUsed ? item.sortingUsing : item)}
          >
            {item[textProperty]}
          </a>
        ))}
      </div>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;

// // <div className="card">
// <ul className="list-group list-group-flush">
// {items.map((item) => (
//   <li
//     key={item[valueProperty]}
//     className={
//       selectedItem === item ? "list-group-item active" : "list-group-item"
//     }
//     onClick={() => onItemSelect(item)}
//   >
//     {item[textProperty]}
//   </li>
// ))}
// </ul>
// // </div>
