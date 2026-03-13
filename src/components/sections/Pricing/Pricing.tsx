import { useTranslation } from "react-i18next";
import WhiteBtn from "@/ui/WhiteBtn";

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
        <section className="my-container mb-[70px] sm:mb-25 2xl:mb-50 cover-gradient overflow-visible text-white rounded-[20px] sm:rounded-[30px] 2xl:rounded-[60px] pt-[5px] pb-[50px]">

            <h2 className="leading-[1] uppercase text-[40px] sm:text-[78px] 2xl:text-[120px] font-semibold text-white pt-10 3xl:pt-[70px] pb-9 3xl:pb-[45px] text-center">{title}</h2>

            {/* DESKTOP: Верхние 3 вертикальные карточки */}
            <div className="hidden 3xl:grid grid-cols-3 gap-x-5 mb-15">
                {cards.slice(1, 4).map((card, i) => {
                    const { left, right } = splitIncluded(card);
                    return (
                        <div key={i} className="border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[28px] p-[10px] flex flex-col relative h-full">
                            {/* Верхний блок */}
                            <div className="bg-white text-black rounded-[28px] p-6 relative">
                                <div className="min-h-[113px] pb-[12px] flex justify-between items-start">
                                    <div className="space-y-1">
                                        {card.title && (<h3 className="text-[40px] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                        {card.description && (<p className="text-[18px] font-normal leading-[1.3] tracking-[-0.04em]">{card.description}</p>)}
                                    </div>
                                    <div className="space-y-1 text-right">
                                        {card.price && (<p className="text-[40px] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                        {card.priceDescription && (<p className=" text-[18px] font-normal leading-[1.3] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                    </div>
                                </div>
                                {card.monthLimits && (
                                    <div className="text-black ">
                                        <h4 className="mb-[12px] text-[24px] leading-[1.1] tracking-[-0.06em] font-semibold">{card.monthLimitsTitle}</h4>
                                        <ul className="text-[13px] space-y-[4px]">
                                            {card.monthLimits.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[5px]">
                                                    <span className="mt-[3px] w-[17px] h-[17px] bg-black rounded-full flex justify-center items-center text-black">
                                                        <svg className="w-[9px] h-[7px] text-white">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[18px] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {card.blackLabel && (
                                    <span className="inline-flex h-[35px] items-center justify-center absolute bottom-[20px] right-[20px] bg-black
                                      text-white rounded-[100px] px-[14px] text-[18px] leading-[1.3] tracking-[-0.04em]  ">
                                        {card.blackLabel}
                                    </span>
                                )}
                            </div>

                            {/* Второй блок */}
                            <div className="flex flex-col h-full justify-between">

                                <div className="px-[23px]">
                                    {card.planPrice && (
                                        <p className="mb-[30px] pt-[15px] text-[18px] leading-[1.3] tracking-[-0.04em] font-normal">{card.planPrice}</p>
                                    )}
                                    {left.length > 0 && (
                                        <h4 className="mb-[15px] text-white text-[24px] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                    )}

                                    <div className="grid grid-cols-1 3xl:grid-cols-2 gap-2 3xl:gap-4 mb-[30px]">
                                        {left.length > 0 && (
                                            <ul className="space-y-2">
                                                {left.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[5px]">
                                                        <span className="mt-[3px] w-[17px] h-[17px] bg-white rounded-full flex justify-center items-center text-white">
                                                            <svg className="w-[9px] h-[7px] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[18px] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {right.length > 0 && (
                                            <ul className="space-y-2">
                                                {right.length > 0 && card.limitsTitle && (
                                                    <>
                                                        <h4 className="text-[24px] font-semibold mb-2">{card.limitsTitle}</h4>
                                                        {right.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-[5px]">
                                                                <span className="mt-[3px] w-[17px] h-[17px] bg-white rounded-full flex justify-center items-center text-white">
                                                                    <svg className="w-[9px] h-[7px] text-black">
                                                                        <use href="./icons/sprite/sprite.svg#check"></use>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[14px] leading-[1.2] tracking-[-0.04em] font-normal">{item}</span>
                                                            </li>
                                                        ))}
                                                    </>
                                                )}
                                                {right.length > 0 && !card.limitsTitle && right.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[5px]">
                                                        <span className="mt-[3px] w-[17px] h-[17px] bg-white rounded-full flex justify-center items-center text-white">
                                                            <svg className="w-[9px] h-[7px] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[18px] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <WhiteBtn className="font-medium text-[20px] tracking-[-0.04em] h-[70px] w-full rounded-full">
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
                        <div className=" border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[28px] w-full h-full grid grid-cols-3 gap-8 relative ">
                            {/* Левый блок */}
                            <div className="p-[10px]">
                                <div className="bg-white text-black rounded-[28px] p-6 relative">
                                    <div className="min-h-[113px] pb-[12px] flex justify-between items-start">
                                        <div className="space-y-1">
                                            {card.title && (<h3 className="text-[40px] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                            {card.description && (<p className="text-[18px] font-normal leading-[1.3] tracking-[-0.04em]">{card.description}</p>)}
                                        </div>
                                        <div className="space-y-1 text-right">
                                            {card.price && (<p className="text-[40px] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                            {card.priceDescription && (<p className=" text-[18px] font-normal leading-[1.3] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                        </div>
                                    </div>

                                    {card.monthLimits && (
                                        <div className=" text-black ">
                                            <h4 className="mb-[12px] text-[24px] leading-[1.1] tracking-[-0.06em] font-semibold">{card.monthLimitsTitle}</h4>
                                            <ul className="text-[13px] space-y-[4px]">
                                                {card.monthLimits.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[5px]">
                                                        <span className="mt-[3px] w-[17px] h-[17px] bg-black rounded-full flex justify-center items-center text-black">
                                                            <svg className="w-[9px] h-[7px] text-white">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[18px] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Центральный блок */}
                            {left.length > 0 && (
                                <div className="p-[10px]">
                                    <div className="px-[18px]">
                                        <h4 className="mb-[15px] text-white text-[24px] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                        <ul className="space-y-1.5">
                                            {left.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[5px]">
                                                    <span className="mt-[3px] w-[17px] h-[17px] bg-white rounded-full flex justify-center items-center text-white">
                                                        <svg className="w-[9px] h-[7px] text-black">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[18px] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Правый блок */}
                            {right.length > 0 && (
                                <div className="p-[10px] flex flex-col justify-between relative">
                                    <div className="block px-[18px]">
                                        {card.limitsTitle && (
                                            <h4 className="mb-[15px] text-white text-[24px] leading-[1.1] tracking-[-0.06em] font-semibold">{card.limitsTitle}</h4>
                                        )}
                                        <ul className="space-y-1.5">
                                            {right.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[5px]">
                                                    <span className="mt-[3px] w-[17px] h-[17px] bg-white rounded-full flex justify-center items-center text-white">
                                                        <svg className="w-[9px] h-[7px] text-black">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[18px] leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {card.whiteLabel && (
                                        <span className="inline-flex h-[35px] items-center justify-center absolute top-[10px] right-[10px] bg-white 
                                      text-black rounded-[100px] px-[10px] text-[18px] leading-[1.3] tracking-[-0.04em]  ">
                                            {card.whiteLabel}
                                        </span>
                                    )}

                                    <WhiteBtn className="font-medium text-[20px] tracking-[-0.04em] h-[70px] w-full rounded-full">
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
                        <div key={i} className={`border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[18px] 2xl:rounded-[28px] p-[10px] 2xl:p-[15px] flex flex-col relative h-full justify-between`}>
                            <div className="flex flex-col">
                                <div className="bg-white text-black rounded-[18px] p-[12px] xl:p-[20px] relative">
                                    <div className="min-h-[90px] pb-[12px] flex justify-between items-start">
                                        <div className="space-y-1">
                                            {card.title && (<h3 className="text-[26px] 2xl:text-[40px] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                            {card.description && (<p className="max-w-[155px] sm:max-w-[initial] text-[14px] 2xl:text-[18px] font-normal leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em]">{card.description}</p>)}
                                        </div>
                                        <div className="space-y-1 text-right">
                                            {card.price && (<p className="text-[26px] 2xl:text-[40px] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                            {card.priceDescription && (<p className=" text-[14px] 2xl:text-[18px] font-normal leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                        </div>
                                    </div>

                                    {card.monthLimits && (
                                        <div className="mt-[25px]">
                                            <h4 className="mb-2.5 text-black text-[14px] 2xl:text-[24px] 2xl:mb-[10px] leading-[1.3] 2xl:leading-[1.1] tracking-[-0.04em] 2xl:tracking-[-0.06em] font-semibold">{card.monthLimitsTitle}</h4>
                                            <ul className="text-[13px] space-y-[3px]">
                                                {card.monthLimits.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[5px]">
                                                        <span className="shrink-0 mt-[3px] w-[12px] h-[12px] 2xl:w-[17px] 2xl:h-[17px] bg-black rounded-full flex justify-center items-center text-black">
                                                            <svg className="w-[6px] h-[4px] 2xl:w-[9px] 2xl:h-[7px] text-white">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[14px] 2xl:text-[18px] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    )}
                                    {card.blackLabel && (
                                        <span className="hidden sm:inline-flex h-[35px] items-center justify-center absolute bottom-[10px] 2xl:bottom-[20px] right-[10px] 2xl:right-[20px] bg-black border-dusty-blue border-solid
                                      text-white rounded-[100px] px-[10px] 2xl:px-[15px] text-[14px] 2xl:text-[18px] leading-[1.2] tracking-[-0.04em]  ">
                                            {card.blackLabel}
                                        </span>
                                    )}
                                </div>

                                {card.planPrice && (<p className="sm:mb-[-10px] 2xl:mb-[-5px] 2xl:pt-[15px] px-[12px] pt-[10px] text-[14px] 2xl:text-[18px] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] font-normal">{card.planPrice}</p>)}
                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:gap-0 min-h-[150px] mb-[40px]">
                                    {left.length > 0 && (
                                        <div className="px-[12px] 2xl:px-[20px] flex flex-col gap-2 pt-[30px] sm:pt-[40px]">
                                            <h4 className="text-white text-[15px] 2xl:text-[24px] 2xl:mb-[5px] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                            <ul className="space-y-1.5">
                                                {left.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-[5px]">
                                                        <span className="mt-[3px] shrink-0 w-[12px] h-[12px] 2xl:w-[17px] 2xl:h-[17px] bg-white rounded-full flex justify-center items-center text-white">
                                                            <svg className="w-[6px] h-[4px] 2xl:w-[9px] 2xl:h-[7px] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className=" text-[14px] 2xl:text-[18px] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {right.length > 0 && (
                                        <div className="px-[12px] flex flex-col gap-2 sm:pt-[40px]">
                                            {card.limitsTitle ? (
                                                <h4 className="text-white text-[15px] 2xl:text-[24px] 2xl:mb-[5px]  leading-[1.1] tracking-[-0.06em] font-semibold pt-[20px] sm:pt-0">{card.limitsTitle}</h4>
                                            ) : (
                                                <h4 className="hidden sm:block text-transparent text-[15px] 2xl:mb-[5px]  2xl:text-[24px] leading-[1.1] tracking-[-0.06em] font-semibold">*</h4>
                                            )}
                                            <ul className="space-y-1.5 ">
                                                {right.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="mt-[3px] shrink-0 w-[12px] h-[12px] 2xl:w-[17px] 2xl:h-[17px] bg-white rounded-full flex justify-center items-center text-white">
                                                            <svg className="w-[6px] h-[4px] 2xl:w-[9px] 2xl:h-[7px] text-black">
                                                                <use href="./icons/sprite/sprite.svg#check"></use>
                                                            </svg>
                                                        </span>
                                                        <span className="text-[14px] 2xl:text-[18px] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] font-normal">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <WhiteBtn className="font-medium text-[18px] lg:text-[20px] h-[46px] lg:h-[70px] w-full rounded-full">
                                {card.buttonText}
                            </WhiteBtn>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}