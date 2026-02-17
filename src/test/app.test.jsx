import React from "react";
import Modal from "../components/Modal.jsx";
import Toast from "../components/Toast.jsx";
import CarForm from "../components/CarForm.jsx";
import CarTable from "../components/CarTable.jsx";
import {test, expect, vi} from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("renders navigation menu", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

 expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Manage Cars/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
}); 