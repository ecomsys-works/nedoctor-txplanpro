import { useTranslation } from "react-i18next";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

import { usePopup } from "@/сontext/Popup/usePopup";
import { useEmail } from "@/сontext/Email/useEmail";

import BlackBtn from "@/ui/BlackBtn";

export default function Popup() {
  const { isOpen, setIsOpen } = usePopup();
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
        className={`max-w-[21.25rem] bg-black w-full rounded-[1.5625rem] p-[0.1875rem] 
         ssm:max-w-[39.375rem] ssm:rounded-[2.8125rem] ssm:p-[0.3125rem] 
         mdd:max-w-[51.0625rem] mdd:rounded-[1.875rem]
         2xl:max-w-[81.25rem] 2xl:p-0 2xl:bg-transparent 
         3xl:max-w-[100rem]          
         transform transition-all duration-300 ${isOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-95"}
        `}
      >
        {/* Modal content */}
        <div
          className={`relative w-full flex flex-col gap-[1.5625rem] bg-white rounded-[1.375rem] 
            ssm:gap-[3.125rem] ssm:rounded-[2.8125rem] 
            mdd:gap-[2.5rem] mdd:rounded-[1.625rem] 
            2xl:flex-row 2xl:gap-[0.5625rem] 2xl:bg-black 2xl:rounded-[2.875rem] 2xl:p-[0.5625rem]`}
            >
          {/* Left card */}
          <div className="flex-[1_1_50%] flex items-center justify-center pt-[3.4375rem] bg-white rounded-t-[2.5rem]
          ssm:pt-[5rem] 
          2xl:pt-0 2xl:aspect-[787/652] 2xl:rounded-[2.5rem]"
          >
            <h2
              className={`text-[0.875rem] max-w-[20.8125rem] px-[0.625rem]  mx-auto text-center font-${font} text-black leading-[1] tracking-[-0.05em]
                ssm:text-[1.125rem] 
                2xl:text-[2.5rem] 2xl:max-w-[29.4375rem] 
                3xl:text-[3.4375rem] 3xl:max-w-[38.875rem] 3xl:mb-[1.875rem] 3xl:leading-[0.88]`}
                >
              {title}
            </h2>
          </div>

          {/* Right card */}
          <div className="flex-[1_1_50%] w-full bg-white rounded-[2.8125rem] pb-[0.625rem] px-[0.625rem] 
            ssm:pb-[1.5625rem] ssm:px-[1.5625rem]
            mdd:rounded-[1.875rem] mdd:pb-[1.875rem] md:px-[1.875rem] 
            2xl:rounded-[2.5rem] 2xl:py-[1.875rem] 2xl:aspect-[787/652]">
            <div className="h-full flex flex-col ssm:flex-row 2xl:flex-col justify-center items-center gap-[0.625rem] ssm:gap-[0.1875rem] 2xl:gap-5 2xl:max-w-[31.875rem] mx-auto">
              {/* Input field */}
              <div className="flex items-center gap-[0.625rem] h-[3.4375rem] rounded-[2.5rem] px-6 border border-grey w-full 
                ssm:w-[initial] mdd:w-full
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
              <BlackBtn className="w-[100%] text-[1.125rem] h-[3.4375rem]  px-[1.25rem] rounded-[2.5rem]
                ssm:w-[50%] mdd:w-[initial] 
                2xl:w-full 2xl:text-[1.25rem] 2xl:h-[4.375rem]">
                {buttonText}
              </BlackBtn>
            </div>
          </div>

          {/* Close button */}
          <button
            className="absolute right-6 top-5 text-[#a0a0a0] hover:text-black transition cursor-pointer
              ssm:right-9 ssm:top-7.5 mdd:right-10 
              2xl:right-11 2xl:top-11"
            onClick={() => setIsOpen(false)}
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