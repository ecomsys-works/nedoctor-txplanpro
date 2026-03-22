import { useTranslation } from "react-i18next";
import WhiteBtn from "@/ui/WhiteBtn";
import { usePopup } from "@/сontext/Popup/usePopup";
import { formatHeader } from "@/utils/formaters";


export type PricingCardType = {
    title: string;
    description: string;
    price: string;
    priceDescription: string;
    blackLabel?: string;
    whiteLabel?: string;

    monthLimitsTitle?: string;
    monthLimits?: string[];

    planPrice: string;
    includedTitle: string;
    included: string[];
    limitsTitle?: string;
    limits?: string[];
    buttonText: string;
};

export default function Pricing() {
    const { setIsOpen: setIsOpenPopup, setTariff } = usePopup();      
      
    const { t } = useTranslation();
    const title = t("pricing.title");
    const cards = t("pricing.cards", { returnObjects: true }) as PricingCardType[];

    // Функция распределения included по колонкам
    const splitIncluded = (card: PricingCardType) => {
        let left: string[] = [];
        let right: string[] = [];

        if (card.limits && card.limits.length > 0) {
            left = card.included;
            right = card.limits;
        } else if (card.included.length > 4) {
            left = card.included.slice(0, 4);
            right = card.included.slice(4);
        } else {
            left = card.included;
            right = [];
        }

        return { left, right };
    };

    return (
        <section id="#pricing" className={`pricing gsap-up my-container cover-gradient overflow-visible text-white

             ${t('lang') === 'ru' ? `
                rounded-[1.25rem] pt-[0.3125rem] pb-[3.125rem] mb-[4.375rem] 
                xs:mb-[6.25rem] xs:rounded-[1.875rem]
                md:rounded-[3.75rem] md:mb-[6.25rem] 
                2xl:pb-[3.125rem] 2xl:mb-[13.125rem] 2xl:rounded-[5rem] 
                3xl:pb-[5rem] 3xl:mb-[12.5rem] 3xl:rounded-[3.75rem]` 
                : 
                `rounded-[1.875rem] pt-[0.625rem] pb-[3.125rem] mb-[4.375rem]  
                xs:mb-[6.25rem] xs:rounded-[1.875rem]
                md:mb-[5.9375rem] md:rounded-[3.75rem]
                2xl:pb-[3.125rem] 2xl:mb-[12.5rem] 2xl:rounded-[5rem] 
                3xl:pb-[5rem] 3xl:rounded-[3.75rem] 3xl:mb-[12.8125rem] `}         
        `}>

            <h2 className={` text-white tracking-[-0.06em] uppercase text-center                        
             ${t('lang') === 'ru' ? 
                `leading-[1] font-semibold pb-[2rem] pt-[2.5rem] text-[2.5rem] 
                xs:text-[4.875rem] xs:pb-[1.875rem] xs:pt-[1.875rem] 
                md:font-inter md:text-[4.875rem] md:pt-[1.6875rem] md:pb-[1.6875rem] 
                2xl:text-[7.5rem] 2xl:pt-[1.75rem] 2xl:pb-[2.0625rem] 2xl:font-bold 
                3xl:pt-[3.625rem] 3xl:pb-[2.5rem]`
                 : 
                `leading-[1] pb-[1.5625rem] pt-[2.5rem] text-[2.5rem] font-semibold font-anek
                xs:text-[4.875rem] xs:pb-[0.625rem]
                md:text-[4.875rem] md:pt-[2.5rem] md:pb-[0.625rem] 
                2xl:pb-[0.625rem] 2xl:text-[10rem] 
                3xl:pt-[4.0625rem] 3xl:pb-[0.3125rem]`}
            `}>{title}</h2>

            {/* DESKTOP: Верхние 3 вертикальные карточки */}
            <div className={`3xl:grid hidden grid-cols-[523fr_510fr_510fr] gap-x-[1.375rem] mb-[3.75rem] 
            ${t('lang') === 'ru' ? "" : "2xl:-mt-[1.25rem]"}
            3xl:mr-[0.625rem]`}>

                {cards.slice(1, 4).map((card, i) => {
                    const { left, right } = splitIncluded(card);                                
                    return (
                        <div key={i} className="card-3 rounded-[1.75rem] p-[0.9375rem] flex flex-col relative h-full">
                            {/* Верхний блок */}
                            <div className="bg-white text-black rounded-[1.75rem] p-[1.375rem] relative">
                                <div className="min-h-[7.0625rem] pb-[0.75rem] flex justify-between items-start">
                                    <div className="space-y-1">
                                        {card.title && (<h3 className="text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                        {card.description && (<p className="text-[1.125rem] font-normal leading-[1.3] tracking-[-0.04em]">{formatHeader(card.description)}</p>)}
                                    </div>
                                    <div className="space-y-1 text-right">
                                        {card.price && (<p className="text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                        {card.priceDescription && (<p className=" text-[1.125rem] font-normal leading-[1.3] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                    </div>
                                </div>
                                {card.monthLimits && (
                                    <div className="text-black ">
                                        <h4 className="mb-[1rem] text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.monthLimitsTitle}</h4>
                                        <ul className="text-[0.8125rem] space-y-[0.25rem]">
                                            {card.monthLimits.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[0.5625rem]">
                                                    <span className="mt-[0.1875rem] w-[1.0625rem] h-[1.0625rem] bg-black rounded-full flex justify-center items-center text-black">
                                                        <svg className="w-[0.5625rem] h-[0.4375rem] text-white">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {card.blackLabel && (
                                    <span className="inline-flex h-[2.1875rem] items-center justify-center absolute bottom-[1.25rem] right-[1.25rem] bg-black
                                      text-white rounded-[6.25rem] px-[0.875rem] text-[1.125rem] leading-[1.3] tracking-[-0.04em]  ">
                                        {card.blackLabel}
                                    </span>
                                )}
                            </div>

                            {/* Второй блок */}
                            <div className="flex flex-col h-full justify-between">

                                <div className="px-[1.625rem]">
                                    {card.planPrice && (
                                        <p className="mb-[1.875rem] pt-[0.9375rem] text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-light">{card.planPrice}</p>
                                    )}
                                    {left.length > 0 && (
                                        <h4 className="mb-[0.9375rem] text-white text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                    )}

                                    <div className={`grid grid-cols-1 gap-[0.5rem] mb-[1.875rem]
                                     ${t('lang') === 'ru' ? `3xl:grid-cols-2` : `3xl:grid-cols-[46%_54%] `}`}>

                                        {left.length > 0 && (
                                            <ul className="space-y-1">
                                                {left.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                        <span className="mt-[0.1875rem] w-[1.0625rem] h-[1.0625rem] bg-white rounded-full flex justify-center items-center text-white font-light">
                                                            <svg className="w-[0.5625rem] h-[0.4375rem] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-nowrap text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {right.length > 0 && (
                                            <ul className="space-y-1 ">
                                                {right.length > 0 && card.limitsTitle && (
                                                    <>
                                                        <h4 className="text-[1.5rem] font-semibold mb-[0.5rem] ">{card.limitsTitle}</h4>
                                                        {right.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                                <span className="mt-[0.1875rem] w-[1.0625rem] h-[1.0625rem] bg-white rounded-full flex justify-center items-center text-white">
                                                                    <svg className="w-[0.5625rem] h-[0.4375rem] text-black">
                                                                        <use href="./icons/sprite/sprite.svg#check"></use>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[0.875rem]  leading-[1.2] tracking-[-0.04em] font-normal">{item}</span>
                                                            </li>
                                                        ))}
                                                    </>
                                                )}
                                                {right.length > 0 && !card.limitsTitle && right.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                        <span className="mt-[0.1875rem] w-[1.0625rem] h-[1.0625rem] bg-white rounded-full flex justify-center items-center text-white">
                                                            <svg className="w-[0.5625rem] h-[0.4375rem] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <WhiteBtn className="font-medium text-[1.25rem] tracking-[-0.04em] h-[4.375rem] w-full rounded-full"
                                 onClick={() => {
                                    setTariff(card.title);
                                    setIsOpenPopup(true)}}
                                >
                                    {card.buttonText}
                                </WhiteBtn>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* DESKTOP: Нижняя горизонтальная карточка */}
            <div className="hidden 3xl:flex ">
                {(() => {
                    const card = cards[0];
                    const { left, right } = splitIncluded(card);
                    return (
                        <div className="card-long rounded-[1.75rem] w-full h-full grid grid-cols-3 gap-[2.5rem] relative ">
                            {/* Левый блок */}
                            <div className="p-[0.75rem]">
                                <div className="bg-white text-black rounded-[1.75rem] p-[1.375rem] relative">
                                    <div className="min-h-[7.1875rem] pb-[0.75rem] flex justify-between items-start">
                                        <div className="space-y-1">
                                            {card.title && (<h3 className="text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                            {card.description && (<p className="text-[1.125rem] font-normal leading-[1.3] tracking-[-0.04em]">{formatHeader(card.description)}</p>)}
                                        </div>
                                        <div className="space-y-1 text-right">
                                            {card.price && (<p className="text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                            {card.priceDescription && (<p className=" text-[1.125rem] font-normal leading-[1.3] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                        </div>
                                    </div>

                                    {card.monthLimits && (
                                        <div className=" text-black ">
                                            <h4 className="mb-[0.9375rem] text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.monthLimitsTitle}</h4>
                                            <ul className="text-[0.8125rem] space-y-[0.25rem]">
                                                {card.monthLimits.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.5625rem]">
                                                        <span className="mt-[0.1875rem] w-[1.0625rem] h-[1.0625rem] bg-black rounded-full flex justify-center items-center text-black">
                                                            <svg className="w-[0.5625rem] h-[0.4375rem] text-white">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Центральный блок */}
                            {left.length > 0 && (
                                <div className="p-[0.9375rem]">
                                    <div className="px-[1.125rem]">
                                        <h4 className="mb-[0.9375rem] text-white text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                        <ul className="space-y-1">
                                            {left.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[0.5625rem]">
                                                    <span className="shrink-0 mt-[0.1875rem] w-[1.0625rem] h-[1.0625rem] bg-white rounded-full flex justify-center items-center text-white">
                                                        <svg className="w-[0.5625rem] h-[0.4375rem] text-black">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal max-w-[17.8125rem]">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Правый блок */}
                            {right.length > 0 && (
                                <div className="py-[0.9375rem] px-[1.125rem] flex flex-col justify-between relative">
                                    <div className="block">
                                        {card.limitsTitle && (
                                            <h4 className="mb-[0.9375rem] text-white text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.limitsTitle}</h4>
                                        )}
                                        <ul className="space-y-1">
                                            {right.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                    <span className="shrink-0 mt-[0.1875rem] w-[1.0625rem] h-[1.0625rem] bg-white rounded-full flex justify-center items-center text-white">
                                                        <svg className="w-[0.5625rem] h-[0.4375rem] text-black">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {card.whiteLabel && (
                                        <span className="inline-flex h-[2.1875rem] items-center justify-center absolute top-[0.8125rem] right-[0.75rem] bg-white 
                                      text-black rounded-[6.25rem] px-[1.0625rem] text-[1.125rem] leading-[1.3] tracking-[-0.04em]  ">
                                            {card.whiteLabel}
                                        </span>
                                    )}

                                    <WhiteBtn className="font-medium text-[1.25rem] tracking-[-0.04em] h-[4.375rem] w-full rounded-full"
                                    onClick={() => {
                                    setTariff(card.title);
                                    setIsOpenPopup(true)}}
                                    >
                                        {card.buttonText}
                                    </WhiteBtn>
                                </div>
                            )}
                        </div>
                    );
                })()}
            </div>

            {/* MOBILE / TABLET */}
            <div className={`grid 3xl:hidden grid-cols-1 gap-y-10 gap-x-5 
             ${t('lang') === 'ru' ? "pl-[0.3125rem] " : "pl-[0rem] "}
                mdd:grid-cols-2
                xs:pl-[0] 2xl:pl-[0.625rem]`}>
                {cards.map((card, i) => {
                    const { left, right } = splitIncluded(card);
                    return (
                        <div key={i} className={`glass-g rounded-[1.125rem] p-[0.625rem] flex flex-col relative h-full justify-between 
                        2xl:p-[0.9375rem] 2xl:rounded-[1.75rem]`}
                        >
                            <div className="flex flex-col">
                                <div className="bg-white text-black rounded-[1.125rem] p-[0.75rem] relative
                                xl:p-[1.25rem]"
                                >
                                    <div className={`flex justify-between items-start 
                                    ${t('lang') === 'ru' ?
                                        `xs:min-h-[2.8125rem] 
                                        md:min-h-[3.9375rem] 
                                        2xl:min-h-[7.1875rem]`
                                        :
                                        `min-h-[3.9375rem] 
                                        xs:min-h-[2.8125rem] 
                                        md:min-h-[2.8125rem] 
                                        2xl:min-h-[5.9375rem]`}
                                    `}
                                    >
                                        <div className="space-y-1">
                                            {card.title && (<h3 className="text-[1.625rem] font-semibold leading-[1] tracking-[-0.06em]
                                            2xl:text-[2.5rem]"
                                            >{card.title}</h3>)}

                                            {card.description && (<p className={`${t('lang') === 'ru' ? "font-normal max-w-[9.6875rem]" : "font-semibold"}
                                            text-[0.875rem] leading-[1.2] tracking-[-0.04em]
                                            sm:max-w-[initial] 
                                            2xl:text-[1.125rem] 2xl:leading-[1.3]`}
                                            >{formatHeader(card.description)}</p>)}
                                        </div>

                                        <div className="space-y-1 text-right">
                                            {card.price && (<p className="text-[1.625rem] font-semibold leading-[1] tracking-[-0.06em]
                                            2xl:text-[2.5rem]"
                                            >{card.price}</p>)}

                                            {card.priceDescription && (<p className=" text-[0.875rem] font-normal leading-[1.2] tracking-[-0.04em]
                                            2xl:text-[1.125rem] 2xl:leading-[1.3]"
                                            >{card.priceDescription}</p>)}
                                        </div>
                                    </div>

                                    {card.monthLimits && (
                                        <div className={`
                                             ${t('lang') === 'ru' ?
                                                `mt-[1.875rem] 
                                                xs:mt-[1.375rem] 
                                                md:mt-[0.3125rem] 
                                                mdd:mt-[0.5rem]"`
                                                :
                                                `mt-[0.625rem] 
                                                xs:mt-[1.375rem] 
                                                md:mt-[1.625rem] 
                                                mdd:mt-[0.5rem]"`}
                                            `}                                        
                                        >
                                            <h4 className="mb-2.5 text-black text-[0.875rem] leading-[1.3] tracking-[-0.04em] font-semibold
                                            2xl:text-[1.5rem] 2xl:mb-[0.625rem] 2xl:leading-[1.1] 2xl:tracking-[-0.06em]"
                                            >{card.monthLimitsTitle}</h4>

                                            <ul className="text-[0.8125rem] space-y-[0.1875rem]">
                                                {card.monthLimits.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                        <span className="shrink-0 mt-[0.1875rem] w-[0.75rem] h-[0.75rem] bg-black rounded-full flex justify-center items-center text-black
                                                        2xl:w-[1.0625rem] 2xl:h-[1.0625rem]"
                                                        >
                                                            <svg className="w-[0.375rem] h-[0.25rem] text-white
                                                            2xl:w-[0.5625rem] 2xl:h-[0.4375rem]">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal
                                                        2xl:text-[1.125rem] 2xl:leading-[1.3]"
                                                        >{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    )}
                                    {card.blackLabel && (
                                        <span className="hidden sm:inline-flex h-[2.1875rem] absolute bottom-[0.625rem] right-[0.625rem] items-center justify-center 
                                        px-[0.625rem] text-white  text-[0.875rem] bg-black leading-[1.2] tracking-[-0.04em] rounded-[6.25rem] border-dusty-blue border-solid
                                        2xl:bottom-[1.25rem] 2xl:right-[1.25rem] 2xl:px-[0.9375rem] 2xl:text-[1.125rem]"
                                        >
                                            {card.blackLabel}
                                        </span>
                                    )}
                                </div>

                                {card.planPrice ? (
                                    <p className="px-[0.75rem] pt-[0.625rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal
                                    xs:mb-[-0.625rem] 
                                    md:mb-[-0.625rem] 
                                    2xl:mb-[-0.3125rem] 2xl:pt-[0.9375rem] 2xl:text-[1.125rem] 2xl:leading-[1.3]"
                                    >{card.planPrice}</p>
                                ): (
                                    <p className="hidden xs:block 2xl:hidden opacity-0 leading-[1.2] tracking-[-0.04em] font-normal 
                                    px-[0.75rem] pt-[0.625rem] text-[0.875rem] 
                                    xs:mb-[-1.125rem] 
                                    md:mb-[-0.625rem] 
                                    2xl:mb-[-0.3125rem] 2xl:pt-[0.9375rem] 2xl:text-[1.125rem] 2xl:leading-[1.3]"
                                    >*</p>
                                )
                                }

                                {/* русская средина моб версия */}
                                 {t('lang') === 'ru' ? (<div className={`grid grid-cols-1 xs:grid-cols-2 gap-1 
                                min-h-[8.4375rem] mb-[0rem]
                                xs:gap-0 xs:min-h-[9.375rem] xs:mb-[2.1875rem] 
                                sm:grid-cols-2 
                                md:min-h-[10.125rem] md:mb-[1.5625rem]`}
                                >
                                    {left.length > 0 && (
                                        <div className={`px-[0.75rem] pt-[1.875rem] flex flex-col gap-3 
                                        ${right.length <= 0 && "pb-[1.875rem] xs:pb-0"}
                                        xs:gap-2 xs:pt-[2.0625rem] xs:pb-[0.4375rem]
                                        2xl:px-[1.5625rem] 
                                        `}>
                                            <h4 className="text-white text-[0.9375rem] leading-[1.1] tracking-[-0.06em] font-semibold
                                            2xl:text-[1.5rem] 2xl:mb-[0.3125rem]"
                                            >{card.includedTitle}</h4>

                                            <ul className="space-y-1">
                                                {left.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.3125rem] shrink-0">
                                                        <span className="mt-[0.1875rem] shrink-0 w-[0.75rem] h-[0.75rem] bg-white rounded-full flex justify-center items-center text-white
                                                        2xl:w-[1.0625rem] 2xl:h-[1.0625rem]"
                                                        >
                                                            <svg className="w-[0.375rem] h-[0.25rem] text-black
                                                            2xl:w-[0.5625rem] 2xl:h-[0.4375rem]">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className=" text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal
                                                        2xl:text-[1.125rem] 2xl:leading-[1.3]"
                                                        >{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {right.length > 0 && (
                                        <div className="px-[0.75rem] pb-[1.875rem] flex flex-col gap-3 
                                        xs:gap-2 xs:pt-[2.0625rem] xs:pb-[0.4375rem] xs:ml-[-0.625rem] 
                                        2xl:ml-[0.625rem]"
                                        >
                                            {card.limitsTitle ? (
                                                <h4 className="text-white text-[0.9375rem] leading-[1.1] tracking-[-0.06em] font-semibold
                                                pt-[1.25rem] xs:pt-0
                                                2xl:text-[1.5rem] 2xl:mb-[0.3125rem]">{card.limitsTitle}</h4>
                                            ) : (
                                                <h4 className="hidden xs:block text-transparent text-[0.9375rem] leading-[1.1] tracking-[-0.06em] font-semibold
                                                2xl:mb-[0.3125rem] 2xl:text-[1.5rem]"
                                                >*</h4>
                                            )}
                                            <ul className="space-y-1 ">
                                                {right.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 shrink-0">
                                                        <span className="mt-[0.1875rem] shrink-0 w-[0.75rem] h-[0.75rem] bg-white rounded-full flex justify-center items-center text-white
                                                        2xl:w-[1.0625rem] 2xl:h-[1.0625rem] "
                                                        >
                                                            <svg className="w-[0.375rem] h-[0.25rem] 2xl:w-[0.5625rem] 2xl:h-[0.4375rem] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal
                                                        2xl:text-[1.125rem] 2xl:leading-[1.3]"
                                                        >{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                // английская средина моб версия
                            ) : (<div className={`grid ${card.limitsTitle ? "" : "grid-cols-[45%_55%]" } 
                               min-h-[8.4375rem] mb-[0.9375rem]
                               xs:gap-0 xs:min-h-[9.6875rem] xs:mb-[2.1875rem] xs:grid-cols-2
                               md:min-h-[9.8125rem] md:mb-[1.5625rem]`}
                                >
                                    {left.length > 0 && (
                                        <div className={`pl-[0.75rem] pr-[0rem] pt-[1.875rem] flex flex-col gap-3 
                                        ${right.length <= 0 && "pb-[1.875rem] xs:pb-0"}
                                        xs:gap-2 xs:pt-[2.0625rem] xs:pb-[0.4375rem]
                                        2xl:px-[1.5625rem] 
                                        `}>
                                            <h4 className="text-white text-[0.9375rem] leading-[1.1] tracking-[-0.06em] font-semibold
                                            2xl:text-[1.5rem] 2xl:mb-[0.3125rem]"
                                            >{card.includedTitle}</h4>

                                            <ul className="space-y-1">
                                                {left.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                        <span className="mt-[0.1875rem] shrink-0 w-[0.75rem] h-[0.75rem] bg-white rounded-full flex justify-center items-center text-white
                                                        2xl:w-[1.0625rem] 2xl:h-[1.0625rem]"
                                                        >
                                                            <svg className="w-[0.375rem] h-[0.25rem] text-black
                                                            2xl:w-[0.5625rem] 2xl:h-[0.4375rem]">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className=" text-[0.875rem] leading-[1.2] tracking-[-0.06em] font-normal
                                                        2xl:text-[1.125rem] 2xl:leading-[1.3]"
                                                        >{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {right.length > 0 && (
                                        <div className={`pl-[0.75rem] pr-[0rem] ${card.limitsTitle ? "" : "pt-[1.875rem]"} pb-[1.875rem] flex flex-col gap-3 
                                        xs:gap-2 xs:pt-[2.0625rem] xs:pb-[0.4375rem] xs:ml-[-0.625rem] 
                                        2xl:ml-[0.625rem]`}
                                        >
                                            {card.limitsTitle ? (
                                                <h4 className="text-white text-[0.9375rem] leading-[1.1] tracking-[-0.06em] font-semibold
                                                pt-[1.75rem] xs:pt-0
                                                2xl:text-[1.5rem] 2xl:mb-[0.3125rem]">{card.limitsTitle}</h4>
                                            ) : (
                                                <h4 className="block text-transparent text-[0.9375rem] leading-[1.1] tracking-[-0.06em] font-semibold
                                                2xl:mb-[0.3125rem] 2xl:text-[1.5rem]"
                                                >*</h4>
                                            )}
                                            <ul className="space-y-1 mb-[-0.75rem]">
                                                {right.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="mt-[0.1875rem] shrink-0 w-[0.75rem] h-[0.75rem] bg-white rounded-full flex justify-center items-center text-white
                                                        2xl:w-[1.0625rem] 2xl:h-[1.0625rem] "
                                                        >
                                                            <svg className="w-[0.375rem] h-[0.25rem] 2xl:w-[0.5625rem] 2xl:h-[0.4375rem] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[0.875rem] leading-[1.2] tracking-[-0.06em] font-normal
                                                        2xl:text-[1.125rem] 2xl:leading-[1.3]"
                                                        >{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                            </div>

                            <WhiteBtn className="font-medium text-[1.125rem] h-[2.875rem] lg:h-[4.375rem] w-full rounded-full
                            lg:text-[1.25rem]"
                             onClick={() => {
                                    setTariff(card.title);
                                    setIsOpenPopup(true)}}
                            >
                                {card.buttonText}
                            </WhiteBtn>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}