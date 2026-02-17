import React from "react";

function badgeClass(status) {
  switch (status) {
    case "Available": return "badge badge-green";
    case "In Service": return "badge badge-blue";
    case "Rented": return "badge badge-amber";
    case "Out of Order": return "badge badge-red";
    default: return "badge";
  }
}

export default function CarTable({ cars, onEdit, onDelete }) {
  if (!cars.length) {
    return (
      <div className="emptyState">
        <div className="emptyIcon">🗂️</div>
        <div className="emptyTitle">No cars found</div>
        <div className="emptySub">Try adding a car or adjusting filters.</div>
      </div>
    );
  }

  return (
    <div className="tableCard">
      <table className="table">
        <thead>
          <tr>
            <th>Plate</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Status</th>
            <th className="right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((c) => (
            <tr key={c.id}>
              <td className="mono">{c.plateNumber}</td>
              <td>{c.brand}</td>
              <td>{c.model}</td>
              <td>{c.year}</td>
              <td><span className={badgeClass(c.status)}>{c.status}</span></td>
              <td className="right">
                <button className="button small secondary" onClick={() => onEdit?.(c)}>Edit</button>
                <button className="button small danger" onClick={() => onDelete?.(c)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

