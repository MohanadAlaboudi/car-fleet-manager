import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="topbarInner">
        <div className="brand">
          <div className="brandMark" aria-hidden="true">🚗</div>
          <div className="brandText">
            <div className="brandTitle">Car Fleet Manager</div>
            <div className="brandSub">Asset Management (Part 1)</div>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
            Home
          </NavLink>
          <NavLink to="/cars" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
            Manage Cars
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}