// src/app/providers/router/AppRouter.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "@/pages/Home";

export const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

};
