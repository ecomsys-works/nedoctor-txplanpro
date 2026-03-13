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
        <section className="my-container mb-[70px] sm:mb-25 2xl:mb-50 cover-gradient overflow-visible text-white rounded-[20px] sm:rounded-[30px] 3xl:rounded-[60px] pt-[5px] pb-[50px]">

            <h2 className="leading-[1] uppercase text-[40px] sm:text-[78px] 3xl:text-[120px] font-semibold text-white pt-10 pb-9 text-center">{title}</h2>

            {/* DESKTOP: Верхние 3 вертикальные карточки */}
            <div className="hidden 2xl:grid grid-cols-3 gap-x-5 mb-15">
                {cards.slice(0, 3).map((card, i) => {
                    const { left, right } = splitIncluded(card);
                    return (
                        <div key={i} className="border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[18px] p-[10px] flex flex-col relative h-full">
                            {/* Верхний блок */}
                            <div className="bg-white rounded-[30px] p-6 relative">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-[24px] font-bold">{card.title}</h3>
                                        <p className="text-[16px] text-gray-700">{card.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[24px] font-bold">{card.price}</p>
                                        <p className="text-[16px] text-gray-700">{card.priceDescription}</p>
                                    </div>
                                </div>

                                {card.monthLimits && (
                                    <div className="mt-4">
                                        {card.monthLimitsTitle && (
                                            <p className="text-[16px] font-semibold text-black mb-1">
                                                {card.monthLimitsTitle}
                                            </p>
                                        )}
                                        <ul className="text-[14px] text-gray-700 space-y-1">
                                            {card.monthLimits.map((item, idx) => (
                                                <li key={idx}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {card.blackLabel && (
                                    <span className="absolute bottom-4 right-4 bg-black text-white px-4 py-1 rounded text-[18px]">
                                        {card.blackLabel}
                                    </span>
                                )}
                            </div>

                            {/* Второй блок */}
                            <div className="mt-12 text-[18px]">
                                <p className="mb-4">{card.planPrice}</p>
                                {left.length > 0 && <h4 className="text-[24px] font-semibold mb-4">{card.includedTitle}</h4>}
                                <div className="grid grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        {left.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-xs">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="space-y-2">
                                        {right.length > 0 && card.limitsTitle && (
                                            <>
                                                <h4 className="text-[24px] font-semibold mb-2">{card.limitsTitle}</h4>
                                                {right.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-2">
                                                        <span className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-xs">✓</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </>
                                        )}
                                        {right.length > 0 && !card.limitsTitle && right.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-xs">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>



                            <button className="mt-auto bg-white text-black text-[20px] h-[70px] rounded-[100px] w-full mt-8">
                                {card.buttonText}
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* DESKTOP: Нижняя горизонтальная карточка */}
            <div className="hidden 2xl:flex ">
                {(() => {
                    const card = cards[3];
                    const { left, right } = splitIncluded(card);
                    return (
                        <div className=" border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[18px] p-[10px] w-full h-full grid grid-cols-3 gap-20 relative ">
                            {/* Левый блок */}
                            <div>
                                <div className="bg-white rounded-[30px] p-6 relative">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-[24px] font-bold">{card.title}</h3>
                                            <p className="text-[16px] text-gray-700">{card.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[24px] font-bold">{card.price}</p>
                                            <p className="text-[16px] text-gray-700">{card.priceDescription}</p>
                                        </div>
                                    </div>

                                    {card.monthLimits && (
                                        <div className="mt-4">
                                            {card.monthLimitsTitle && (
                                                <p className="text-[16px] font-semibold text-black mb-1">
                                                    {card.monthLimitsTitle}
                                                </p>
                                            )}
                                            <ul className="text-[14px] text-gray-700 space-y-1">
                                                {card.monthLimits.map((item, idx) => (
                                                    <li key={idx}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {card.blackLabel && (
                                        <span className="absolute bottom-4 right-4 bg-black text-white px-4 py-1 rounded text-[18px]">
                                            {card.blackLabel}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Центральный блок */}
                            <div className="text-[18px]">
                                {left.length > 0 && (
                                    <>
                                        <h4 className="text-[24px] font-semibold mb-4">{card.includedTitle}</h4>
                                        <ul className="space-y-2">
                                            {left.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <span className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-xs">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>

                            {/* Правый блок */}
                            {right.length > 0 && (
                                <div className="text-[18px]">
                                    {card.limitsTitle && <h4 className="text-[24px] font-semibold mb-4">{card.limitsTitle}</h4>}
                                    <ul className="space-y-2">
                                        {right.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-xs">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <WhiteBtn className="font-medium text-[18px] h-[46px] w-full rounded-full">
                                        {card.buttonText}
                                    </WhiteBtn>
                                </div>
                            )}
                        </div>
                    );
                })()}
            </div>

            {/* MOBILE / TABLET */}
            <div className="grid grid-cols-1 mdd:grid-cols-2 gap-y-10 gap-x-5 2xl:hidden">
                {cards.map((card, i) => {
                    const { left, right } = splitIncluded(card);
                    return (
                        <div key={i} className={`border border-solid border-white/15 bg-[rgba(85, 85, 85, 0.1)] rounded-[18px] p-[10px] flex flex-col relative h-full`}>
                            <div className="bg-white text-black rounded-[18px] p-[12px] relative">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        {card.title && (<h3 className="text-[26px] font-semibold leading-[1] tracking-[-0.06em]">{card.title}</h3>)}
                                        {card.description && (<p className="max-w-[155px] sm:max-w-[initial] text-[14px] font-normal leading-[1.2] tracking-[-0.04em]">{card.description}</p>)}
                                    </div>
                                    <div className="space-y-1 text-right">
                                        {card.price && (<p className="text-[26px] font-semibold leading-[1] tracking-[-0.06em]">{card.price}</p>)}
                                        {card.priceDescription && (<p className=" text-[14px] font-normal leading-[1.2] tracking-[-0.04em]">{card.priceDescription}</p>)}
                                    </div>
                                </div>

                                {card.monthLimits && (
                                    <div className="mt-[25px]">
                                        <h4 className="mb-2.5 text-black text-[14px] leading-[1.3] tracking-[-0.04em] font-semibold">{card.monthLimitsTitle}</h4>
                                        <ul className="text-[13px] space-y-[4px]">
                                            {card.monthLimits.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[5px]">
                                                    <span className="mt-[3px] w-[12px] h-[12px] bg-black rounded-full flex justify-center items-center text-black">
                                                        <svg className="w-[6px] h-[4px] text-white">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[14px] leading-[1.2] tracking-[-0.04em] font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                )}
                                {card.blackLabel && (
                                    <span className="hidden sm:inline-flex h-[35px] items-center justify-center absolute bottom-3 right-3 bg-black border-dusty-blue border-solid
                                      text-white rounded-[100px] px-[10px] text-[14px] leading-[1.2] tracking-[-0.04em]  ">
                                        {card.blackLabel}
                                    </span>
                                )}
                            </div>

                            {card.planPrice && (<p className="sm:mb-[-10px] px-[12px] pt-[10px] text-[14px] leading-[1.2] tracking-[-0.04em] font-normal">{card.planPrice}</p>)}
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:gap-0 min-h-[150px] mb-[40px]">
                                {left.length > 0 && (
                                    <div className="px-[12px] flex flex-col gap-2 pt-[30px] sm:pt-[40px]">
                                        <h4 className="text-white text-[15px] leading-[1.1] tracking-[-0.06em] font-semibold">{card.includedTitle}</h4>
                                        <ul className="space-y-2">
                                            {left.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-[5px]">
                                                    <span className="mt-[3px] w-[12px] h-[12px] bg-white rounded-full flex justify-center items-center text-white">
                                                        <svg className="w-[6px] h-[4px] text-black">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[14px] leading-[1.2] tracking-[-0.04em] font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {right.length > 0 && (
                                    <div className="px-[12px] flex flex-col gap-2 sm:pt-[40px]">
                                        {card.limitsTitle ? (
                                            <h4 className="text-white text-[15px] leading-[1.1] tracking-[-0.06em] font-semibold pt-[20px] sm:pt-0">{card.limitsTitle}</h4>
                                        ) : (
                                            <h4 className="hidden sm:block text-transparent text-[15px] leading-[1.1] tracking-[-0.06em] font-semibold">*</h4>
                                        )}
                                        <ul className="space-y-2">
                                            {right.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="mt-[3px] w-[12px] h-[12px] bg-white rounded-full flex justify-center items-center text-white">
                                                        <svg className="w-[6px] h-[4px] text-black">
                                                            <use href="./icons/sprite/sprite.svg#check"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="text-[14px] leading-[1.2] tracking-[-0.04em] font-normal">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <WhiteBtn className="font-medium text-[18px] h-[46px] w-full rounded-full">
                                {card.buttonText}
                            </WhiteBtn>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}