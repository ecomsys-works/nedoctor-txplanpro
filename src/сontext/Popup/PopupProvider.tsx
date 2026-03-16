import { useState, type ReactNode } from "react";
import { PopupContext } from "./PopupContext";

type PopupProviderProps = { children: ReactNode };

export function PopupProvider({ children }: PopupProviderProps) {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <PopupContext.Provider
      value={{isOpen, setIsOpen}}>
      {children}
    </PopupContext.Provider>
  );
}

