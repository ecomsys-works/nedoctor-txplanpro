import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const logo = t("header.logo");
  const menu = t("header.menu", { returnObjects: true }) as {
    label: string;
    anchor: string;
  }[];
  const login = t("header.login");

  // Блокировка скролла при открытом канвасе
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // очистка при размонтировании
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

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
        <nav className="hidden md:flex glass rounded-[32px] h-[40px] px-[23px] xl:h-[48px] xl:px-[30px] 3xl:px-[55px] items-center gap-[15px] xl:gap-[25px] 2xl:gap-[30px]">
          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.anchor}`}
              className="text-[14px] xl:text-[18px] leading-[1.2] xl:leading-[1.3] tracking-[-0.04em] font-normal font-inter text-white hover:opacity-75 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Login */}
        <button
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.1)" }}
          className="hidden items-center md:inline-flex cursor-pointer h-[40px] xl:h-[48px] px-[40px] xl:px-[50px] rounded-[100px] font-medium tracking-[-0.04em] text-[18px] xl:text-[20px] transition duration-200 transform bg-gradient-to-br from-white/3 to-white/0 hover:from-white/6 active:scale-95">
          {login}
        </button>

        {/* Mobile Burger in circle */}
        <button
          className="md:hidden flex items-center justify-center w-[42px] h-[42px] cursor-pointer rounded-full text-white border border-white/20 shadow-inner transition"
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
          className="glass w-full cursor-pointer h-[55px] px-6 rounded-[40px] font-medium tracking-[-0.04em] text-[18px] text-white transition duration-200 active:scale-95"
        >
          {login}
        </button>
      </div>
    </header>
  );
}