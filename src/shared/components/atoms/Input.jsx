import React from "react";

const Input = ({ data, label, value, onChange, placeholder }) => {
  const inputId = `contact-${data}`;
  const isMessage = data === "message";
  const type = data === "email" ? "email" : "text";
  return (
    <div className="mb-3">
      <label htmlFor={inputId} className="form-label">
        {label}
      </label>
      {isMessage ? (
        <textarea
          id={inputId}
          name={data}
          className="form-control"
          rows="7"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={inputId}
          name={data}
          type={type}
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default React.memo(Input);
