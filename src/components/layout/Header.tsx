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
    <header className="my-container py-[10px] sm:py-[15px] w-full bg-black text-white relative mb-[-1px]">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-[16px] xl:text-[20px] font-bold text-white font-micro transition"
        >
          {logo}
        </a>

        {/* Desktop Menu */}
        <nav className={`hidden glass rounded-full h-[40px] px-[23px] items-center gap-[15px]
        md:flex xl:h-[48px] 3xl:xl:px-[55px] 3xl:gap-[33px]
          ${t('lang') === 'ru' ? "md:px-[25px] md:gap-[15px] md:ml-[20px] 2xl:ml-[50px] 2xl:px-[35px] xl:gap-[30px] " : 
            "md:ml-[30px] xl:px-[55px] xl:gap-[33px]"}
        `}>
          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.anchor}`}
              className="text-[14px] leading-[1.2] tracking-[-0.04em] font-normal font-inter text-white/90 hover:opacity-75 transition
              xl:text-[18px] xl:leading-[1.3] 
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Login */}
        <button
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.1)" }}
          className="btn-desk hidden items-center cursor-pointer h-[40px] px-[40px] rounded-[100px] text-[18px] font-medium tracking-[-0.04em] 
           transition duration-300 hover:bg-white hover:text-black active:scale-95 md:inline-flex 
           xl:h-[48px] xl:px-[60px] xl:text-[20px]"
          onClick={() => setIsOpenPopup(true)}
        >
          {login}
        </button>

        {/* Mobile Burger in circle */}
        <button
          className="btn-mob md:hidden flex items-center justify-center w-[42px] h-[42px] cursor-pointer rounded-full text-white"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-[24px] h-[24px]">
            <use href="/icons/sprite/sprite.svg#burger" />
          </svg>
        </button>
      </div>

      {/* Mobile Canvas Menu */}
      <div
        className={`cover-gradient px-[10px] sm:px-[20px] pt-5 pb-[70px] sm:pb-[50px] fixed top-0 left-0 h-full w-full z-50
  transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} md:hidden flex flex-col`}>
        {/* Header inside canvas */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-[16px] font-bold text-white font-micro">
            {logo}
          </span>

          {/* Close button */}
          <button
            className="text-white hover:text-white/75 transition cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-[18px] h-[18px]">
              <use href="/icons/sprite/sprite.svg#close" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <nav className="overflow-y-auto scrollbar-none flex flex-col items-center justify-start pt-[80px] sm:pt-[150px] pb-[100px] gap-[30px] flex-1">
          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.anchor}`}
              className="leading-[1] tracking-[-0.06em] text-white text-[25px] font-inter text-center hover:opacity-75 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Login button full width */}
        <button
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(255,255,255,0.25)" }}
          className="glass w-full cursor-pointer h-[55px] px-6 rounded-[40px] font-medium tracking-[-0.04em] text-[18px] text-white transition duration-300 active:scale-95 "
          onClick={() => setIsOpenPopup(true)}
        >
          {login}
        </button>
      </div>
    </header>
  );
}