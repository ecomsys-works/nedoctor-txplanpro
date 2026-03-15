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
        <section id="#benefits" className="pt-[35px] sm:pt-[50px] 2xl:pt-[50px] mb-[70px] sm:mb-[100px] mdd:mb-[125px] 2xl:mb-[200px]">
            <h2 className={`text-[25px] 3xl:text-[55px] mb-[20px] 2xl:mb-[40px] leading-[1] tracking-[-0.03em] my-container font-${font}`}>
                {formatHeader(title)}
            </h2>

            <div className="mx-[10px] xs:mx-[15px] sm:mx-0 flex flex-col rounded-[20px] bg-white sm:bg-transparent sm:rounded-0">
                {accordions.map((accordion, index) => {
                    const isOpen = index === openIndex;
                    return (
                        <div key={index} className="w-full transition-colors duration-500 relative">
                            {/* Мобильная версия <640px */}
                            <div className="sm:hidden">
                                <div className={`rounded-t-[20px] bg-white text-black transition-colors duration-500 overflow-hidden border-t border-grey-200 ${index === accordions.length - 1 ? "rounded-b-[20px]" : ""}`}>
                                    <AccordionContent
                                        header={accordion.headerMob}
                                        accordion={accordion}
                                        isOpen={isOpen}
                                        toggle={() => toggleAccordion(index)}
                                    />
                                </div>
                            </div>

                            {/* sm+ версия 640px–1279px */}
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

                            {/* Десктоп ≥1280px */}
                            <div className="hidden xl:block">
                                <div
                                    className={`transition-colors duration-500 border-t 2xl:border-b border-solid border-black/10 overflow-hidden ${isOpen ? "bg-black text-white" : "bg-white text-black"
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
    return (
        <>
            {/* Заголовок аккордеона */}
            <div
                className="flex justify-between items-start sm:items-center cursor-pointer gap-5 pl-[10px] pr-[20px] pt-[10px] pb-[25px] sm:pt-[15px] sm:pb-[20px] 2xl:pt-[30px] 2xl:pb-[30px] 2xl:pr-[30px] 3xl:py-[40px]"
                onClick={toggle}
            >
                <h3 className={`font-semibold text-[35px] sm:text-[60px] 2xl:text-[120px] leading-[1] tracking-[-0.06em] uppercase ${isOpen ? "2xl:text-[#b2b2b2]" : "2xl:text-black"}`}>
                    {header}
                </h3>
                <span className=" border-white/10 rounded-full 2xl:p-5 2xl:border">
                    <svg
                        className={`shrink-0 transform transition-transform duration-500 ${isOpen ? "-rotate-90" : "rotate-0"
                            } w-[18px] h-[18px] 2xl:w-[30px] 2xl:h-[30px]`}
                    >
                        <use href="/icons/sprite/sprite.svg#acc-arrow" />
                    </svg>
                </span>
            </div>

            {/* Контент */}
            <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px]" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col xl:flex-row xl:gap-4 sm:pb-10 pb-[20px]">
                    {/* Пустой блок для отступа на десктопе */}
                    <div className="hidden xl:block flex-[0_0_50%]"></div>

                    <div className="flex-1 flex flex-col gap-5 sm:gap-10">
                        {accordion.rows.map((row, i) => (
                            <div
                                key={i}
                                className={`border-grey-200 flex flex-col 
                                            px-[10px] pt-[20px] sm:pt-[40px] 
                                            gap-2 sm:gap-10 sm:grid sm:grid-cols-2 sm:gap-25 md:gap-35
                                            xl:items-start 2xl:gap-25 border-t
                                            ${i === accordion.rows.length - 1 ? "border-b pb-[40px]" : ""} /* border-bottom для последнего */
                                        `}>
                                <h4 className="text-[14px] sm:text-[18px] 2xl:text-[24px] 2xl:leading-[1.1] sm:leading-[1] leading-[1.3] tracking-[-0.04em] font-semibold 2xl:text-[#b2b2b2]">{row.title}</h4>
                                <p className="text-[14px] 2xl:text-[18px] 2xl:leading-[1.3] leading-[1.2] tracking-[-0.04em] font-semibold 2xl:text-[#b2b2b2]">{row.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}