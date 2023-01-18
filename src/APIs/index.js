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
export const updateUser = (data) => axios.put("/user/update", data);
export const deleteUser = () => axios.delete("/user/delete");

export const addTodo = (body) => axios.post("/todos", { body });
export const toggleTodo = (todo_id) => axios.put(`/todos/toggle/${todo_id}`);
export const deleteTodo = (todo_id) => axios.delete(`/todos/delete/${todo_id}`);
