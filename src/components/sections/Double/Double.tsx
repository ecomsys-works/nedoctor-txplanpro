import { useTranslation } from "react-i18next";
import BlackBtn from "@/ui/BlackBtn";
import { usePopup } from "@/сontext/Popup/usePopup";
import { formatHeader } from "@/utils/formaters";

export default function DoubleCardSection() {
    const { t } = useTranslation();
    const { setIsOpen: setIsOpenPopup, setTariff } = usePopup();

    const cards = t("double.cards", { returnObjects: true }) as {
        imageMob?: string;
        imageDesk?: string;
        title?: string;
        button?: string;
    }[];

    const font = t("double.font");

    return (
        <section className={`double gsap-up my-container mb-[2.1875rem] 
        xs:mb-[3.125rem] 
        md:mb-[3.125rem] 
        ${t('lang') === 'ru' ?
                `2xl:mb-[9.6875rem]`
                :
                `2xl:mb-[10rem]`}
        3xl:mb-[9.875rem]        
        `}>
            <div className="flex flex-col gap-[3.125rem] 
            xs:rounded-[1.875rem] 
            md:p-[0.375rem] md:flex-row md:gap-[0.375rem] md:bg-black 
            2xl:gap-[0.5625rem] 2xl:rounded-[2.875rem] 2xl:px-[0.5625rem] 2xl:py-[0.6875rem]">

                {/* Первая карточка — изображение */}
                <div className="bg-white aspect-[600/806] rounded-[1.5rem] flex-[1_1_50%] overflow-hidden relative
                md:aspect-square 
                2xl:rounded-[2.5rem] 
                ">
                    {/* Mobile image */}
                    {cards[0].imageMob && (
                        <img
                            src={cards[0].imageMob}
                            alt="Card Image Mobile"
                            className="block w-full h-full object-cover rounded-[2.5rem] md:hidden"
                        />
                    )}

                    {/* Desktop image */}
                    {cards[0].imageDesk && (
                        <img
                            src={cards[0].imageDesk}
                            alt="Card Image Desktop"
                            className="block w-full h-full object-cover rounded-[2.5rem] hidden md:block"
                        />
                    )}
                </div>

                {/* Вторая карточка — текст + кнопка */}
                <div
                    className={`
                    w-full flex-[1_1_50%] flex flex-col justify-center items-center rounded-[1.5rem] 
                    ${t('lang') === 'ru' ?
                            `md:gap-[1.125rem] md:bg-white md:p-6 
                    2xl:gap-[1rem] 2xl:rounded-[2.5rem]`
                            :
                            `md:gap-[0.75rem] md:bg-white md:p-6 
                    2xl:gap-[1rem] 2xl:rounded-[2.5rem]`}
                    `}
                >
                    <h3 className={`mx-auto text-center font-${font} text-black                    
                      ${t('lang') === 'ru' ?
                            `text-[1.5625rem] mb-[1.25rem] max-w-[21.875rem] tracking-[-0.03em] leading-[1]
                        xs:mb-[1.875rem]
                        md:mb-[0rem] md:max-w-[17.3125rem]
                        2xl:max-w-[26.25rem] 2xl:tracking-[-0.05em] 2xl:mb-[0.75rem] 2xl:text-[2.5rem]
                        3xl:max-w-[35rem] 3xl:mb-[0.625rem] 3xl:text-[3.4375rem] `
                            :
                            `text-[1.875rem] mb-[1.25rem] max-w-[21.875rem] tracking-[-0.03em] leading-[1]  
                        xs:mb-[1.25rem]
                        md:mb-[0rem] md:max-w-[17.3125rem]
                        2xl:tracking-[-0.05em] 2xl:mb-[0.75rem] 2xl:text-[2.8125rem] 2xl:max-w-[21.625rem] 2xl:leading-[0.88]  
                        3xl:max-w-[29.5rem] 3xl:mb-[1.25rem] 3xl:text-[3.4375rem] `}
                    `}>
                        {formatHeader(cards[1].title)}
                    </h3>


                    <BlackBtn className="w-full text-[1.125rem] h-[3.4375rem] px-[1.875rem] rounded-[2.5rem] tracking-[-0.04em] font-medium
                    xs:w-[initial] xs:px-[3.75rem]
                    md:px-[2rem] min-w-[15.9375rem]
                    2xl:text-[1.25rem] 2xl:h-[4.375rem] 2xl:px-[2.1875rem] 2xl:min-w-[19.5625rem] "
                        onClick={() => {
                            setTariff('Starter')
                            setIsOpenPopup(true)
                        }
                        }
                    >
                        {cards[1].button}
                    </BlackBtn>
                </div>
            </div>
        </section>
    );
}