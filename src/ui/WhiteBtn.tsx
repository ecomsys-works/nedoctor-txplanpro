import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function WhiteBtn({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`text-black duration-200 active:scale-95 flex items-center justify-center bg-white hover:scale-102 transition cursor-pointer whitespace-nowrap ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}