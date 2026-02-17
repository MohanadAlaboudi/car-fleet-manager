import React from "react";
import Navbar from "./Navbar.jsx";

export default function Layout({ children }) {
  return (
    <div className="appShell">
      <Navbar />
      <main className="container">{children}</main>
      <footer className="footer">
        <span>Car Fleet Manager • SE411 Part 1</span>
      </footer>
    </div>
  );
}