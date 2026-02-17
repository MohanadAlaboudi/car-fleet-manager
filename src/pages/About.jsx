import React from "react";

export default function About() {
  return (
    <div className="page">
      <div className="pageHeader">
        <div>
          <h1>About</h1>
          <p className="muted">Team members (Name + Student ID).</p>
        </div>
      </div>

      <div className="card">
        <div className="cardBody">
          <ul className="aboutList">
            <li><strong>Mohammad Alammar</strong> — <span className="mono">ID: 221110530</span></li>
            <li><strong>Saad Alrumaih</strong> — <span className="mono">ID: 220110310</span></li>
            <li><strong>Mohammad Alahmadi</strong> — <span className="mono">ID: 221110029</span></li>
            <li><strong>Mohanad Alaboudi</strong> — <span className="mono">ID: 221110940</span></li>
            <li><strong>Turki Almarri</strong> — <span className="mono">ID: 222211579</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
