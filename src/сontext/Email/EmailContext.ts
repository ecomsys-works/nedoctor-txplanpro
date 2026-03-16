import { createContext } from "react";

export type EmailContextType = {
  email: string;
  setEmail: (email: string) => void;
};

export const EmailContext = createContext<EmailContextType>({
  email: "",
  setEmail: () => {}
});