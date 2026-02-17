import React from "react";
import Modal from "../components/Modal.jsx";
import Toast from "../components/Toast.jsx";
import CarForm from "../components/CarForm.jsx";
import CarTable from "../components/CarTable.jsx";
import {test, expect, vi} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Cars from "../pages/Cars";

test("user can add a new car", () => {
  render(<Cars />);

  fireEvent.click(screen.getByText("+ Add Car"));

  fireEvent.change(screen.getByPlaceholderText(/ABC-1234/i), {
    target: { value: "NEW-9999" },
  });

  fireEvent.change(screen.getByPlaceholderText(/Toyota/i), {
    target: { value: "Honda" },
  });

  fireEvent.change(screen.getByPlaceholderText(/Camry/i), {
    target: { value: "Civic" },
  });

  const yearInput = screen.getByRole("spinbutton");
fireEvent.change(yearInput, { target: { value: "2023" } });

  fireEvent.click(screen.getByText("Save"));

  expect(screen.getByText("NEW-9999")).toBeInTheDocument();
});