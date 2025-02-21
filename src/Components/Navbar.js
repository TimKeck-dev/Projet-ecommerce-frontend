import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <button className="btn btn-link">Home</button>
        <span className="navbar-text">Running Gear</span>
        <button className="btn btn-link">
          <i className="bi bi-cart"></i> {/* Icône panier */}
        </button>
      </div>
    </nav>
  );
};


export default Navbar;
