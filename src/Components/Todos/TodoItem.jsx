import React from "react"
import CheckIcon from "../../images/icon-check.svg"
import CrossIcon from "../../images/icon-cross.svg"
export default function TodoItem({ isDone, text, deleteTodo, toggleTodo }) {
  return (
    <li className={"todo-item " + (isDone ? "done" : "")}>
      <div className="todo-body">
        <div className="todo-checker" onClick={toggleTodo}>
          <img className="checkmark" src={CheckIcon} width={16} height={16} />
        </div>
        <div className="todo-text">{text} </div>
      </div>
      <div className="delete-todo" onClick={deleteTodo}>
        <img className="cross" src={CrossIcon} width={16} height={16} />
      </div>
    </li>
  )
}
