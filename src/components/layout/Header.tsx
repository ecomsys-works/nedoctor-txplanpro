import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePopup } from "@/сontext/Popup/usePopup";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { setIsOpen: setIsOpenPopup } = usePopup();

  const logo = t("header.logo");
  const menu = t("header.menu", { returnObjects: true }) as {
    label: string;
    anchor: string;
  }[];
  const login = t("header.login");

  useBodyScrollLock(isOpen);
  return (
    <header className="my-container py-[0.625rem] sm:py-[0.9375rem] w-full bg-black text-white relative mb-[-0.0625rem]">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-[1rem] xl:text-[1.25rem] font-bold text-white font-micro transition"
        >
          {logo}
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex glass rounded-[2rem] h-[2.5rem] px-[1.4375rem] xl:h-[3rem] xl:px-[1.875rem] 3xl:px-[3.4375rem] items-center gap-[0.9375rem] xl:gap-[1.5625rem] 2xl:gap-[1.875rem]">
          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.anchor}`}
              className="text-[0.875rem] xl:text-[1.125rem] leading-[1.2] xl:leading-[1.3] tracking-[-0.04em] font-normal font-inter text-white hover:opacity-75 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Login */}
        <button
          style={{ boxShadow: "inset 0 0.0625rem 0 rgba(255,255,255,0.1), inset 0 -0.0625rem 0 rgba(255,255,255,0.1)" }}
          className="btn-desk hidden items-center cursor-pointer h-[2.5rem] px-[2.5rem] rounded-[6.25rem] text-[1.125rem] font-medium tracking-[-0.04em] 
           transition duration-300 hover:scale-105 active:scale-95 md:inline-flex xl:h-[3rem] xl:px-[3.125rem] xl:text-[1.25rem]"
          onClick={() => setIsOpenPopup(true)}
        >
          {login}
        </button>

        {/* Mobile Burger in circle */}
        <button
          className="btn-mob md:hidden flex items-center justify-center w-[2.625rem] h-[2.625rem] cursor-pointer rounded-full text-white"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-[1.5rem] h-[1.5rem]">
            <use href="/icons/sprite/sprite.svg#burger" />
          </svg>
        </button>
      </div>

      {/* Mobile Canvas Menu */}
      <div
        className={`cover-gradient px-[0.625rem] sm:px-[1.25rem] pt-5 pb-[4.375rem] sm:pb-[3.125rem] fixed top-0 left-0 h-full w-full z-50
  transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} md:hidden flex flex-col`}>
        {/* Header inside canvas */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-[1rem] font-bold text-white font-micro">
            {logo}
          </span>

          {/* Close button */}
          <button
            className="text-white hover:text-white/75 transition cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-[1.125rem] h-[1.125rem]">
              <use href="/icons/sprite/sprite.svg#close" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <nav className="overflow-y-auto scrollbar-none flex flex-col items-center justify-start pt-[5rem] sm:pt-[9.375rem] pb-[6.25rem] gap-[1.875rem] flex-1">
          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.anchor}`}
              className="leading-[1] tracking-[-0.06em] text-white text-[1.5625rem] font-inter text-center hover:opacity-75 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Login button full width */}
        <button
          style={{ boxShadow: "inset 0 0.0625rem 0 rgba(255,255,255,0.25), inset 0 -0.0625rem 0 rgba(255,255,255,0.25)" }}
          className="glass w-full cursor-pointer h-[3.4375rem] px-6 rounded-[2.5rem] font-medium tracking-[-0.04em] text-[1.125rem] text-white transition duration-300 hover:scale-102 active:scale-95 "
          onClick={() => setIsOpenPopup(true)}
        >
          {login}
        </button>
      </div>
    </header>
  );
}