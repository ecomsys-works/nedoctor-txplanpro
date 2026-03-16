import { createContext } from "react";

export type PopupContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const PopupContext = createContext<PopupContextType>({
    isOpen: false,
    setIsOpen: () => { },
});