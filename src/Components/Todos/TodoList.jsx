import React, { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodosContext, UpdateTodosContext } from "../../contexts/todosContext"

export default function TodoList({ filter }) {
  console.log("THIS IS FILTER FINCTOIN", typeof filter)
  const todos = useContext(TodosContext)
  const updateTodos = useContext(UpdateTodosContext)
  let i = 0
  function toggleTodo(todo) {
    todo.isDone = !todo.isDone
    updateTodos([...todos])
  }
  function deleteTodo(todo) {
    const newTodos = todos.filter((item) => item !== todo)
    updateTodos(newTodos)
  }
  return (
    <>
      {filter(todos).map((todo) => (
        <div key={i++}>
          <TodoItem
            isDone={todo?.isDone}
            text={todo?.text}
            toggleTodo={(_) => toggleTodo(todo)}
            deleteTodo={(_) => deleteTodo(todo)}
          />
        </div>
      ))}
    </>
  )
}
