import React from "react";
import Modal from "../components/Modal.jsx";
import Toast from "../components/Toast.jsx";
import CarForm from "../components/CarForm.jsx";
import CarTable from "../components/CarTable.jsx";
import {test, expect, vi} from "vitest";
import { render, screen } from "@testing-library/react";
import Cars from "../pages/Cars";

test("renders initial car list", () => {
  render(<Cars />);

  expect(screen.getByText(/Fleet/i)).toBeInTheDocument();
  expect(screen.getByText("ABC-1234")).toBeInTheDocument();
  expect(screen.getByText("Toyota")).toBeInTheDocument();
});
