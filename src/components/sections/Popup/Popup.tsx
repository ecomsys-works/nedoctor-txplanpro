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
        popup fixed inset-0 z-50 flex items-center justify-center p-[10px]
        transition-all duration-300 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
         ssm:p-5
      `}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal wrapper */}
      <div
        className={`max-w-[340px] bg-black w-full rounded-[25px] p-[3px] 
         ssm:max-w-[630px] ssm:rounded-[45px] ssm:p-[5px] 
         mdd:max-w-[817px] mdd:rounded-[30px]
         2xl:max-w-[1300px] 2xl:p-0 2xl:bg-transparent 
         3xl:max-w-[1600px]          
         transform transition-all duration-300 ${isOpen ? "translate-y-0 scale-100" : "translate-y-6 scale-95"}
        `}
      >
        {/* Modal content */}
        <div
          className={`relative w-full flex flex-col gap-[25px] bg-white rounded-[22px] 
            ssm:gap-[50px] ssm:rounded-[45px] 
            mdd:gap-[40px] mdd:rounded-[26px] 
            2xl:flex-row 2xl:gap-[9px] 2xl:bg-black 2xl:rounded-[46px] 2xl:p-[9px]`}
            >
          {/* Left card */}
          <div className="flex-[1_1_50%] flex items-center justify-center pt-[55px] bg-white rounded-t-[40px]
          ssm:pt-[80px] 
          2xl:pt-0 2xl:aspect-[787/652] 2xl:rounded-[40px]"
          >
            <h2
              className={`text-[14px] max-w-[333px] px-[10px]  mx-auto text-center font-${font} text-black leading-[1] tracking-[-0.05em]
                ssm:text-[18px] 
                2xl:text-[40px] 2xl:max-w-[471px] 
                3xl:text-[55px] 3xl:max-w-[622px] 3xl:mb-[30px] 3xl:leading-[0.88]`}
                >
              {title}
            </h2>
          </div>

          {/* Right card */}
          <div className="flex-[1_1_50%] w-full bg-white rounded-[45px] pb-[10px] px-[10px] 
            ssm:pb-[25px] ssm:px-[25px]
            mdd:rounded-[30px] mdd:pb-[30px] md:px-[30px] 
            2xl:rounded-[40px] 2xl:py-[30px] 2xl:aspect-[787/652]">
            <div className="h-full flex flex-col ssm:flex-row 2xl:flex-col justify-center items-center gap-[10px] ssm:gap-[3px] 2xl:gap-5 2xl:max-w-[510px] mx-auto">
              {/* Input field */}
              <div className="flex items-center gap-[10px] h-[55px] rounded-[40px] px-6 border border-grey w-full 
                ssm:w-[initial] mdd:w-full
                2xl:gap-[25px] 2xl:h-[70px] ">
                <div className="w-[10px] h-[10px] 2xl:w-4 2xl:h-4 rounded-full bg-orange" />
                <input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-[14px] tracking-[-0.04em] text-black placeholder-grey outline-none focus:outline-blue-300 2xl:text-[18px] "
                />
              </div>

              {/* Submit button */}
              <BlackBtn className="w-[100%] text-[18px] h-[55px]  px-[20px] rounded-[40px]
                ssm:w-[50%] mdd:w-[initial] 
                2xl:w-full 2xl:text-[20px] 2xl:h-[70px]">
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
            <svg className="w-[18px] h-[18px] 2xl:w-[22px] 2xl:h-[22px]">
              <use href="/icons/sprite/sprite.svg#close" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}