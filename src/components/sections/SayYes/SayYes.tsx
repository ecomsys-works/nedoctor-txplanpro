import { useTranslation } from "react-i18next";
import BlackBtn from "@/ui/BlackBtn";
import { usePopup } from "@/сontext/Popup/usePopup";
import { formatHeader } from "@/utils/formaters";

export default function SayYes() {
    const { t } = useTranslation();
    const { setIsOpen: setIsOpenPopup } = usePopup();

    const title = t("sayyes.title");
    const buttonText = t("sayyes.buttonText");

    const imageMob = t("sayyes.imageMob");
    const imageDesk = t("sayyes.imageDesk");

    return (
        <div className={`sayyes gsap-up my-container 
              ${t('lang') === 'ru' ? "mb-[3.125rem] sm:mb-[6.25rem] xl:mb-[0.625rem] 3xl:mb-[6.25rem]" : 
                "mb-[3.125rem] sm:mb-[6.25rem] xl:mb-[0.625rem] 3xl:mb-[1.25rem]"}
        `}>
            <section className={`bg-white relative w-full min-h-[27.125rem] sm:min-h-[35.3125rem] md:min-h-[33.75rem]  
            rounded-[1.25rem] sm:rounded-[1.875rem] md:rounded-[3.125rem] overflow-hidden
             ${t('lang') === 'ru' ? "lg:aspect-[94/54] xl:aspect-[1300/743] 3xl:aspect-[1600/973]" : 
                "lg:aspect-[94/54] xl:aspect-[1300/743] 3xl:aspect-[1600/914]"}
                `}>

                {/* RESPONSIVE IMAGE */}
                <picture>
                    <source media="(min-width: 25.9375rem)" srcSet={imageDesk} />
                    <img
                        src={imageMob}
                        alt="Banner"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                </picture>

                <div className={`absolute inset-0 flex flex-col justify-end items-center text-center p-[1.25rem] md:p-[1.875rem] 2xl:p-[2.5rem]  3xl:p-[3.75rem] 
                ${t('lang') === 'ru' ? "gap-[1.75rem]" :"2xl:gap-[1.75rem] 3xl:gap-[2.375rem]"}
                    `}>
                    <h2 className={`font-normal text-black                    
                     ${t('lang') === 'ru' ? "ml-[-0.3125rem] mr-[-0.3125rem] text-[1.5625rem] max-w-[26.25rem] tracking-[-0.05em] leading-[1] sm:mx-[initial] 2xl:text-[2.5rem] 3xl:text-[3.4375rem] 2xl:max-w-[40.5rem] font-zt" : 
                     "ml-[-0.3125rem] mr-[-0.3125rem] text-[1.5625rem] max-w-[26.25rem] tracking-[-0.05em] leading-[0.88] sm:mx-[initial] 2xl:text-[2.8125rem] 3xl:text-[3.4375rem] 2xl:max-w-[40.5rem] font-libre"}`}>
                        {formatHeader(title)}
                    </h2>

                    <BlackBtn className="w-full sm:w-[initial] 2xl:min-w-[19.5625rem] text-[1.125rem] 2xl:text-[1.25rem] h-[3.4375rem] 2xl:h-[4.375rem] px-[2.375rem] rounded-[2.5rem] tracking-[-0.04em] font-medium"
                        onClick={() => setIsOpenPopup(true)}
                    >
                        {buttonText}
                    </BlackBtn>
                </div>
            </section>
        </div>
    );
}