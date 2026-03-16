import { useTranslation } from "react-i18next";
import WhiteBtn from "@/ui/WhiteBtn";
import { usePopup } from "@/сontext/Popup/usePopup";

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
    const { setIsOpen: setIsOpenPopup } = usePopup();
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
        <section id="#pricing" className="pricing gsap-up my-container mb-[4.375rem] sm:mb-25 mdd:mb-24 2xl:mb-50 cover-gradient overflow-visible text-white rounded-[1.25rem] sm:rounded-[1.875rem] 2xl:rounded-[3.75rem] pt-[0.3125rem] pb-[3.125rem]">

            <h2 className="leading-[1] uppercase text-[2.5rem] sm:text-[4.875rem] 2xl:text-[7.5rem] font-semibold text-white pt-10 3xl:pt-[4.375rem] pb-[2rem] sm:pb-[1.125rem] 3xl:pb-[2.8125rem] text-center">{title}</h2>

            {/* DESKTOP: Верхние 3 вертикальные карточки */}
            <div className="hidden 3xl:grid grid-cols-3 gap-x-5 mb-15">
                {cards.slice(1, 4).map((card, i) => {
                    const { left, right } = splitIncluded(card);
                    const cols = right.length > 0 ? 2 : 1; 
                    return (
                        <div key={i} className="border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[1.75rem] p-[0.625rem] flex flex-col relative h-full">
                            {/* Верхний блок */}
                            <div className="bg-white text-black rounded-[1.75rem] p-6 relative">
                                <div className="min-h-[7.0625rem] pb-[0.75rem] flex justify-between items-start">
                                    <div className="space-y-1">
                                        {card.title && (<h3 className="text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                        {card.description && (<p className="text-[1.125rem] font-normal leading-[1.3] tracking-[-0.04em]">{card.description}</p>)}
                                    </div>
                                    <div className="space-y-1 text-right">
                                        {card.price && (<p className="text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                        {card.priceDescription && (<p className=" text-[1.125rem] font-normal leading-[1.3] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                    </div>
                                </div>
                                {card.monthLimits && (
                                    <div className="text-black ">
                                        <h4 className="mb-[0.75rem] text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.monthLimitsTitle}</h4>
                                        <ul className="text-[0.8125rem] space-y-[0.25rem]">
                                            {card.monthLimits.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[0.3125rem]">
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

                                <div className="px-[1.4375rem]">
                                    {card.planPrice && (
                                        <p className="mb-[1.875rem] pt-[0.9375rem] text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal">{card.planPrice}</p>
                                    )}
                                    {left.length > 0 && (
                                        <h4 className="mb-[0.9375rem] text-white text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                    )}

                                    <div className={`grid grid-cols-1 3xl:grid-cols-${cols} gap-2 3xl:gap-4 mb-[1.875rem]`}>
                                        {left.length > 0 && (
                                            <ul className="space-y-2">
                                                {left.map((item, idx) => (
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

                                        {right.length > 0 && (
                                            <ul className="space-y-2">
                                                {right.length > 0 && card.limitsTitle && (
                                                    <>
                                                        <h4 className="text-[1.5rem] font-semibold mb-2">{card.limitsTitle}</h4>
                                                        {right.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                                <span className="mt-[0.1875rem] w-[1.0625rem] h-[1.0625rem] bg-white rounded-full flex justify-center items-center text-white">
                                                                    <svg className="w-[0.5625rem] h-[0.4375rem] text-black">
                                                                        <use href="./icons/sprite/sprite.svg#check"></use>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal">{item}</span>
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
                                 onClick={() => setIsOpenPopup(true)}
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
                        <div className=" border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[1.75rem] w-full h-full grid grid-cols-3 gap-8 relative ">
                            {/* Левый блок */}
                            <div className="p-[0.625rem]">
                                <div className="bg-white text-black rounded-[1.75rem] p-6 relative">
                                    <div className="min-h-[7.0625rem] pb-[0.75rem] flex justify-between items-start">
                                        <div className="space-y-1">
                                            {card.title && (<h3 className="text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                            {card.description && (<p className="text-[1.125rem] font-normal leading-[1.3] tracking-[-0.04em]">{card.description}</p>)}
                                        </div>
                                        <div className="space-y-1 text-right">
                                            {card.price && (<p className="text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                            {card.priceDescription && (<p className=" text-[1.125rem] font-normal leading-[1.3] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                        </div>
                                    </div>

                                    {card.monthLimits && (
                                        <div className=" text-black ">
                                            <h4 className="mb-[0.75rem] text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.monthLimitsTitle}</h4>
                                            <ul className="text-[0.8125rem] space-y-[0.25rem]">
                                                {card.monthLimits.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.3125rem]">
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
                                <div className="p-[0.625rem]">
                                    <div className="px-[1.125rem]">
                                        <h4 className="mb-[0.9375rem] text-white text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                        <ul className="space-y-1.5">
                                            {left.map((item, idx) => (
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
                                    </div>
                                </div>
                            )}

                            {/* Правый блок */}
                            {right.length > 0 && (
                                <div className="p-[0.625rem] flex flex-col justify-between relative">
                                    <div className="block px-[1.125rem]">
                                        {card.limitsTitle && (
                                            <h4 className="mb-[0.9375rem] text-white text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.limitsTitle}</h4>
                                        )}
                                        <ul className="space-y-1.5">
                                            {right.map((item, idx) => (
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
                                    </div>

                                    {card.whiteLabel && (
                                        <span className="inline-flex h-[2.1875rem] items-center justify-center absolute top-[0.625rem] right-[0.625rem] bg-white 
                                      text-black rounded-[6.25rem] px-[0.625rem] text-[1.125rem] leading-[1.3] tracking-[-0.04em]  ">
                                            {card.whiteLabel}
                                        </span>
                                    )}

                                    <WhiteBtn className="font-medium text-[1.25rem] tracking-[-0.04em] h-[4.375rem] w-full rounded-full"
                                     onClick={() => setIsOpenPopup(true)}
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
            <div className="grid grid-cols-1 mdd:grid-cols-2 gap-y-10 gap-x-5 3xl:hidden">
                {cards.map((card, i) => {
                    const { left, right } = splitIncluded(card);
                    return (
                        <div key={i} className={`border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[1.125rem] 2xl:rounded-[1.75rem] p-[0.625rem] 2xl:p-[0.9375rem] flex flex-col relative h-full justify-between`}>
                            <div className="flex flex-col">
                                <div className="bg-white text-black rounded-[1.125rem] p-[0.75rem] xl:p-[1.25rem] relative">
                                    <div className="flex justify-between items-start mdd:min-h-[4.0625rem]">
                                        <div className="space-y-1">
                                            {card.title && (<h3 className="text-[1.625rem] 2xl:text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                            {card.description && (<p className="max-w-[9.6875rem] sm:max-w-[initial] text-[0.875rem] 2xl:text-[1.125rem] font-normal leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em]">{card.description}</p>)}
                                        </div>
                                        <div className="space-y-1 text-right">
                                            {card.price && (<p className="text-[1.625rem] 2xl:text-[2.5rem] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                            {card.priceDescription && (<p className=" text-[0.875rem] 2xl:text-[1.125rem] font-normal leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                        </div>
                                    </div>

                                    {card.monthLimits && (
                                        <div className="mt-[1.875rem] mdd:mt-[0.5rem]">
                                            <h4 className="mb-2.5 text-black text-[0.875rem] 2xl:text-[1.5rem] 2xl:mb-[0.625rem] leading-[1.3] 2xl:leading-[1.1] tracking-[-0.04em] 2xl:tracking-[-0.06em] font-semibold">{card.monthLimitsTitle}</h4>
                                            <ul className="text-[0.8125rem] space-y-[0.1875rem]">
                                                {card.monthLimits.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                        <span className="shrink-0 mt-[0.1875rem] w-[0.75rem] h-[0.75rem] 2xl:w-[1.0625rem] 2xl:h-[1.0625rem] bg-black rounded-full flex justify-center items-center text-black">
                                                            <svg className="w-[0.375rem] h-[0.25rem] 2xl:w-[0.5625rem] 2xl:h-[0.4375rem] text-white">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    )}
                                    {card.blackLabel && (
                                        <span className="hidden sm:inline-flex h-[2.1875rem] items-center justify-center absolute bottom-[0.625rem] 2xl:bottom-[1.25rem] right-[0.625rem] 2xl:right-[1.25rem] bg-black border-dusty-blue border-solid
                                      text-white rounded-[6.25rem] px-[0.625rem] 2xl:px-[0.9375rem] text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] tracking-[-0.04em]  ">
                                            {card.blackLabel}
                                        </span>
                                    )}
                                </div>

                                {card.planPrice && (<p className="sm:mb-[-0.625rem] 2xl:mb-[-0.3125rem] 2xl:pt-[0.9375rem] px-[0.75rem] pt-[0.625rem] text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] font-normal">{card.planPrice}</p>)}
                                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-4 md:gap-0 min-h-[7.5rem] mb-[1.875rem]">
                                    {left.length > 0 && (
                                        <div className="px-[0.75rem] 2xl:px-[1.25rem] flex flex-col gap-2 pt-[1.875rem] sm:pt-[2.5rem]">
                                            <h4 className="text-white text-[0.9375rem] 2xl:text-[1.5rem] 2xl:mb-[0.3125rem] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                            <ul className="space-y-1">
                                                {left.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[0.3125rem]">
                                                        <span className="mt-[0.1875rem] shrink-0 w-[0.75rem] h-[0.75rem] 2xl:w-[1.0625rem] 2xl:h-[1.0625rem] bg-white rounded-full flex justify-center items-center text-white">
                                                            <svg className="w-[0.375rem] h-[0.25rem] 2xl:w-[0.5625rem] 2xl:h-[0.4375rem] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className=" text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {right.length > 0 && (
                                        <div className="px-[0.75rem] flex flex-col gap-2 sm:pt-[2.5rem]">
                                            {card.limitsTitle ? (
                                                <h4 className="text-white text-[0.9375rem] 2xl:text-[1.5rem] 2xl:mb-[0.3125rem]  leading-[1.1] tracking-[-0.06em] font-semibold pt-[1.25rem] sm:pt-0">{card.limitsTitle}</h4>
                                            ) : (
                                                <h4 className="hidden sm:block text-transparent text-[0.9375rem] 2xl:mb-[0.3125rem]  2xl:text-[1.5rem] leading-[1.1] tracking-[-0.06em] font-semibold">*</h4>
                                            )}
                                            <ul className="space-y-1.5 ">
                                                {right.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="mt-[0.1875rem] shrink-0 w-[0.75rem] h-[0.75rem] 2xl:w-[1.0625rem] 2xl:h-[1.0625rem] bg-white rounded-full flex justify-center items-center text-white">
                                                            <svg className="w-[0.375rem] h-[0.25rem] 2xl:w-[0.5625rem] 2xl:h-[0.4375rem] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <WhiteBtn className="font-medium text-[1.125rem] lg:text-[1.25rem] h-[2.875rem] lg:h-[4.375rem] w-full rounded-full"
                             onClick={() => setIsOpenPopup(true)}
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