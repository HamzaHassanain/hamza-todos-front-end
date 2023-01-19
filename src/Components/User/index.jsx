import React, { useEffect } from "react";
import Input from "../Input";
// import { Link, json, useParams, redirect, useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../../APIs";
import { useNavigate } from "react-router-dom";
export default function Index() {
  const navigate = useNavigate();
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
  function handleDeleteAccount(e) {
    e.preventDefault();
    if (window.confirm("Sure?"))
      deleteUser()
        .then((res) => {
          localStorage.removeItem("user");
          navigate("/auth/login");
        })
        .catch((err) => {
          setSuccess("");
          const data = err.response?.data;
          if (data) setErrors({ name: data.error });
          else console.error(err);
        });
  }
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

      <br />
      <br />
      <br />
      <button
        className="button delete-button signout"
        onClick={handleDeleteAccount}
      >
        Delete Account
      </button>
    </form>
  );
}
