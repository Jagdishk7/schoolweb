import React from "react";
import "../register&login/Registration.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function Contact() {

  const [show, setShow] = useState(false);

    const [email, setEmail] = useState("");


    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log("error")
        } else {
            setShow(true);
            setEmail("")
            console.log("Email sent")
        }
    }

  return (
    <>

    
      <div className="login-page">
      <h1 className='page-heading'>Contact Us</h1>
      {
        show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
            Your Email Succesfully Send
        </Alert> : ""
    }
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
            value={email} onChange={(e) => setEmail(e.target.value)}
          />

          <input
            aria-label="Password"
            type="number"
            className="form-control"
            id="password"
            placeholder="Mobile Number"
            aria-required="true"

          />

          <button type="submit" aria-label="Create Account" onClick={sendEmail}>
            Contact Us
          </button>

          <Link to={'https://icoesolution.com/'}>Visit our Official Website</Link>

        </form>
        
      </div>
    </>
  );
}

export default Contact;
