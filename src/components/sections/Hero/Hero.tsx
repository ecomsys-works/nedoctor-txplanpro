import { useTranslation } from "react-i18next";
import { formatHeader } from "@/utils/formaters";
import { useState, useLayoutEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
    "translate-y-[13.4%]",
    "translate-y-0",
    "translate-y-[13.4%]",
    "translate-y-0",
    "translate-y-[13.4%]",    
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
      { x: 70.5, y: 26.5, trans: "translate(-50%,0%)" },
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

  const tabletRow1 = [cards[0], cards[2]];
  const tabletRow2 = [cards[1], cards[3], cards[4]];

  const swiperCards = [cards[3],cards[0], cards[1], cards[3], cards[4], cards[2]];

  return (
    <section className={`hero my-container cover-gradient text-white relative overflow-hidden        
    ${t('lang') === "ru" ?
        `mb-[1.5625rem] pb-[4.0625rem] rounded-b-[1.875rem] 
        xs:rounded-b-[2.8125rem] xs:mb-[3.4375rem] xs:pb-[5rem] 
        md:mb-[3.75rem] md:rounded-b-[3.75rem] md:pb-[1.875rem] 
        2xl:pb-[3.25rem] 2xl:rounded-b-[7.5rem] 2xl:mb-[3.125rem] 2xl:mb-[5.125rem]
        3xl:mb-[5.125rem] 3xl:pb-[6.25rem]`
        :
        `mb-[2.5rem] pb-[4.0625rem] rounded-b-[1.875rem] 
        xs:rounded-b-[2.8125rem] xs:mb-[3.75rem] xs:pb-[5rem] 
        md:mb-[3.75rem] md:rounded-b-[3.75rem] md:pb-[2.8125rem] 
        2xl:pb-[3.25rem] 2xl:rounded-b-[7.5rem] 2xl:mb-[6.25rem]
        3xl:mb-[5.125rem] 3xl:pb-[6.25rem] 
        `}    
    `}>

      {/* Mobile Swiper */}
      {windowWidth < 640 && (
        <div className="pb-[2.5rem] pt-[0.625rem]">
          <Swiper
            modules={[Autoplay]} // вот это важно
        autoplay={{
          delay: 3000, // 5 секунд
          disableOnInteraction: false, // не останавливается после свайпа
          pauseOnMouseEnter: true, // (опционально) пауза при наведении
        }}
        loop={true} // чтобы крутился бесконечно
            spaceBetween={35}
            slidesPerView={1.470}
            breakpoints={{
              0: { spaceBetween: 35, slidesPerView: 1.470 },
              390: { spaceBetween: 35, slidesPerView: 1.6 },
              430: { spaceBetween: 25, slidesPerView: 1.8 },
              480: { spaceBetween: 25, slidesPerView: 2.2 },
              540: { spaceBetween: 25, slidesPerView: 2.5 },
            }}
            className="!overflow-visible select-none mb-[13.4%]"
          >
            {swiperCards.map((card, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`w-[100%] aspect-[22/32] glass rounded-[1.25rem] p-[1.25rem] overflow-hidden text-white flex flex-col justify-between transition duration-300 ${mobileOffsets[i]}`}                  
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
        <div className="flex flex-col gap-[1.25rem] mb-[7.5rem] pt-[4.375rem]">
          <div className="flex justify-center gap-[0.75rem]">
            {tabletRow1.map((card, i) => (
              <div
                key={i}
                className="p-[0.9375rem] max-w-[32%] rounded-[1.875rem] glass text-white flex flex-col justify-between  w-full aspect-square  overflow-hidden 
                select-none transition-all duration-300 ease-out hover:-translate-y-[0.625rem] hover:scale-[1.04] hover:z-10 hover:shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.35)]"
              >
                <div>
                  <h3 className={`${t('lang') === 'ru' ?
                    `text-[1.125rem] leading-[1] tracking-[-0.04em] mb-[0.375rem]`
                    :
                    `text-[1.1875rem] font-light leading-[1] tracking-[-0.01em] mb-[0.5rem]`}
                 `}>
                    {formatHeader(card.title)}
                  </h3>
                  <p className={`${t('lang') === 'ru' ?
                    `text-[0.875rem] leading-[1.2] tracking-[-0.04em] mb-[0.3125rem]`
                    :
                    `text-[0.9375rem] font-light leading-[1.2] tracking-[-0.06em] mb-[0.1875rem]`}
                 `}>
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
            {tabletRow2.map((card, i) => (
              <div
                key={i}
                className="w-full max-w-[33.33%] aspect-square glass rounded-[1.875rem] p-[0.9375rem] overflow-hidden text-white flex flex-col justify-between
                select-none transition-all duration-300 ease-out hover:-translate-y-[0.625rem] hover:scale-[1.04] hover:z-10 hover:shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.35)]"
              >
                <div>
                  <h3 className={`${t('lang') === 'ru' ?
                    `text-[1.125rem] leading-[1] tracking-[-0.04em] mb-[0.375rem]`
                    :
                    `text-[1.1875rem] font-light leading-[1] tracking-[-0.01em] mb-[0.5rem]`}
                 `}>
                    {formatHeader(card.title)}
                  </h3>
                  <p className={`${t('lang') === 'ru' ?
                    `text-[0.875rem] leading-[1.2] tracking-[-0.04em] mb-[0.3125rem]`
                    :
                    `text-[0.9375rem] font-light leading-[1.2] tracking-[-0.06em] mb-[0.1875rem]`}
                 `}>
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
        <div className={`w-full max-w-[100%] mx-auto 
          ${t('lang') === 'ru' ?
            `pt-[0.9375rem] 
            2xl:max-w-[81.5625rem] 2xl:pt-[2.1875rem] 
            3xl:pt-[3.4375rem] 3xl:max-w-[85.3125rem]`
            :
            `pt-[1.9375rem] 
            2xl:max-w-[81.5625rem] 2xl:pt-[2.1875rem] 
            3xl:pt-[3.4375rem] 3xl:max-w-[85.3125rem]`
          }           
        `}>
          <div className="relative w-full mdd:aspect-[935/462] 2xl:aspect-[1305/434] 3xl:aspect-[1365/434]">

            {layout.map((pos, i) => (
              <div
                key={i}
                className={`p-[0.9375rem] rounded-[1.875rem] absolute glass flex flex-col justify-between aspect-square
        transition-all duration-300 ease-out select-none hover:-translate-y-[0.625rem] hover:scale-[1.04] hover:z-10 hover:shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.35)]
        mdd:w-[20.5%] 2xl:w-[19%] 3xl:w-[18%]
        ${t('lang') === "ru" ? `
          2xl:px-[1.5625rem] 2xl:py-[1.5625rem] 3xl:p-[1.5625rem]`
                    :
                    `2xl:px-[1.5625rem] 2xl:py-[1.5625rem] 
          3xl:px-[1.5625rem] 3xl:pt-[1.5625rem] 3xl:pb-[1.4375rem]`}`}
                style={{
                  left: `${pos.x}%`,
                  bottom: `${pos.y}%`,
                  transform: `${pos.trans}`,
                }}
              >
                <div>
                  <h3 className={`leading-[1] font-medium 2xl:tracking-[-0.06em] text-white/90
                  ${t('lang') === "ru" ? 
                    `text-[1.125rem] tracking-[-0.04em] mb-[0.3125rem]
                    2xl:text-[1.375rem] ` 
                    :
                    `text-[1.25rem] font-light tracking-[-0.06em] mb-[0.375rem]
                    2xl:text-[1.5rem]`}
                    `}
                    >
                    {formatHeader(cards[i].title)}</h3>

                  <p className={`text-[0.875rem] leading-[1.2] tracking-[-0.04em] 
                    2xl:text-[1rem]  2xl:leading-[1.3]
                     ${t('lang') === "ru" ? `font-normal` : `font-light`}                    
                    `}>
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
          <div className={`text-center flex flex-col items-center mx-auto max-w-[initial] 
          xs:max-w-[20.0625rem] 
          2xl:max-w-[40.625rem]
          ${t('lang') === "ru" ?
              `-mt-[12.5rem] 
            md:-mt-[12rem] 
            2xl:-mt-[3.4375rem] 
            3xl:-mt-[2.5rem]`
              :
              `-mt-[13.125rem] 
           2xl:-mt-[3.1875rem] 
           3xl:-mt-[3.4375rem] 3xl:max-w-[41.875rem]`}
           `}>
            <h1
              className={`mb-[1.25rem] leading-[0.85] tracking-[-0.03em] font-${font} 
              ${t('lang') === 'ru' ?
                  `text-[1.875rem] mb-[1.25rem]  
                 2xl:text-[3.75rem] 
                 3xl:mb-[1.5625rem]`
                  :
                  `text-[2.5rem] mb-[1.25rem]
                  2xl:mb-[1.875rem]
                 2xl:text-[5rem]`}
              `}
            >
              {formatHeader(t("hero.titleDesk"))}
            </h1>

            <p className={`leading-[1.3] text-[0.875rem] tracking-[-0.04em]             
            ${t('lang') === "ru" ?
                `mb-[1.5625rem] 
               md:mb-[1.375rem] 
               2xl:mb-[1.625rem] 2xl:max-w-[26.4375rem] 2xl:text-[1.125rem] 
               3xl:mb-[2.5rem]`
                :
                `mb-[1.5625rem] 
               md:max-w-[17.875rem] 
               2xl:mb-[2.25rem] 2xl:max-w-[23.5rem] 2xl:text-[1.125rem] 
               3xl:max-w-[21.875rem] 3xl:mb-[3.125rem]`}
               `}>
              {formatHeader(t("hero.subtitle"))}
            </p>

            <button className={`hero-btn glass w-full  font-medium transition duration-300 cursor-pointer            
             ${t('lang') === 'ru' ? 
              `px-[1.875rem] h-[3.4375rem] rounded-[2.5rem] text-[1.125rem] tracking-[-0.04em]
              xs:w-[initial] md:px-[2.1875rem] 
              2xl:px-[3.75rem] 2xl:h-[4.375rem] 2xl:min-w-[19.5625rem] 2xl:text-[1.25rem]
              ` 
              : 
              `px-[1.875rem] h-[3.4375rem] rounded-[2.5rem] text-[1.125rem] tracking-[-0.04em]
              xs:w-[initial] md:px-[3.75rem] 
              2xl:px-[3.75rem] 2xl:h-[4.375rem] 2xl:min-w-[19.5625rem] 2xl:tracking-[0]
              `}
            `}
              onClick={() => setIsOpenPopup(true)}
            >
              {t("hero.cta")}
            </button>
          </div>
        </div>
      )}
      {/* Text Section */}
      <div className="flex mdd:hidden text-center flex-col items-center max-w-[initial] mx-auto 
      xs:max-w-[20.0625rem] ">
        <h1 className={`font-${font}
             ${t('lang') === 'ru' ?
            `mb-[1.25rem] text-[1.875rem] leading-[0.85] tracking-[-0.03em]`
            :
            `mb-[1.25rem] text-[2.5rem] leading-[0.85] tracking-[-0.03em] mt-[1.0625rem] xs:mt-[0rem]`}
             `}
        >
          {formatHeader(t("hero.title"))}
        </h1>

        <p className={`${t('lang') === 'ru' ?
          ` mb-[1.875rem] sm:mb-[3.75rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em]`
          :
          ` mb-[1.875rem] xs:mb-[4.875rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em]`}
             `}>
          {formatHeader(t("hero.subtitle"))}
        </p>

        <button className={`glass hero-btn transition duration-300 cursor-pointer  font-medium         
        h-[3.4375rem] rounded-[2.5rem] xs:w-[initial] tracking-[-0.04em]
        ${t('lang') === 'ru' ?
            `w-full text-[1.125rem] px-[2.1875rem] `
            :
            `w-full text-[1.125rem] px-[2.1875rem] xs:px-[4.0625rem]`}`}
          onClick={() => setIsOpenPopup(true)}
        >
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}