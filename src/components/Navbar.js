import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
            
        </div>

        <div className="nav-title">CanadaCourrier</div>

        <div className="nav-links">
          <a href="#about">About Us</a>
          <a href="#howitworks">Ship</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
);
}
