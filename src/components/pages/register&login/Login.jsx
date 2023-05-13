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
      await axios.post("/login", { email, password })
      .then(resp=>{
        if(resp.data==='exist'){
            alert('You Already have account')
        }
        else if(resp.data==='notexist'){
            alert('Please make an account')
        }
      })
      .catch((e)=>{
        alert('Axios error')
        console.log(e)
      })
    } 
    catch (e) {
        console.log(e)
    }
  }

  return (
    <>
      <div className="login-page">
        <form action="POST" className="form">
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
