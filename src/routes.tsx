import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import { Room } from "./pages/room";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/room/:name" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}
