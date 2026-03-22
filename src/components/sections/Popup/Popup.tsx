import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

import { usePopup } from "@/сontext/Popup/usePopup";
import { useEmail } from "@/сontext/Email/useEmail";

import BlackBtn from "@/ui/BlackBtn";

// Время жизни записи в localStorage (миллисекунды)
const EMAIL_LOCK_DURATION = 3 * 60 * 1000; // 3 минуты
const EMAIL_LOCK_KEY = "PXsentEmails";

// Проверяем, можно ли отправить e-mail
const canSendEmail = (email: string) => {
  const sentData: Record<string, number> = JSON.parse(localStorage.getItem(EMAIL_LOCK_KEY) || "{}");
  const now = Date.now();
  if (sentData[email] && now - sentData[email] < EMAIL_LOCK_DURATION) return false;
  return true;
};

// Помечаем e-mail как отправленный
const markEmailSent = (email: string) => {
  const sentData: Record<string, number> = JSON.parse(localStorage.getItem(EMAIL_LOCK_KEY) || "{}");
  sentData[email] = Date.now();
  localStorage.setItem(EMAIL_LOCK_KEY, JSON.stringify(sentData));
};

// Минимальная валидация e-mail
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
};

export default function Popup() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { isOpen, setIsOpen, tariff, setTariff } = usePopup();
  const { email, setEmail } = useEmail();
  const { t } = useTranslation();

  const title = t("popup.title");
  const placeholder = t("popup.placeholder");
  const buttonText = t("popup.buttonText");
  const font = t("popup.font");

  useBodyScrollLock(isOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (plan: string | null = null) => {
    //  Проверка e-mail
    if (!email || !validateEmail(email)) {
      alert(t("popup.emailError") || "Введите корректный e-mail");
      return;
    }

    //  Проверка на повторную отправку
    if (!canSendEmail(email)) {
      alert(t("popup.alreadySent") || "Вы уже отправляли запрос. Попробуйте позже.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("_form_id", import.meta.env.VITE_FORM_ID);
      formData.append("email", email);
      if (plan) formData.append("plan", plan);

      await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        body: formData
      });

      setSuccess(true);
      markEmailSent(email); // помечаем как отправленное
      setEmail("");
    } catch (err) {
      console.error(err);
      alert(t("popup.sendError") || "Ошибка отправки. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <section
      className={`
        popup fixed inset-0 z-50 flex items-center justify-center p-[0.625rem]
        transition-all duration-300 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
         ssm:p-5
      `}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-[0.125rem] transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal wrapper */}
      <div
        className={`bg-black w-full 
         max-w-[21.25rem] rounded-[1.5625rem] p-[0.1875rem] 
         xs:max-w-[39.375rem] xs:rounded-[2.8125rem] xs:p-[0.3125rem] 
         md:max-w-[51.0625rem] 
         2xl:max-w-[81.25rem] 2xl:p-0 2xl:bg-transparent 
         3xl:max-w-[100rem]          
         transform transition-all duration-300 ${isOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-95"}
        `}
      >
        {/* Modal content */}
        <div
          className={`relative w-full flex flex-col bg-white 
            gap-[1.875rem] rounded-[1.375rem] 
            xs:gap-[3.75rem] xs:rounded-[2.8125rem] 
            md:gap-[3.125rem] 
            2xl:flex-row 2xl:gap-[0.5625rem] 2xl:bg-black 2xl:p-[0.5625rem]`}
        >
          {/* Left card */}
          <div className={`flex-[1_1_50%] flex items-center justify-center bg-white rounded-t-[2.5rem]
           xs:pt-[5rem] 
           md:rounded-[2.5rem] 
           2xl:pt-0 2xl:aspect-[787/652] ${t('lang') === 'ru' ? `pt-[3.125rem]` : `pt-[2.8125rem]`}`}
          >
            <h2
              className={`mx-auto text-center text-black font-${font}         
                ${t('lang') === 'ru' ?
                  `max-w-[16.625rem] px-[0.625rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em]
                 xs:max-w-[21rem] xs:leading-[1.2] xs:text-[1.125rem] 
                 md:max-w-[20.8125rem] 
                 lg:max-w-[23.8125rem] lg:text-[1.875rem] 
                 2xl:max-w-[27.5625rem] 2xl:text-[2.5rem] 2xl:leading-[1] 2xl:tracking-[-0.05em]
                 3xl:max-w-[38.875rem] 3xl:text-[3.4375rem] 3xl:mb-[1.875rem] 3xl:leading-[1]
                `
                  :
                  `max-w-[11.5625rem] px-[0.625rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em]
                 xs:max-w-[15.75rem] xs:leading-[1] xs:text-[1.125rem]  
                 md:max-w-[16.375rem]
                 lg:max-w-[23.1875rem] lg:text-[1.875rem] 
                 2xl:max-w-[21.25rem] 2xl:text-[2.8125rem] 2xl:leading-[0.9] 2xl:tracking-[-0.05em]
                 3xl:max-w-[26.1875rem] 3xl:text-[3.4375rem] 3xl:leading-[0.95]`}
                `}
            >
              {title}
            </h2>
          </div>

          {/* Right card */}
          <div className="flex-[1_1_50%] w-full bg-white 
            pb-[0.625rem] px-[0.625rem] rounded-[2.8125rem] 
            xs:pb-[1.875rem] xs:px-[1.5625rem] xs:rounded-[2.5rem]
            md:px-[1.875rem] 
            2xl:py-[1.875rem] 2xl:aspect-[787/652]">
            <div className="h-full flex flex-col ssm:flex-row 2xl:flex-col justify-center items-center gap-[0.625rem] ssm:gap-[0.1875rem] 2xl:gap-5 2xl:max-w-[31.875rem] mx-auto">
              {/* Input field */}
              <div className="flex items-center gap-[0.625rem] h-[3.4375rem] rounded-[2.5rem] px-6 border border-grey w-full 
                xs:w-[initial] xs:w-full
                2xl:gap-[1.5625rem] 2xl:h-[4.375rem] ">
                <div className="w-[0.625rem] h-[0.625rem] 2xl:w-4 2xl:h-4 rounded-full bg-orange" />
                <input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-[0.875rem] tracking-[-0.04em] text-black placeholder-grey outline-none focus:outline-blue-300 2xl:text-[1.125rem] "
                />
              </div>

              {/* Submit button */}
              <BlackBtn
                disabled={loading}
                onClick={() => handleSubmit(tariff)}
                className={`h-[3.4375rem] text-[1.125rem] px-[1.25rem] rounded-[2.5rem]                 
              2xl:w-full 2xl:text-[1.25rem] 2xl:h-[4.375rem]
                ${t('lang') === 'ru' ?
                    `w-full self-stretch 
                  xs:w-[initial] xs:min-w-[18.0625rem]
                  ${loading && "hover:!bg-black !text-white"}
                  `
                    :
                    `w-full self-stretch 
                  xs:w-[initial] xs:min-w-[13.625rem]
                  ${loading && "hover:!bg-black !text-white"}
                  `}
                `}>
                <span className={`${loading && "animate-pulse "}`}>
                  {loading ? t('form.process') : success ? t('form.ok') : buttonText}</span>
              </BlackBtn>
            </div>
          </div>

          {/* Close button */}
          <button
            className="absolute right-6 top-5 text-[#a0a0a0] hover:text-black transition cursor-pointer
              xs:right-9 xs:top-7.5 md:right-10 
              2xl:right-11 2xl:top-11"
            onClick={() => {
              setTariff("");
              setIsOpen(false)
            }}
          >
            <svg className="w-[1.125rem] h-[1.125rem] 2xl:w-[1.375rem] 2xl:h-[1.375rem]">
              <use href="/icons/sprite/sprite.svg#close" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}