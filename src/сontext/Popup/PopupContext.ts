import { createContext } from "react";

export type PopupContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  tariff: string;      // исправлено
  setTariff: (tariff: string) => void; // исправлено
};

export const PopupContext = createContext<PopupContextType>({
  isOpen: false,
  setIsOpen: () => {},
  tariff: "",        // исправлено
  setTariff: () => {} // исправлено
});