import React from "react"

export default function Input({ value, handleChange, placeholder }) {
  return (
    <div className="input-container ">
      <input
        className="todo-item"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}
