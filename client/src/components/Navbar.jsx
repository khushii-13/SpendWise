import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navParent">
      {/* Logo on the left */}
      <div className="navLogo">
        <p>SpendWise</p>
      </div>

      {/* Hamburger on the right */}
      <div className="navHamBurger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* All links in a single container */}
      <div className={`navLinks ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
