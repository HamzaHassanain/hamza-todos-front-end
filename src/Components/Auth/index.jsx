import React, { useEffect } from "react";
import Input from "../Input";
import { Link, json, useParams, redirect, useNavigate } from "react-router-dom";
import { signup, login } from "../../APIs";
export default function Index() {
  const { state } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({});
  const [fromData, setData] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    setErrors({});
  }, [state]);
  const handleFromSubmit = async (e) => {
    e.preventDefault();
    if (state === "signup")
      signup(fromData)
        .then((response) => {
          const { data } = response;
          const user = data.data.user;
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        })
        .catch((err) => {
          const data = err.response?.data;
          if (data) setErrors(data.filedErrors);
          else console.error(err);
        });
    else if (state === "login")
      login(fromData)
        .then((response) => {
          const { data } = response;
          const user = data.data.user;
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        })
        .catch((err) => {
          const data = err.response?.data;
          if (data) setErrors(data.filedErrors);
          else console.error(err);
        });
  };
  return (
    <form className="Todos container Auth" onSubmit={handleFromSubmit}>
      {state === "signup" ? (
        <>
          <Input
            placeholder={"Full Name"}
            value={fromData.name}
            handleChange={(e) => setData({ ...fromData, name: e.target.value })}
          />
          <p className="error">{errors.name}</p>
        </>
      ) : (
        <></>
      )}
      <Input
        placeholder={"Email"}
        value={fromData.email}
        handleChange={(e) => setData({ ...fromData, email: e.target.value })}
      />
      <p className="error">{errors.email}</p>
      <Input
        placeholder={"Password"}
        type="password"
        value={fromData.password}
        handleChange={(e) => setData({ ...fromData, password: e.target.value })}
      />
      <p className="error">{errors.password}</p>
      <button type="submit" className="button submit">
        {state === "signup" ? "Sign Up" : "Log In"}
      </button>
      <div className="change">
        <Link to={`/auth/${state === "signup" ? "login" : "signup"}`}>
          {state === "signup"
            ? "Do not have an accout? Sign Up"
            : "Have an accout? Login"}
        </Link>
      </div>
    </form>
  );
}
