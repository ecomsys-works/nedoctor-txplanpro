import { useState, type ReactNode } from "react";
import { PopupContext } from "./PopupContext";

type PopupProviderProps = { children: ReactNode };

export function PopupProvider({ children }: PopupProviderProps) {
  const [isOpen, setIsOpen] = useState(false);  
  const [tariff, setTariff] = useState("Starter"); // правильное имя

  return (
    <PopupContext.Provider
      value={{ isOpen, setIsOpen, tariff, setTariff }} // исправлено
    >
      {children}
    </PopupContext.Provider>
  );
}