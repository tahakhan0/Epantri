import React from "react";

export const Select = ({
  options,
  name,
  label,
  handleChange,
  error,
  value,
}) => {
  return (
    <div className="form-group">
      <select
        name={name}
        id={name}
        value={value}
        className="form-control"
        onChange={handleChange}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
