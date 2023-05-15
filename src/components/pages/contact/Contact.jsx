import React from "react";
import "../register&login/Registration.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {


  return (
    <>
      <div className="login-page">
      <h1 className='page-heading'>Contact Us</h1>
        <form action="POST" className="form">
          <input
            aria-label="Email"
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter Full Name"
            aria-required="true"
          />
          <input
            aria-label="Email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            aria-required="true"
          />

          <input
            aria-label="Password"
            type="number"
            className="form-control"
            id="password"
            placeholder="Mobile Number"
            aria-required="true"

          />

          <button type="submit" aria-label="Create Account">
            Contact Us
          </button>

          <Link to={'https://icoesolution.com/'}>Visit our Official Website</Link>

        </form>
      </div>
    </>
  );
}

export default Login;
