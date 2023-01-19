import React, { useEffect } from "react";
import Input from "../Input";
// import { Link, json, useParams, redirect, useNavigate } from "react-router-dom";
import { updateUser } from "../../APIs";
export default function Index() {
  const [errors, setErrors] = React.useState({});
  const [success, setSuccess] = React.useState("");
  const [name, setName] = React.useState(
    JSON.parse(localStorage.getItem("user") || "{}").name
  );

  const handleFromSubmit = async (e) => {
    e.preventDefault();
    updateUser(name)
      .then((response) => {
        const { data } = response;
        const user = data.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        setSuccess("Username changed correctly");
        setErrors({});
      })
      .catch((err) => {
        setSuccess("");
        const data = err.response?.data;
        if (data) setErrors(data.filedErrors);
        else console.error(err);
      });
  };
  return (
    <form className="Todos container Auth" onSubmit={handleFromSubmit}>
      <>
        <Input
          placeholder={"Full Name"}
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <p className="error">{errors.name}</p>
        <p className="success">{success}</p>
      </>
      <button type="submit" className="button submit">
        Save
      </button>
    </form>
  );
}
