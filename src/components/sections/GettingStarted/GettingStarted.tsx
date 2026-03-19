import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import GettingStartedCard from "./GettingStartedCard";

export type GettingStartedCardType = {
    title: string;
    description: string;
    count: string;
};

export default function GettingStarted() {
    const { t } = useTranslation();
    const cards = t("gettingStarted.cards", { returnObjects: true }) as GettingStartedCardType[];
    const title = t("gettingStarted.title");

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const desktopGrid = [
        [cards[0], cards[1], null, cards[2]],
        [null, cards[3], cards[4], cards[5]]
    ];

    const font = t("gettingStarted.font");

    return (
        <section id="#how-to-start" className={`getting-started gsap-up my-container  
             ${t('lang') === "ru" ?  "pt-[2.1875rem] sm:pt-[3.125rem] 2xl:pt-[3.125rem] mb-[4.375rem] xs:mb-[6.25rem] md:mb-[6.25rem] 2xl:mb-[12.5rem]" : 
                "pt-[2.1875rem] sm:pt-[3.125rem] 2xl:pt-[3.125rem] mb-[4.375rem] sm:mb-[5.9375rem] md:mb-[6.5625rem] 2xl:mb-[12.5rem]"}
                        `}>

            {/* Описание + стрелки */}
            <div className={`flex justify-between items-center
                ${t('lang') === "ru" ? "" : "2xl:-mt-[0.625rem]"}
                `}>
                {/* Заголовок секции */}
                <h2 className={`leading-[1] 2xl:leading-[0.88] tracking-[-0.03em] font-${font}
                ${t('lang') === "ru" ? "mb-[1.25rem] text-[1.5625rem] xs:text-[1.5625rem] md:text-[1.5625rem] 2xl:text-[2.5rem] 2xl:mb-[1.875rem] 2xl:tracking-[-0.05em] 3xl:text-[3.4375rem] 3xl:mb-[2.5rem] " : 
                    " mb-[1.25rem] text-[1.5625rem] sm:text-[1.875rem] md:text-[1.5625rem] 2xl:text-[2.8125rem] 2xl:mb-[2.5rem] 2xl:tracking-[-0.05em] 3xl:text-[3.4375rem] 3xl:mb-[2.5rem] "}              
                `}>{title}</h2>

                <div className="xs:flex gap-4 items-center hidden text-grey mdd:hidden">
                    <button ref={prevRef} className="cursor-pointer hover:text-black">
                        <svg className="w-[1.3125rem] h-[1rem]">
                            <use href="/icons/sprite/sprite.svg#arrow-left" />
                        </svg>
                    </button>
                    <button ref={nextRef} className="cursor-pointer hover:text-black">
                        <svg className="w-[1.3125rem] h-[1rem]">
                            <use href="/icons/sprite/sprite.svg#arrow-right" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="mdd:hidden">
                <Swiper
                    modules={[Navigation]}
                    className="!overflow-visible gettingstarted-swiper"
                    onBeforeInit={(swiper) => {
                        // @ts-expect-error: ewe
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-expect-error: ewew
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    spaceBetween={3}
                    slidesPerView={1.168}
                    breakpoints={{
                        375: {
                            spaceBetween: 3,
                            slidesPerView: 1.168,
                        },
                        420: {
                            spaceBetween: 5,
                            slidesPerView: 1.6,
                        },
                        480: {
                            spaceBetween: 5,
                            slidesPerView: 1.8,
                        },
                        530: {
                            spaceBetween: 5,
                            slidesPerView: 2.05,
                        },

                        670: {
                            spaceBetween: 5,
                            slidesPerView: 2.3,
                        },
                        768: {
                            spaceBetween: 5,
                            slidesPerView: 2.8,
                        },
                        840: {
                            spaceBetween: 5,
                            slidesPerView: 3.1,
                        },
                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <GettingStartedCard card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* DESKTOP / >=48rem */}
            <div className="hidden mdd:grid grid-cols-4 md:gap-[0.3125rem] 2xl:gap-[0.5rem]">
                {desktopGrid.map((row, rowIndex) =>
                    row.map((card, colIndex) =>
                        card ? (
                            <GettingStartedCard key={`${rowIndex}-${colIndex}`} card={card} />
                        ) : (
                            <div key={`${rowIndex}-${colIndex}`} /> // пустой слот
                        )
                    )
                )}
            </div>
        </section>
    );
}