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
        <section id="#how-to-start" className="getting-started gsap-up my-container pt-[2.1875rem] sm:pt-[3.125rem] 2xl:pt-[3.125rem] mb-[4.375rem] sm:mb-[5.9375rem] 2xl:mb-[12.5rem] ">

            {/* Описание + стрелки */}
            <div className="flex justify-between items-center">
                {/* Заголовок секции */}
                <h2 className={`text-[1.5625rem] sm:text-[1.875rem] 2xl:text-[2.5rem] 3xl:text-[3.4375rem] mb-[1.25rem] 2xl:mb-[1.875rem] 3xl:mb-[2.5rem] leading-[1] 3xl:leading-[0.88] tracking-[-0.03em] 3xl:tracking-[-0.05em] font-${font}`}>{title}</h2>

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
                    spaceBetween={5}
                    slidesPerView={1.15}
                    breakpoints={{
                        375: {
                            slidesPerView: 1.15,
                        },
                        420: {
                            slidesPerView: 1.6,
                        },
                        480: {
                            slidesPerView: 1.8,
                        },
                        530: {
                            slidesPerView: 2.05,
                        },

                        660: {
                            slidesPerView: 2.3,
                        },
                         768: {
                            slidesPerView: 2.8,
                        },
                            840: {
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
            <div className="hidden mdd:grid grid-cols-4 gap-[0.375rem]">
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