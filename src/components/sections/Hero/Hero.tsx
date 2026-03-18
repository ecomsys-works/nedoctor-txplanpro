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
    'mdd': [
      { x: 0, y: 0, trans: "translate(0%,0%)" },
      { x: 25.5, y: 48, trans: "translate(-50%,0%)" },
      { x: 50, y: 100, trans: "translate(-50%,100%)" },
      { x: 74.5, y: 48, trans: "translate(-50%,0%)" },
      { x: 100, y: 0, trans: "translate(-100%,0%)" },
    ],

    '2xl': [
      { x: 0, y: 0, trans: "translate(-2%,2%)" },
      { x: 29.5, y: 25, trans: "translate(-50%,0%)" },
      { x: 50, y: 100, trans: "translate(-50%,100%)" },
      { x: 70.5, y: 26, trans: "translate(-50%,0%)" },
      { x: 100, y: 0, trans: "translate(-98%,2%)" },
    ],

    '3xl': [
      { x: 0, y: 0, trans: "translate(0%,0%)" },
      { x: 29.5, y: 26, trans: "translate(-50%,0%)" },
      { x: 50, y: 100, trans: "translate(-50%,100%)" },
      { x: 70.5, y: 27, trans: "translate(-50%,0%)" },
      { x: 100, y: 0, trans: "translate(-100%,0%)" },
    ],
  };

    const layout = useMemo(() => {
    if (windowWidth >= 1880) return desktopLayouts['3xl'];
    if (windowWidth >= 1536) return desktopLayouts['2xl'];
    if (windowWidth >= 950) return desktopLayouts['mdd'];
    return [];
  }, [windowWidth]);

  return (
    <section className={`hero mb-[25px] pb-[65px] my-container cover-gradient text-white rounded-b-[30px] relative overflow-hidden
    sm:mb-[50px] sm:pb-[80px] md:mb-[60px]
    mdd:pb-[30px] md:rounded-b-[60px] 
    2xl:pb-[52px] 2xl:rounded-b-[120px] 2xl:mb-[50px]
    3xl:mb-[82px] 3xl:pb-[100px]
      ${t('lang') === "ru" ? "2xl:mb-[82px]" : "2xl:mb-[100px]"}
    `}>

      {/* Mobile Swiper */}
      {windowWidth < 640 && (
        <div className="pb-[40px] pt-[15px]">
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
                  className={`w-[100%] min-h-[270px] aspect-[22/32] glass rounded-[20px] p-[20px] overflow-hidden text-white flex flex-col justify-between ${mobileOffsets[i]}`}
                >
                  <div>
                    <h3 className="text-[20px] leading-[1] tracking-[-0.04em] mb-[6px]">
                      {formatHeader(card.title)}
                    </h3>
                    <p className="text-[14px] leading-[1.2] tracking-[-0.04em] mb-[5px]">
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
        <div className="flex flex-col gap-[20px] mb-[120px] pt-[60px]">
          <div className="flex justify-center gap-[12px]">
            {cards.slice(0, 2).map((card, i) => (
              <div
                key={i}
                className="
                select-none transition-all duration-300 ease-out
  hover:-translate-y-[10px] hover:scale-[1.04] hover:z-10
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                w-full max-w-[33.33%] aspect-square glass rounded-[30px] p-[15px] overflow-hidden text-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[18px] leading-[1] tracking-[-0.04em] mb-[6px]">
                    {formatHeader(card.title)}
                  </h3>
                  <p className="text-[14px] leading-[1.2] tracking-[-0.04em] mb-[5px]">
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

          <div className="flex justify-center gap-[12px]">
            {cards.slice(2, 5).map((card, i) => (
              <div
                key={i}
                className="
                select-none transition-all duration-300 ease-out
  hover:-translate-y-[10px] hover:scale-[1.04] hover:z-10
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                w-full max-w-[33.33%] aspect-square glass rounded-[30px] p-[15px] overflow-hidden text-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[18px] leading-[1] tracking-[-0.04em] mb-[6px]">
                    {formatHeader(card.title)}
                  </h3>
                  <p className="text-[14px] leading-[1.2] tracking-[-0.04em] mb-[5px]">
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
        <div className="w-full pt-[15px] max-w-[100%] mx-auto 
        2xl:max-w-[1305px] 2xl:pt-[35px] 3xl:pt-[55px] 3xl:max-w-[1365px]">
          <div className="relative w-full mdd:aspect-[935/462] 2xl:aspect-[1305/434] 3xl:aspect-[1365/434]">

            {layout.map((pos, i) => (
              <div
                key={i}
                className={`p-[15px] rounded-[30px] absolute glass flex flex-col justify-between aspect-square
  transition-all duration-300 ease-out select-none hover:-translate-y-[10px] hover:scale-[1.04] hover:z-10
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
  mdd:w-[20.5%] 2xl:w-[19%] 3xl:w-[18%]
   ${t('lang') === "ru" ? "2xl:px-[25px] 2xl:py-[25px] 3xl:p-[25px]" : 
    "2xl:px-[25px] 2xl:py-[25px] 3xl:px-[25px] 3xl:pt-[25px] 3xl:pb-[23px]"}`}  
                style={{
                  left: `${pos.x}%`,
                  bottom: `${pos.y}%`,
                  transform: `${pos.trans}`,
                }}
              >
                <div>
                  <h3 className={`leading-[1] mb-[5px] font-medium 2xl:tracking-[-0.06em]
                  ${t('lang') === "ru" ? "text-[18px] 2xl:text-[22px] tracking-[-0.04em] " : 
                  "text-[18px] 2xl:text-[24px] tracking-[-0.06em] "}`}>
                  {formatHeader(cards[i].title)}</h3>

                  <p className="text-[14px] leading-[1.2] tracking-[-0.04em] 2xl:text-[16px]  2xl:leading-[1.3]">
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
          <div className={`text-center flex flex-col items-center mx-auto max-w-[321px] 2xl:max-w-[650px]
          ${t('lang') === "ru" ? "-mt-[200px] md:-mt-[192px] 2xl:-mt-[55px] 3xl:-mt-[40px]" : "-mt-[200px] 2xl:-mt-[50px] 3xl:-mt-[55px]"}`}>
            <h1
              className={`mb-[20px] leading-[0.85] tracking-[-0.03em] font-${font} 
              ${t('lang') === 'ru' ? "text-[30px] 2xl:text-[60px] mb-[20px]  3xl:mb-[25px]" : 
                "text-[30px] 2xl:text-[80px] mb-[30px]"}
              `}
            >
              {formatHeader(t("hero.title"))}
            </h1>

            <p className={`leading-[1.3] text-[14px] tracking-[-0.04em] 2xl:text-[18px] 
            ${t('lang') === "ru" ? "mb-[25px] md:mb-[22px] 2xl:mb-[26px]  2xl:max-w-[423px] 3xl:mb-[40px]" : 
            "mb-[25px] md:max-w-[286px] 2xl:mb-[36px] 2xl:max-w-[376px] 3xl:max-w-[350px] 3xl:mb-[50px]"}`}>
              {t("hero.subtitle")}
            </p>

            <button className={`hero-btn glass w-full px-[30px] text-[18px] h-[55px] rounded-[40px] transition duration-300 cursor-pointer
            sm:w-[initial] md:px-[35px] 2xl:px-[60px] 2xl:h-[70px] 2xl:min-w-[313px] tracking-[-0.04em] font-medium
             ${t('lang') === 'ru' ? "text-[18px]" :"text-[18px] "}
            `}
              onClick={() => setIsOpenPopup(true)}
            >
              {t("hero.cta")}
            </button>
          </div>
        </div>
      )}
      {/* Text Section */}
      <div className="max-w-[321px] mdd:hidden text-center flex flex-col items-center mx-auto">
        <h1
          className={`mb-[20px] text-[30px] leading-[0.85] tracking-[-0.03em] font-${font}`}
        >
          {formatHeader(t("hero.title"))}
        </h1>

        <p className=" mb-[30px] sm:mb-[60px] text-[14px] leading-[1.2] tracking-[-0.04em]">
          {t("hero.subtitle")}
        </p>

        <button className="hero-btn glass w-full sm:w-[initial] px-[30px] text-[18px] h-[55px] rounded-[40px] transition duration-300 cursor-pointer"
          onClick={() => setIsOpenPopup(true)}
        >
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}