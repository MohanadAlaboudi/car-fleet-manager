import React from "react";
import Modal from "../components/Modal.jsx";
import Toast from "../components/Toast.jsx";
import CarForm from "../components/CarForm.jsx";
import CarTable from "../components/CarTable.jsx";
import {test, expect, vi} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Cars from "../pages/Cars";

test("user can delete a car", () => {
  globalThis.confirm = vi.fn(() => true); // mock confirmation

  render(<Cars />);

  const deleteButtons = screen.getAllByText("Delete");
  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText("ABC-1234")).not.toBeInTheDocument();
});