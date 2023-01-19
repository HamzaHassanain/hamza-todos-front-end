import React, { useEffect } from "react";
import {
  addTodo,
  deleteTodo,
  deleteTodoDone,
  getTodos,
  toggleTodo,
} from "../APIs";

export const TodosContext = React.createContext([]);
export const UpdateTodosContext = React.createContext();

export default function TodosContextProvider({ children }) {
  // const localStorageData = localStorage.getItem("todos")
  const [todos, setTodos] = React.useState([]);
  useEffect(() => {
    getTodos()
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        setTodos(data.todos);
      })
      .catch((err) => {
        const data = err.response?.data;
        if (data) console.error(data);
        else console.error();
      });
  }, []);
  function update_addTodo(text) {
    addTodo(text)
      .then((response) => {
        const data = response.data.data.todos;
        if (!data) throw new Error("No todos found although added one");
        else setTodos(data);

        console.log(data);
      })
      .catch((err) => {
        const data = err.response?.data;
        if (data) console.error(data);
        else console.error();
      });
  }
  function update_deleteTodo(id) {
    deleteTodo(id)
      .then((response) => {
        const data = response.data.data.todos;
        setTodos(data);
        console.log(data);
      })
      .catch((err) => {
        const data = err.response?.data;
        if (data) console.error(data);
        else console.error();
      });
  }
  function update_toggleTodo(id) {
    toggleTodo(id)
      .then((response) => {
        const data = response.data.data.todos;
        setTodos(data);
        console.log(data);
      })
      .catch((err) => {
        const data = err.response?.data;
        if (data) console.error(data);
        else console.error();
      });
  }
  function update_removeDoneTodos() {
    deleteTodoDone()
      .then((response) => {
        const data = response.data.data.todos;
        setTodos(data);
        console.log(data);
      })
      .catch((err) => {
        const data = err.response?.data;
        if (data) console.error(data);
        else console.error();
      });
  }

  return (
    <TodosContext.Provider value={todos}>
      <UpdateTodosContext.Provider
        value={{
          update_addTodo,
          update_deleteTodo,
          update_toggleTodo,
          update_removeDoneTodos,
        }}
      >
        {children}
      </UpdateTodosContext.Provider>
    </TodosContext.Provider>
  );
}
