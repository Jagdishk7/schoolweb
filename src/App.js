import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScroll from "./components/navbar/NavScroll";

import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import About from "./components/pages/About/About";
// import Registration from "./components/pages/register&login/Registration";
import Register from "./components/pages/register&login/Register";
import Login from "./components/pages/register&login/Login";

function App() {
  return (
    <>
    <NavScroll />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
