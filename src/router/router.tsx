// src/app/providers/router/AppRouter.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Privacy } from "@/pages/Privacy";

export const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

};
