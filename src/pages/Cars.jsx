import { useMemo, useState } from "react";
import Modal from "../components/Modal.jsx";
import Toast from "../components/Toast.jsx";
import CarForm from "../components/CarForm.jsx";
import CarTable from "../components/CarTable.jsx";

const STATUS_OPTIONS = ["All", "Available", "In Service", "Rented", "Out of Order"];

function nextId(cars) {
  return cars.length ? Math.max(...cars.map((c) => c.id)) + 1 : 1;
}

export default function Cars() {
  const [cars, setCars] = useState([
    { id: 1, plateNumber: "ABC-1234", brand: "Toyota", model: "Camry", year: 2022, status: "Available" },
    { id: 2, plateNumber: "KSA-7788", brand: "Hyundai", model: "Elantra", year: 2021, status: "In Service" },
  ]);

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [toast, setToast] = useState({ message: "", type: "info" });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return cars.filter((c) => {
      const matchesText =
        !q ||
        String(c.plateNumber).toLowerCase().includes(q) ||
        String(c.brand).toLowerCase().includes(q) ||
        String(c.model).toLowerCase().includes(q);

      const matchesStatus = status === "All" ? true : c.status === status;

      return matchesText && matchesStatus;
    });
  }, [cars, query, status]);

  function openAdd() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(car) {
    setEditing(car);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditing(null);
  }

  function saveCar(payload) {
    setCars((prev) => {
      if (editing) {
        return prev.map((c) => (c.id === editing.id ? { ...c, ...payload } : c));
      }
      const newCar = { id: nextId(prev), ...payload };
      return [newCar, ...prev];
    });

    setToast({
      message: editing ? "Car updated successfully." : "Car added successfully.",
      type: "success",
    });

    closeModal();
  }

  function deleteCar(car) {
    const ok = window.confirm(`Delete ${car.plateNumber}?`);
    if (!ok) return;

    setCars((prev) => prev.filter((c) => c.id !== car.id));
    setToast({ message: "Car deleted.", type: "info" });
  }

  const total = cars.length;
  const available = cars.filter((c) => c.status === "Available").length;

  return (
    <div className="page">
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "info" })}
      />

      <div className="pageHeader">
        <div>
          <h1>Fleet</h1>
          <p className="muted">Manage cars (Part 1: in-memory collection).</p>
        </div>
        <button type="button" className="button" onClick={openAdd}>
          + Add Car
        </button>
      </div>

      <div className="statsRow">
        <div className="stat">
          <div className="statLabel">Total Cars</div>
          <div className="statValue">{total}</div>
        </div>
        <div className="stat">
          <div className="statLabel">Available</div>
          <div className="statValue">{available}</div>
        </div>
      </div>

      <div className="controls">
        <div className="control">
          <label>Search</label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Plate, brand, model..."
          />
        </div>

        <div className="control">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="control controlRight">
          <div className="muted smallText">{filtered.length} result(s)</div>
        </div>
      </div>

      <CarTable cars={filtered} onEdit={openEdit} onDelete={deleteCar} />

      <Modal
        title={editing ? `Edit Car • ${editing.plateNumber}` : "Add Car"}
        open={modalOpen}
        onClose={closeModal}
      >
        <CarForm
          initialValue={
            editing
              ? {
                  plateNumber: editing.plateNumber,
                  brand: editing.brand,
                  model: editing.model,
                  year: editing.year,
                  status: editing.status,
                }
              : null
          }
          onCancel={closeModal}
          onSubmit={saveCar}
        />
      </Modal>
    </div>
  );
}