import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css"; // ✅ Import the CSS file
import BPSMV_logo from "../assets/Bpsmv_logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="logo">
          <img className="logo-img" src={BPSMV_logo} alt="BPS logo" /><span>Tarang</span></div>

        {/* navbar list */}
        <div className="nav-lists">
            <ul className="ul-list">
                <li className="list">Home</li>
                <li className="list">About</li>
                <li className="list">Gallery</li>
                <li className="list">Contact</li>
            </ul>
        </div>

        {/* Desktop Links */}
        {/* <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="nav-item" onClick={() => setIsOpen(false)}>
            Contact
          </Link> */}

          {/* Profile Picture */}
          {/* <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-pic"
          />
        </div> */}

        {/* Hamburger (mobile) */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

