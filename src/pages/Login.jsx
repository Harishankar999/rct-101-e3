import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Navigate } from "react-router-dom";
import styles from "../style.module.css";
const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        dispatch({
          type: "LOGIN",
          token: res.data.token,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if(state.isAuth){
    return <Navigate to='/'/>
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          data-cy="login-email"
        />
        <br />
        <br />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          data-cy="login-password"
        />
        <br />
        <br />
        <button className={styles.btn} type="submit" data-cy="login-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
