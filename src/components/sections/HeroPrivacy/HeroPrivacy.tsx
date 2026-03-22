import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export default function HeroPrivacy() {
    const { t } = useTranslation();

    const title = t("heroPrivacy.title");
    const backBtn = t("heroPrivacy.backBtn");
    const font = t("heroPrivacy.font");

    return (
        <section className={`hero-privacy my-container cover-gradient text-white relative overflow-hidden        
   ${t('lang') === "ru" ?
                `mb-[0.9375rem] pb-[6.625rem] rounded-b-[1.875rem] 
                xs:rounded-b-[2.8125rem] xs:mb-[1.25rem] xs:pb-[6.25rem] 
                md:mb-[1.875rem] md:rounded-b-[3.75rem] md:pb-[9.0625rem] 
                2xl:pb-[11.875rem] 2xl:rounded-b-[7.5rem] 2xl:mb-[3.75rem] 
                3xl:mb-[3.75rem] 3xl:pb-[15.25rem] `
                :
                `mb-[0.9375rem] pb-[6.625rem] rounded-b-[1.875rem] 
                xs:rounded-b-[2.8125rem] xs:mb-[1.25rem] xs:pb-[6.25rem] 
                md:mb-[1.875rem] md:rounded-b-[3.75rem] md:pb-[9.0625rem] 
                2xl:pb-[11.875rem] 2xl:rounded-b-[7.5rem] 2xl:mb-[3.75rem]
                3xl:mb-[3.75rem] 3xl:pb-[15.25rem] 
        `}        
    `}>
        
            <Link to="/" className="flex items-center gap-[0.625rem] pt-[0.625rem] hover:scale-103 hover:translate-x-[1.5%] transition duration-300
            ">
                <svg className="w-[1.25rem] h-[1.25rem] md:w-[1rem] md:h-[1rem]">
                    <use href="/icons/sprite/sprite.svg#back-btn" />
                </svg>
                <span className=" font-normal 
                text-[0.875rem] leading-[1.2] tracking-[0.04em]
                md:text-[1.125rem] md:leading-[1.3] 
                ">{backBtn}</span>
            </Link>


            <h1 className={`font-${font} text-center 
            ${t('lang') === 'ru' ? 
            `px-[0rem] text-[2.2rem]`
            :
            `px-[1.25rem] text-[2.5rem]`}
            pt-[4.75rem] leading-[0.85] tracking-[-0.03em] 
            xs:pt-[3.1875rem] xs:px-[1.25rem] xs:text-[2.5rem]
            md:pt-[2.6875rem] 
            2xl:text-[5rem] 2xl:px-[3.125rem] 2xl:pt-[4.375rem]
            3xl:pt-[7.5rem]
            `}>{title}</h1>
        </section>
    );
}