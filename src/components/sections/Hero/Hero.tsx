import { useTranslation } from "react-i18next";
import { formatHeader } from "@/utils/formaters";
import { useState, useLayoutEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { usePopup } from "@/сontext/Popup/usePopup";

type CardPosition = {
  x: number;
  y: number;
  trans: string;
};

export default function Hero() {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(0);
  const { setIsOpen: setIsOpenPopup } = usePopup();

  const cards = t("hero.cards", { returnObjects: true }) as {
    title: string;
    description: string;
    imageMob: string;
    imageDesk: string;
    imageTab: string;
  }[];

  const font = t("hero.font");

  useLayoutEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const mobileOffsets = [
    "translate-y-0",
    "translate-y-[12%]",
    "translate-y-0",
    "translate-y-[12%]",
    "translate-y-0",
  ];

  /**
   * Desktop layouts
   * координаты задаются вручную в процентах
   */

  const desktopLayouts: Record<string, CardPosition[]> = {
    lg: [
      { x: 0, y: 0, trans: "translate(0%,0%)" },
      { x: 25.5, y: 47, trans: "translate(-50%,0%)" },
      { x: 50, y: 100, trans: "translate(-50%,100%)" },
      { x: 74.5, y: 47, trans: "translate(-50%,0%)" },
      { x: 100, y: 0, trans: "translate(-100%,0%)" },
    ],

    xl: [
      { x: 0, y: 0, trans: "translate(0%,0%)" },
      { x: 29.5, y: 25, trans: "translate(-50%,0%)" },
      { x: 50, y: 100, trans: "translate(-50%,100%)" },
      { x: 70.5, y: 25, trans: "translate(-50%,0%)" },
      { x: 100, y: 0, trans: "translate(-100%,0%)" },
    ],

    xxl: [
      { x: 0, y: 0, trans: "translate(0%,0%)" },
      { x: 29.5, y: 25, trans: "translate(-50%,0%)" },
      { x: 50, y: 100, trans: "translate(-50%,100%)" },
      { x: 70.5, y: 25, trans: "translate(-50%,0%)" },
      { x: 100, y: 0, trans: "translate(-100%,0%)" },
    ],
  };

  const layout = useMemo(() => {
    if (windowWidth >= 1880) return desktopLayouts.xxl;
    if (windowWidth >= 1536) return desktopLayouts.xl;
    if (windowWidth >= 950) return desktopLayouts.lg;
    return [];
  }, [windowWidth]);

  return (
    <section className="hero mb-[1.5625rem] pb-[4.0625rem] my-container cover-gradient text-white rounded-b-[1.875rem] relative overflow-hidden
    sm:mb-[3.125rem] sm:pb-[5rem] mdd:pb-[1.875rem] md:rounded-b-[3.75rem] 
    2xl:mb-[5.625rem] 2xl:pb-[3.125rem] 2xl:rounded-b-[7.5rem] 
    3xl:mb-[6.25rem] 3xl:pb-[6.25rem]">

      {/* Mobile Swiper */}
      {windowWidth < 640 && (
        <div className="pb-[2.5rem] pt-[0.9375rem]">
          <Swiper
            spaceBetween={36}
            slidesPerView={1.5}
            breakpoints={{
              0: { spaceBetween: 35, slidesPerView: 1.5 },
              390: { spaceBetween: 35, slidesPerView: 1.6 },
              430: { spaceBetween: 25, slidesPerView: 1.8 },
              480: { spaceBetween: 25, slidesPerView: 2.2 },
              540: { spaceBetween: 25, slidesPerView: 2.5 },
            }}
            className="!overflow-visible select-none mb-[12%]"
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`w-[100%] min-h-[16.875rem] aspect-[22/32] glass rounded-[1.25rem] p-[1.25rem] overflow-hidden text-white flex flex-col justify-between ${mobileOffsets[i]}`}
                >
                  <div>
                    <h3 className="text-[1.25rem] leading-[1] tracking-[-0.04em] mb-[0.375rem]">
                      {formatHeader(card.title)}
                    </h3>
                    <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] mb-[0.3125rem]">
                      {formatHeader(card.description)}
                    </p>
                  </div>

                  <img
                    src={card.imageMob}
                    className="w-full h-auto object-cover"
                    alt={card.title}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      )}

      {/* Tablet Two Rows */}
      {windowWidth >= 640 && windowWidth < 950 && (
        <div className="flex flex-col gap-[1.25rem] mb-[7.5rem] pt-[3.75rem]">
          <div className="flex justify-center gap-[0.75rem]">
            {cards.slice(0, 2).map((card, i) => (
              <div
                key={i}
                className="
                select-none transition-all duration-300 ease-out
  hover:-translate-y-[0.625rem] hover:scale-[1.04] hover:z-10
  hover:shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.35)]
                w-full max-w-[33.33%] aspect-square glass rounded-[1.875rem] p-[0.9375rem] overflow-hidden text-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[1.125rem] leading-[1] tracking-[-0.04em] mb-[0.375rem]">
                    {formatHeader(card.title)}
                  </h3>
                  <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] mb-[0.3125rem]">
                    {formatHeader(card.description)}
                  </p>
                </div>

                <img
                  src={card.imageTab}
                  className="w-full h-auto object-cover"
                  alt={card.title}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-[0.75rem]">
            {cards.slice(2, 5).map((card, i) => (
              <div
                key={i}
                className="
                select-none transition-all duration-300 ease-out
  hover:-translate-y-[0.625rem] hover:scale-[1.04] hover:z-10
  hover:shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.35)]
                w-full max-w-[33.33%] aspect-square glass rounded-[1.875rem] p-[0.9375rem] overflow-hidden text-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[1.125rem] leading-[1] tracking-[-0.04em] mb-[0.375rem]">
                    {formatHeader(card.title)}
                  </h3>
                  <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] mb-[0.3125rem]">
                    {formatHeader(card.description)}
                  </p>
                </div>

                <img
                  src={card.imageTab}
                  className="w-full h-auto object-cover"
                  alt={card.title}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop layout */}
      {windowWidth >= 950 && (
        <div className="w-full pt-[0.9375rem] max-w-[100%] mx-auto 
        2xl:max-w-[81.5625rem] 2xl:pt-[1.875rem] 3xl:pt-[3.4375rem] 3xl:max-w-[85.3125rem]">
          <div className="relative w-full mdd:aspect-[935/462] 2xl:aspect-[1305/434] 3xl:aspect-[1365/434]">

            {layout.map((pos, i) => (
              <div
                key={i}
                className="p-[0.9375rem] rounded-[1.875rem] absolute glass flex flex-col justify-between aspect-square
  transition-all duration-300 ease-out select-none
  hover:-translate-y-[0.625rem] hover:scale-[1.04] hover:z-10
  hover:shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.35)]
  mdd:w-[20.5%] 2xl:w-[18%] 2xl:p-[1.25rem]
  3xl:w-[18%] 3xl:p-[1.5625rem]"
                style={{
                  left: `${pos.x}%`,
                  bottom: `${pos.y}%`,
                  transform: `${pos.trans}`,
                }}
              >
                <div>
                  <h3 className="text-[1.125rem] leading-[1] tracking-[-0.04em] mb-[0.3125rem] font-medium
                  2xl:text-[1.375rem] 2xl:tracking-[-0.06em] ">{formatHeader(cards[i].title)}</h3>

                  <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] 2xl:text-[1rem]  2xl:leading-[1.3]">
                    {formatHeader(cards[i].description)}
                  </p>
                </div>

                <img
                  src={cards[i].imageDesk}
                  className="w-full h-auto object-cover"
                  alt={cards[i].title}
                />

              </div>
            ))}

          </div>

          {/* Text Section */}
          <div className="-mt-[12.5rem] text-center flex flex-col items-center max-w-[20.0625rem] mx-auto
          2xl:-mt-[3.125rem] 2xl:max-w-[41.875rem] 3xl:-mt-[3.75rem]">
            <h1
              className={`text-[1.875rem] mb-[1.25rem] leading-[0.85] tracking-[-0.03em] font-${font} 2xl:text-[3.75rem] 3xl:mb-[1.5625rem]`}
            >
              {formatHeader(t("hero.title"))}
            </h1>

            <p className="mb-[1.5625rem] leading-[1.3] tracking-[-0.04em] 
            2xl:mb-[1.875rem] 2xl:text-[1.125rem] 2xl:max-w-[26.4375rem] 3xl:mb-[2.5rem] ">
              {t("hero.subtitle")}
            </p>

            <button className="glass w-full sm:w-[initial] px-[1.875rem] text-[1.125rem] h-[3.4375rem] rounded-[2.5rem] hover:scale-102 transition duration-300 cursor-pointer
            2xl:px-[3.125rem] 2xl:h-[4.375rem]"
              onClick={() => setIsOpenPopup(true)}
            >
              {t("hero.cta")}
            </button>
          </div>
        </div>
      )}
      {/* Text Section */}
      <div className="max-w-[20.0625rem] mdd:hidden text-center flex flex-col items-center mx-auto">
        <h1
          className={`mb-[1.25rem] text-[1.875rem] leading-[0.85] tracking-[-0.03em] font-${font}`}
        >
          {formatHeader(t("hero.title"))}
        </h1>

        <p className=" mb-[1.875rem] sm:mb-[3.75rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em]">
          {t("hero.subtitle")}
        </p>

        <button className="glass w-full sm:w-[initial] px-[1.875rem] text-[1.125rem] h-[3.4375rem] rounded-[2.5rem] hover:scale-102 transition duration-300 cursor-pointer"
          onClick={() => setIsOpenPopup(true)}
        >
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}