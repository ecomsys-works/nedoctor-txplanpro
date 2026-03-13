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

    return (
        <section className="container py-16 mx-auto">

            {/* Описание + стрелки */}
            <div className="flex justify-between items-center mb-4">
                {/* Заголовок секции */}
                <h2 className="text-[40px] md:text-[55px] font-bold mb-6 text-center">{title}</h2>

                <div className="flex gap-3 md:hidden">
                    <button ref={prevRef} className="w-10 h-10 bg-neutral-200 rounded-full cursor-pointer">←</button>
                    <button ref={nextRef} className="w-10 h-10 bg-neutral-200 rounded-full cursor-pointer">→</button>
                </div>
            </div>

            {/* MOBILE / TABLET <768px */}
            <div className="md:hidden">
                <Swiper
                    modules={[Navigation]}
                    className="!overflow-visible"
                    onBeforeInit={(swiper) => {
                        // @ts-expect-error: refs are initialized after render
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-expect-error: refs are initialized after render
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        360: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index} className="!w-[85%]">
                            <GettingStartedCard card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* DESKTOP / >=768px */}
            <div className="hidden md:grid grid-cols-4 gap-6">
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