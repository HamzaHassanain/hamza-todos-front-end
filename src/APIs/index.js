import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.request.use(function (config) {
  const { token } = JSON.parse(localStorage.getItem("user") || "{}");
  config.headers.Authorization = "Bearer " + token;

  return config;
});
console.log(process.env.REACT_APP_BASE_URL);
export const signup = (data) => axios.post("/auth/signup", data);
export const login = (data) => axios.post("/auth/login", data);
export const updateUser = (name) => axios.put("/user/update", { name });
export const deleteUser = () => axios.delete("/user/delete");

export const getTodos = () => axios.get("/user/todos/");
export const addTodo = (text) => axios.post("/user/todos/new", { text });
export const toggleTodo = (todo_id) =>
  axios.put(`/user/todos/toggle/${todo_id}`);
export const deleteTodo = (todo_id) =>
  axios.delete(`/user/todos/delete/${todo_id}`);
export const deleteTodoDone = () => axios.delete(`/user/todos/delete-done`);
