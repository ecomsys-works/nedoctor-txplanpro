import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BlackBtn({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`text-white duration-200 active:scale-95 flex items-center justify-center bg-black hover:bg-white hover:text-black hover:border-black border-white border transition cursor-pointer whitespace-nowrap ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}