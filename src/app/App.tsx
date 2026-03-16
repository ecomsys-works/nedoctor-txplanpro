// src/app/App.tsx
import { useEffect } from "react";
import React from "react";
import { AppRouter } from "../router/router";
import autoREM from "@/utils/autoRem";

export const App: React.FC = () => {

  useEffect(() => {
    const cleanup = autoREM(1920, 16);

    return cleanup;
  }, []);

  return (
    <AppRouter />
  );
};
