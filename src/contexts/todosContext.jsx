import React from "react"

export const TodosContext = React.createContext([])
export const UpdateTodosContext = React.createContext()

export default function TodosContextProvider({ children }) {
  const localStorageData = localStorage.getItem("todos")
  const [todos, setTodos] = React.useState(
    !localStorageData ? [] : JSON.parse(localStorageData)
  )
  console.log(todos, localStorageData)
  function updateTodos(newTodos) {
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }
  return (
    <TodosContext.Provider value={todos}>
      <UpdateTodosContext.Provider value={updateTodos}>
        {children}
      </UpdateTodosContext.Provider>
    </TodosContext.Provider>
  )
}
