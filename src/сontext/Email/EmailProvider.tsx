import { useState, type ReactNode } from "react";
import { EmailContext } from "./EmailContext";


type EmailProviderProps = { children: ReactNode };

export function EmailProvider({ children }: EmailProviderProps) {

    const [email, setEmail] = useState("");

    return (
        <EmailContext.Provider value={{ email, setEmail }}>
            {children}
        </EmailContext.Provider>
    );
}