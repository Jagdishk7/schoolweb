import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScroll from "./components/navbar/NavScroll";

import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import About from "./components/pages/About/About";
import Register from "./components/pages/register&login/Register";
import Login from "./components/pages/register&login/Login";
import AllSchools from "./components/pages/allSchools/AllSchools";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <>
    <NavScroll />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/allschools" element={<AllSchools/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
