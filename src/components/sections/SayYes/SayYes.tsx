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
              ${t('lang') === 'ru' ? 
                `mb-[3.125rem] 
                sm:mb-[6.25rem] 
                xl:mb-[0.625rem] 
                3xl:mb-[6.25rem]` 
                : 
                `mb-[3.125rem] 
                sm:mb-[6.25rem] 
                xl:mb-[0.625rem] 
                3xl:mb-[1.25rem]`}
        `}>
            <section className={`bg-white relative w-full min-h-[27.125rem] rounded-[1.25rem] overflow-hidden
            
            
           
            
             ${t('lang') === 'ru' ? 
                `sm:rounded-[1.875rem]
                 md:min-h-[33.75rem] md:rounded-[2.5rem] 
                lg:aspect-[94/54] 
                xl:aspect-[1300/743] xs:min-h-[35.3125rem] 
                2xl:aspect-[1300/740] 2xl:rounded-[3.125rem] 
                3xl:aspect-[1600/973]` 
                : 
                `xs:aspect-[600/632] xs:min-h-[35.3125rem] 
                sm:rounded-[1.875rem]
                 md:min-h-[33.75rem] md:rounded-[2.5rem] md:aspect-[94/54]
                lg:aspect-[94/54] 
                xl:aspect-[1300/743] 
                2xl:rounded-[3.125rem] 
                3xl:aspect-[1600/914]`}
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

                <div className={`absolute inset-0 flex flex-col justify-end items-center text-center                
                ${t('lang') === 'ru' ? 
                    `gap-[1.75rem]
                     p-[0.9375rem] 
                     xs:p-[1.875rem] 
                     md:p-[1.875rem] 
                     2xl:p-[2.5rem]
                     3xl:p-[3.75rem] 
                    ` 
                    :
                    `gap-[1.25rem]                  
                     p-[0.9375rem] 
                     xs:p-[2.5rem] 
                     md:p-[1.875rem] 
                     2xl:p-[2.5rem] 2xl:gap-[1.75rem]
                     3xl:p-[3.75rem] 3xl:gap-[2.375rem]
                    `}
                    `}>
                    <h2 className={`font-normal text-black                    
                     ${t('lang') === 'ru' ? `ml-[-0.3125rem] mr-[-0.3125rem] font-zt text-[1.5625rem] max-w-[26.25rem] tracking-[-0.03em] leading-[1] 
                        sm:mx-[initial] 
                        2xl:tracking-[-0.05em] 2xl:text-[2.5rem] 
                        3xl:text-[3.4375rem] 2xl:max-w-[40.5rem]` 
                        : 
                     `ml-[-0.3125rem] mr-[-0.3125rem] font-libre text-[1.875rem] max-w-[26.25rem] tracking-[-0.03em] leading-[1]
                     sm:mx-[initial]                      
                     2xl:tracking-[-0.05em] 2xl:text-[2.8125rem] 2xl:max-w-[40.5rem]
                     3xl:text-[3.4375rem] 3xl:leading-[0.88]`}`}
                     >
                        {formatHeader(title)}
                    </h2>

                    <BlackBtn className={`w-full text-[1.125rem] h-[3.4375rem] rounded-[2.5rem] tracking-[-0.04em] font-medium                    
                    sm:w-[initial] 2xl:min-w-[19.5625rem] 2xl:text-[1.25rem] 2xl:h-[4.375rem] 
                      ${t('lang') === 'ru' ? 
                        `px-[2.0625rem] 
                        2xl:px-[2.375rem]`
                        :
                        `px-[2.0625rem] 
                        xs:px-[3.75rem]
                        2xl:px-[2.375rem]`}
                    `}
                        onClick={() => setIsOpenPopup(true)}
                    >
                        {buttonText}
                    </BlackBtn>
                </div>
            </section>
        </div>
    );
}