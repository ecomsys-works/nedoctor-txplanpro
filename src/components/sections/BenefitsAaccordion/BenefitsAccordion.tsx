import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BenefitsAccordion() {
    const { t } = useTranslation();

    const title = t("benefits.title");
    const accordions = t("benefits.accordions", { returnObjects: true }) as {
        header: string;
        rows: { title: string; description: string }[];
    }[];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16">
            <h2 className="text-[55px] font-bold mb-8 container">{title}</h2>

            {accordions.map((accordion, index) => {
                const isOpen = index === openIndex;

                return (
                    <div key={index} className="w-full transition-colors duration-500">
                        {/* Фон для мобилки <640px внутри контейнера */}
                        <div className="sm:hidden container">
                            <div
                                className={`bg-white text-black transition-colors duration-500 rounded-lg overflow-hidden`}
                            >
                                <AccordionContent
                                    accordion={accordion}
                                    isOpen={isOpen}
                                    toggle={() => toggleAccordion(index)}
                                />
                            </div>
                        </div>

                        {/* Фон для средних экранов 640px–1279px на всю ширину */}
                        <div className="hidden sm:block xl:hidden">
                            <div
                                className={`bg-white text-black transition-colors duration-500 overflow-hidden`}
                            >
                                <div className="container">
                                    <AccordionContent
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
                                className={`transition-colors duration-500 overflow-hidden ${isOpen ? "bg-black text-white" : "bg-white text-black"
                                    }`}
                            >
                                <div className="container">
                                    <AccordionContent
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
        </section>
    );
}

function AccordionContent({
    accordion,
    isOpen,
    toggle,
}: {
    accordion: { header: string; rows: { title: string; description: string }[] };
    isOpen: boolean;
    toggle: () => void;
}) {
    return (
        <>
            {/* Заголовок аккордеона */}
            <div
                className="flex justify-between items-center cursor-pointer py-4 gap-5"
                onClick={toggle}
            >
                <h3 className="font-semibold text-[35px] xl:text-[120px]">
                    {accordion.header}
                </h3>
                <span
                    className={`transform transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                >
                    ▼
                </span>
            </div>

            {/* Контент */}
            <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px]" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col xl:flex-row xl:gap-4 sm:pb-10">
                    {/* Пустой блок для отступа на десктопе */}
                    <div className="hidden xl:block flex-[0_0_50%]"></div>

                    <div className="flex-1 flex flex-col gap-4">
                        {accordion.rows.map((row, i) => (
                            <div
                                key={i}
                                className={`flex flex-col gap-2 sm:grid sm:grid-cols-2 xl:items-start`}
                            >
                                <h4 className="font-semibold">{row.title}</h4>
                                <p>{row.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}