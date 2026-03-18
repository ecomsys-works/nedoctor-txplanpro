import { useState } from "react";
import { useTranslation } from "react-i18next";
import { formatHeader } from "@/utils/formaters";

export default function BenefitsAccordion() {
    const { t } = useTranslation();

    const title = t("benefits.title");
    const accordions = t("benefits.accordions", { returnObjects: true }) as {
        headerMob: string;
        headerDesk: string;
        rows: { title: string; description: string }[];
    }[];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const font = t("benefits.font");

    return (
        <section id="#benefits" className="benefits-accordion gsap-up pt-[2.1875rem] mb-[4.375rem] 
        sm:pt-[3.125rem] 2xl:pt-[3.125rem] sm:mb-[6.25rem] mdd:mb-[7.8125rem] 2xl:mb-[12.5rem]">
            <h2 className={`text-[1.5625rem] mb-[1.25rem] tracking-[-0.05em] my-container font-${font}
               3xl:text-[3.4375rem] 2xl:mb-[2.375rem] text-[1.5625rem] md:tracking-[-0.03em]
                 ${t('lang') === 'ru' ? "leading-[1]  2xl:text-[2.5rem]" :"leading-[0.88] 2xl:text-[2.8125rem]"}
                `}>
                {formatHeader(title)}                
            </h2>

            <div className="mx-[0.625rem] xs:mx-[0.9375rem] sm:mx-0 flex flex-col rounded-[1.25rem] bg-white sm:bg-transparent sm:rounded-0">
                {accordions.map((accordion, index) => {
                    const isOpen = index === openIndex;
                    return (
                        <div key={index} className="w-full transition-colors duration-500 relative">
                            {/* Мобильная версия <40rem */}
                            <div className="sm:hidden">
                                <div className={`rounded-t-[1.25rem] bg-white text-black transition-colors duration-500 overflow-hidden border-t border-grey-200 ${index === accordions.length - 1 ? "rounded-b-[1.25rem]" : ""}`}>
                                    <AccordionContent
                                        header={accordion.headerMob}
                                        accordion={accordion}
                                        isOpen={isOpen}
                                        toggle={() => toggleAccordion(index)}
                                    />
                                </div>
                            </div>

                            {/* sm+ версия 40rem–79.9375rem */}
                            <div className="hidden sm:block xl:hidden">
                                <div className="border-t border-b border-grey-200 bg-white text-black transition-colors duration-500 overflow-hidden">
                                    <div className="my-container">
                                        <AccordionContent
                                            header={accordion.headerDesk}
                                            accordion={accordion}
                                            isOpen={isOpen}
                                            toggle={() => toggleAccordion(index)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Десктоп ≥80rem */}
                            <div className="hidden xl:block">
                                <div
                                    className={`group hover:bg-black transition-colors duration-500 border-t 2xl:border-b border-solid border-black/10 overflow-hidden ${isOpen ? "bg-black text-white" : "bg-white text-black"
                                        }`}
                                >
                                    <div className="my-container">
                                        <AccordionContent
                                            header={accordion.headerDesk}
                                            accordion={accordion}
                                            isOpen={isOpen}
                                            toggle={() => toggleAccordion(index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

function AccordionContent({
    header,
    accordion,
    isOpen,
    toggle,
}: {
    header: string;
    accordion: { headerMob?: string; headerDesk?: string; rows: { title: string; description: string }[] };
    isOpen: boolean;
    toggle: () => void;
}) {

     const { t } = useTranslation();

    return (
        <>
            {/* Заголовок аккордеона */}
            <div
                className={`flex justify-between items-start cursor-pointer gap-5 
         ${t('lang') === 'ru' ? "pl-[0.625rem] pr-[1.25rem] pt-[0.625rem] pb-[1.5625rem] sm:items-center sm:pt-[0.9375rem] sm:pb-[1.25rem] md:pl-[0rem]  md:pr-[1.875rem] 2xl:py-[2rem] 2xl:pr-[1.875rem] 2xl:px-0 3xl:py-[2.625rem]" 
            : "pl-[0.625rem] pr-[1.25rem] pt-[0.625rem] pb-[1.5625rem] sm:items-center sm:pt-[0.9375rem] sm:pb-[1.25rem] md:pl-[0rem]  md:pr-[1.875rem] 2xl:py-[3.25rem] 3xl:py-[1.875rem] 2xl:pr-[1.875rem] 2xl:px-0 3xl:py-[3.625rem]"}`}
                onClick={toggle}
            >
                <h3
                    className={`tracking-[-0.06em] uppercase ${isOpen
                            ? "2xl:text-[#b2b2b2]"
                            : "text-black group-hover:text-[#b2b2b2]"}  
                             ${t('lang') === 'ru' ? "font-bold text-[2.1875rem] leading-[1] sm:text-[3.75rem] 2xl:text-[7.5rem]" :
                                "font-semibold text-[2.1875rem] leading-[0.88] sm:text-[3.75rem] 2xl:text-[10rem] font-anek -mb-[3.5%]"}                          
                        `}
                >
                    <span className="block align-top">{header}</span>
                    
                </h3>
                <span className=" group-hover:text-white group-hover:border-white/20 border-white/10 rounded-full 2xl:p-5 -mr-[2.1875rem] -mt-[0.9375rem] 2xl:border ">
                    <svg
                        className={`shrink-0 transform transition-transform duration-500 ${isOpen ? "-rotate-90" : "rotate-0"
                            } w-[1.125rem] h-[1.125rem] 2xl:w-[1.875rem] 2xl:h-[1.875rem]`}
                    >
                        <use href="/icons/sprite/sprite.svg#acc-arrow" />
                    </svg>
                </span>
            </div>

            {/* Контент */}
            <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[62.5rem]" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col xl:flex-row xl:gap-4 sm:pb-10 pb-[1.25rem]">
                    {/* Пустой блок для отступа на десктопе */}
                    <div className="hidden xl:block flex-[0_0_50%]"></div>

                    <div className="flex-1 flex flex-col gap-5 sm:gap-10">
                        {accordion.rows.map((row, i) => (
                            <div
                                key={i}
                                className={`border-grey-200 flex flex-col 
                                            px-[0.625rem] pt-[1.25rem] gap-2 
                                            sm:pt-[2.5rem] sm:gap-10 sm:grid sm:grid-cols-2 sm:gap-25 md:gap-35
                                            xl:items-start 2xl:gap-25 border-t
                                            ${i === accordion.rows.length - 1 ? "border-b pb-[2.5rem]" : ""}
                                        `}>
                                <h4 className="text-[0.875rem] sm:text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-semibold
                                sm:leading-[1] 2xl:text-[1.5rem] 2xl:leading-[1.1] 2xl:text-[#b2b2b2]">{row.title}</h4>

                                <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-semibold
                                2xl:text-[1.125rem] 2xl:leading-[1.3] 2xl:text-[#b2b2b2]">{row.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}