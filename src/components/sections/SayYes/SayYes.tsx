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
              ${t('lang') === 'ru' ? "mb-[50px] sm:mb-[100px] xl:mb-[10px] 3xl:mb-[100px]" : 
                "mb-[50px] sm:mb-[100px] xl:mb-[10px] 3xl:mb-[20px]"}
        `}>
            <section className={`bg-white relative w-full min-h-[434px] sm:min-h-[565px] md:min-h-[540px]  
            rounded-[20px] sm:rounded-[30px] md:rounded-[50px] overflow-hidden
             ${t('lang') === 'ru' ? "lg:aspect-[94/54] xl:aspect-[1300/743] 3xl:aspect-[1600/973]" : 
                "lg:aspect-[94/54] xl:aspect-[1300/743] 3xl:aspect-[1600/914]"}
                `}>

                {/* RESPONSIVE IMAGE */}
                <picture>
                    <source media="(min-width: 415px)" srcSet={imageDesk} />
                    <img
                        src={imageMob}
                        alt="Banner"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                </picture>

                <div className={`absolute inset-0 flex flex-col justify-end items-center text-center p-[20px] md:p-[30px] 2xl:p-[40px]  3xl:p-[60px] 
                ${t('lang') === 'ru' ? "gap-[28px]" :"2xl:gap-[28px] 3xl:gap-[38px]"}
                    `}>
                    <h2 className={`font-normal text-black                    
                     ${t('lang') === 'ru' ? "ml-[-5px] mr-[-5px] text-[25px] max-w-[420px] tracking-[-0.05em] leading-[1] sm:mx-[initial] 2xl:text-[40px] 3xl:text-[55px] 2xl:max-w-[648px] font-zt" : 
                     "ml-[-5px] mr-[-5px] text-[25px] max-w-[420px] tracking-[-0.05em] leading-[0.88] sm:mx-[initial] 2xl:text-[45px] 3xl:text-[55px] 2xl:max-w-[648px] font-libre"}`}>
                        {formatHeader(title)}
                    </h2>

                    <BlackBtn className="w-full sm:w-[initial] 2xl:min-w-[313px] text-[18px] 2xl:text-[20px] h-[55px] 2xl:h-[70px] px-[38px] rounded-[40px] tracking-[-0.04em] font-medium"
                        onClick={() => setIsOpenPopup(true)}
                    >
                        {buttonText}
                    </BlackBtn>
                </div>
            </section>
        </div>
    );
}