import React from "react";

const Input = ({ name, value, onChange, label, error, placeholder }) => {
  return (
    <div className="form-group">
      <label className={label ? "" : "sr-only"} htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label ? "" : placeholder}
      />
      {error && (
        <div className="alert alert-danger text-sm" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
