import React from "react";
import "./Registration.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/", { email, password })
      .then(res=>{
        
      })
    } 
    catch (e) {
        console.log(e)
    }
  }

  return (
    <>
      <div class="login-page">
        <form action="POST" class="form">
          <input
            aria-label="Email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            aria-required="true"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            aria-label="Password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            aria-required="true"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" aria-label="Create Account" onClick={submit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
