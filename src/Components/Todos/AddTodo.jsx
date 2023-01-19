import React, { useContext, useState } from "react";
import Input from "../Input";
import { TodosContext, UpdateTodosContext } from "../../contexts/todosContext";
export default function AddTodo() {
  const { update_addTodo } = useContext(UpdateTodosContext);
  const [todoValue, setTodoValue] = useState("");
  const handleFromSubmit = (e) => {
    e.preventDefault();
    update_addTodo(todoValue);
    setTodoValue("");
  };
  const handleChange = (e) => {
    setTodoValue(e.target.value);
    // console.log(todoValue);
  };
  return (
    <form onSubmit={handleFromSubmit}>
      <Input
        placeholder={"What do have next to do?"}
        value={todoValue}
        handleChange={handleChange}
      />
    </form>
  );
}
