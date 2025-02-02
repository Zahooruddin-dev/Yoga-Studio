import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <div className="nav-logo">
          <a className="navbar-brand" href="#">
          Yoga Studio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div className="nav-centre">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#benefits">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-links">
          <a href=""><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
