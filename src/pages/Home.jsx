import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Manage your fleet with clarity</h1>
        <p>
          Add, edit, delete and track car status — all in a simple React application (Part 1: in-memory data).
        </p>
        <div className="heroActions">
          <Link className="button" to="/cars">Go to Fleet</Link>
          <Link className="button secondary" to="/about">Team</Link>
        </div>
      </div>

      <div className="grid3">
        <div className="card">
          <div className="cardTitle">CRUD</div>
          <div className="cardBody">Create, Read, Update and Delete car records.</div>
        </div>
        <div className="card">
          <div className="cardTitle">Filters</div>
          <div className="cardBody">Search by plate/brand/model and filter by status.</div>
        </div>
        <div className="card">
          <div className="cardTitle">Part 2 Ready</div>
          <div className="cardBody">UI structure prepared for backend integration.</div>
        </div>
      </div>
    </div>
  );
}
