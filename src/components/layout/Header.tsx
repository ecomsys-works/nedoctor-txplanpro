import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePopup } from "@/сontext/Popup/usePopup";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import LanguageToggle from "@/ui/LanguageToggle";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { setIsOpen: setIsOpenPopup } = usePopup();  
  const location = useLocation();


  const logo = t("header.logo");
  const menu = t("header.menu", { returnObjects: true }) as {
    label: string;
    anchor: string;
  }[];
  const login = t("header.login");

  useBodyScrollLock(isOpen);
  
  const side = location.pathname === '/' ? "left" : "right";

  return (
    <header className="my-container w-full bg-black text-white relative
    py-[0.625rem] mb-[-0.0625rem] md:py-[0.9375rem]  ">

      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <Link to="/"
          className="text-[1rem] font-bold text-white font-micro xl:text-[1.25rem] "
        >
           <svg className="w-[7.0625rem] h-[0.6875rem] 2xl:w-[8.8125rem] 2xl:h-[0.8125rem]">
              <use href="/icons/sprite/sprite.svg#tx-logo" />
            </svg>
        </Link>

        {/* Desktop Menu */}

        <nav className={`realtive hidden md:flex glass rounded-full items-center  
          ${t('lang') === 'ru' ? `
            px-[1.4375rem] h-[2.5rem]
            md:px-[1.5625rem] md:gap-[0.9375rem] md:ml-[1.25rem] 
            xl:gap-[1.875rem] xl:h-[3rem]
            2xl:ml-[3.25rem] 2xl:px-[2.1875rem] 
            3xl:gap-[2.0625rem] 3xl:ml-[2.5rem] 3xl:px-[3.4375rem] `
            : `
            px-[1.4375rem] h-[2.5rem]
            md:px-[2.5rem] md:gap-[1.25rem] md:ml-[0.9375rem] 
            xl:px-[3.4375rem] xl:gap-[2.0625rem] xl:h-[3rem]
            2xl:ml-[2rem] 2xl:px-[3.4375rem] 
            3xl:ml-[2.375rem] 3xl:xl:px-[3.5rem] 3xl:gap-[2.125rem]`}
        `}>
          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.anchor}`}
              className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal font-inter text-white/90 hover:scale-105 hover:text-white transition
              xl:text-[1.125rem] xl:leading-[1.3] 
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LanguageToggle className={`hidden md:block lang-desk-visible:hidden ${side}-[0rem] top-[3.25rem] z-10`} />

        {/* Desktop Login */}
        <div className="relative hidden md:inline-flex">
          <button
            style={{ boxShadow: "inset 0 0.0625rem 0 rgba(255,255,255,0.1), inset 0 -0.0625rem 0 rgba(255,255,255,0.1)" }}
            className="btn-desk items-center hidden cursor-pointer h-[2.5rem] px-[2.5rem] rounded-[6.25rem] text-[1.125rem] font-medium tracking-[-0.04em] 
           transition duration-300 hover:bg-white hover:text-black active:scale-95 md:inline-flex 
           xl:h-[3rem] xl:px-[3.75rem] xl:text-[1.25rem] xl:min-w-[10.9375rem] "
            onClick={() => setIsOpenPopup(true)}
          >
            {login}
          </button>

          <LanguageToggle className="hidden lang-desk-visible:block right-[9.375rem] xl:right-[12.1875rem]" />
        </div>



        {/* Mobile Burger in circle */}
        <div className="relative md:hidden flex">
          <LanguageToggle className="md:hidden right-[3.125rem]" />
          <button
            className="btn-mob md:hidden flex items-center justify-center w-[2.625rem] h-[2.625rem] cursor-pointer rounded-full text-white"
            onClick={() => setIsOpen(true)}
          >
            <svg className="w-[1.5rem] h-[1.5rem]">
              <use href="/icons/sprite/sprite.svg#burger" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Canvas Menu */}
      <div
        className={`flex flex-col cover-gradient fixed top-0 left-0 h-full w-full z-50 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        px-[0.625rem] pt-5 pb-[4.375rem] 
        sm:px-[1.25rem] sm:pb-[3.125rem] md:hidden `}>
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
        <nav className="overflow-y-auto scrollbar-none flex flex-col flex-1 items-center justify-start 
          pt-[5rem] pb-[6.25rem] gap-[1.875rem] sm:pt-[9.375rem] ">
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
          className="glass w-full cursor-pointer h-[3.4375rem] px-6 rounded-[2.5rem] font-medium tracking-[-0.04em] text-[1.125rem] text-white transition duration-300 active:scale-95 "
          onClick={() => setIsOpenPopup(true)}
        >
          {login}
        </button>
      </div>
    </header>
  );
}