import { useEffect } from "react";

export default function Toast({ message = "", type = "info", onClose, duration = 2200 }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => {
      if (typeof onClose === "function") onClose();
    }, duration);

    return () => clearTimeout(t);
  }, [message, duration, onClose]);

  if (!message) return null;

  const className = 'toast toast-${type}';

  return (
    <div className={className} role="status" aria-live="polite">
      <span>{message}</span>
      <button
        type="button"
        className="toastClose"
        onClick={() => (typeof onClose === "function" ? onClose() : null)}
        aria-label="Close toast"
      >
        ✕
      </button>
    </div>
  );
}