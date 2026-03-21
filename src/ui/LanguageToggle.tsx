import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function LanguageToggle({ className = "" }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "ru");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  // (фикс рассинхрона)
  useEffect(() => {
    const handleLangChange = (lng:string) => {
      setLang(lng);
    };

    i18n.on("languageChanged", handleLangChange);

    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, [i18n]);

  const isRu = lang === "ru";

  return (
    <div
      className={`langtoggle-btn absolute top-0 w-[6.5625rem] xl:w-[8.4375rem] h-[2.5rem] p-[0.25rem] rounded-full flex items-center cursor-pointer
      xl:h-[3rem]
      ${className}
      `}
      onClick={() => setLang(isRu ? "en" : "ru")}
    >
      {/* Labels */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 flex items-center justify-center">
          <span
            className={`text-[1.25rem] tracking-[-0.04em] font-medium transition-colors ${
              !isRu ? "text-black" : "text-white"
            }`}
          >
            En
          </span>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <span
            className={`text-[1.25rem] tracking-[-0.04em] font-medium transition-colors ${
              isRu ? "text-black" : "text-white"
            }`}
          >
            Ru
          </span>
        </div>
      </div>

      {/* Toggle Circle */}
      <div
        className={`absolute top-1 transition-all duration-300 ease-in-out
          w-[2.8125rem] xl:w-[3.75rem] h-[2rem] rounded-full bg-white flex items-center justify-center xl:h-[2.5rem]          
          ${isRu ? "left-[calc(100%-3.125rem)] xl:left-[calc(100%-4.0625rem)]" : "left-[0.3125rem]"}
        `}
      >
        <span className="text-[1.25rem] font-medium tracking-[-0.04em] text-black">
          {isRu ? "Ru" : "En"}
        </span>
      </div>
    </div>
  );
}