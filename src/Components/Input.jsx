import React from "react";

export default function Input({
  value,
  handleChange,
  placeholder,
  type = "text",
}) {
  return (
    <div className="input-container ">
      <input
        className="todo-item"
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
