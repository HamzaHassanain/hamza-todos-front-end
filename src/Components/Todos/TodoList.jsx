import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext, UpdateTodosContext } from "../../contexts/todosContext";

export default function TodoList({ filter }) {
  const todos = useContext(TodosContext);
  const { update_deleteTodo, update_toggleTodo } =
    useContext(UpdateTodosContext);
  function toggleTodo(id) {
    update_toggleTodo(id);
  }
  function deleteTodo(id) {
    update_deleteTodo(id);
  }
  return (
    <>
      {filter(todos).map((todo) => (
        <div key={todo._id}>
          <TodoItem
            isDone={todo.done}
            text={todo.text}
            toggleTodo={(_) => toggleTodo(todo._id)}
            deleteTodo={(_) => deleteTodo(todo._id)}
          />
        </div>
      ))}
    </>
  );
}
