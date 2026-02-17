import { useMemo, useState } from "react";

const STATUS_OPTIONS = ["Available", "In Service", "Rented", "Out of Order"];

function validate(values) {
  const errors = {};

  if (!values.plateNumber || !values.plateNumber.trim()) errors.plateNumber = "Plate number is required.";
  if (!values.brand || !values.brand.trim()) errors.brand = "Brand is required.";
  if (!values.model || !values.model.trim()) errors.model = "Model is required.";

  const year = Number(values.year);
  const currentYear = new Date().getFullYear();
  if (!Number.isFinite(year) || year < 1990 || year > currentYear + 1) {
    errors.year = `Year must be between 1990 and ${currentYear + 1}.`;
  }

  if (!STATUS_OPTIONS.includes(values.status)) errors.status = "Status is invalid.";

  return errors;
}

export default function CarForm({ initialValue = null, onCancel, onSubmit }) {
  const initial = useMemo(() => {
    return (
      initialValue || {
        plateNumber: "",
        brand: "",
        model: "",
        year: new Date().getFullYear(),
        status: "Available",
      }
    );
  }, [initialValue]);

  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState({});

  const errors = validate(values);
  const hasErrors = Object.keys(errors).length > 0;

  function setField(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function markTouched(name) {
    setTouched((t) => ({ ...t, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ plateNumber: true, brand: true, model: true, year: true, status: true });

    const finalErrors = validate(values);
    if (Object.keys(finalErrors).length > 0) return;

    if (typeof onSubmit === "function") {
      onSubmit({
        ...values,
        year: Number(values.year),
      });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formGrid">
        <div className="field">
          <label>Plate Number</label>
          <input
            value={values.plateNumber}
            onChange={(e) => setField("plateNumber", e.target.value)}
            onBlur={() => markTouched("plateNumber")}
            placeholder="e.g. ABC-1234"
          />
          {touched.plateNumber && errors.plateNumber ? <div className="error">{errors.plateNumber}</div> : null}
        </div>

        <div className="field">
          <label>Status</label>
          <select
            value={values.status}
            onChange={(e) => setField("status", e.target.value)}
            onBlur={() => markTouched("status")}
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {touched.status && errors.status ? <div className="error">{errors.status}</div> : null}
        </div>

        <div className="field">
          <label>Brand</label>
          <input
            value={values.brand}
            onChange={(e) => setField("brand", e.target.value)}
            onBlur={() => markTouched("brand")}
            placeholder="e.g. Toyota"
          />
          {touched.brand && errors.brand ? <div className="error">{errors.brand}</div> : null}
        </div>

        <div className="field">
          <label>Model</label>
          <input
            value={values.model}
            onChange={(e) => setField("model", e.target.value)}
            onBlur={() => markTouched("model")}
            placeholder="e.g. Camry"
          />
          {touched.model && errors.model ? <div className="error">{errors.model}</div> : null}
        </div>

        <div className="field">
          <label>Year</label>
          <input
            type="number"
            value={values.year}
            onChange={(e) => setField("year", e.target.value)}
            onBlur={() => markTouched("year")}
          />
          {touched.year && errors.year ? <div className="error">{errors.year}</div> : null}
        </div>
      </div>

      <div className="formActions">
        <button type="button" className="button secondary" onClick={() => (typeof onCancel === "function" ? onCancel() : null)}>
          Cancel
        </button>
        <button type="submit" className="button" disabled={hasErrors}>
          Save
        </button>
      </div>
    </form>
  );
}