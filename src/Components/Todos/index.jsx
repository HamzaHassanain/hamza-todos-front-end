import React, { useState } from "react"
import TodosContextProvider from "../../contexts/todosContext"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import TodosFooter from "./TodosFooter"
export default function Index() {
  const [filter, setFilter] = useState({ function: (todos) => todos })
  console.log()
  return (
    <TodosContextProvider>
      <div className="Todos container">
        <AddTodo />
        <ul className="todos-list">
          <TodoList filter={filter.function} />
          <TodosFooter setFilter={setFilter} />
        </ul>
      </div>
    </TodosContextProvider>
  )
}
