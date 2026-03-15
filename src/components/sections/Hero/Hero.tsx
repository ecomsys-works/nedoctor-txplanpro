import { useTranslation } from "react-i18next";
import { formatHeader } from "@/utils/formaters";
import { useState, useLayoutEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type CardPosition = {
  x: number;
  y: number;
  trans: string;
};

export default function Hero() {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(0);

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
    <section className="
    mb-[25px] sm:mb-[50px] 2xl:mb-[90px] 3xl:mb-[100px] 
    pb-[65px] sm:pb-[80px] mdd:pb-[30px] 2xl:pb-[50px] 3xl:pb-[100px] 
    my-container cover-gradient text-white rounded-b-[30px] md:rounded-b-[60px] 2xl:rounded-b-[120px] relative overflow-hidden">

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
                className="w-full max-w-[33.33%] aspect-square glass rounded-[30px] p-[15px] overflow-hidden text-white flex flex-col justify-between"
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
                className="w-full max-w-[33.33%] aspect-square glass rounded-[30px] p-[15px] overflow-hidden text-white flex flex-col justify-between"
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
        <div className="w-full pt-[15px] 2xl:pt-[30px] 3xl:pt-[55px] max-w-[100%] mdd 2xl:max-w-[1305px] 3xl:max-w-[1365px] mx-auto ">
          <div className="relative w-full mdd:aspect-[935/462] 2xl:aspect-[1305/434] 3xl:aspect-[1365/434]">

            {layout.map((pos, i) => (
              <div
                key={i}
                className="p-[15px]  2xl:p-[20px] 3xl:p-[25px] aspect-square mdd:w-[20.5%] 2xl:w-[18%] 3xl:w-[18%] rounded-[30px] absolute glass flex flex-col justify-between"
                style={{
                  left: `${pos.x}%`,
                  bottom: `${pos.y}%`,
                  transform: `${pos.trans}`,
                }}
              >
                <div>
                  <h3 className="text-[18px] 2xl:text-[22px] leading-[1] tracking-[-0.04em] 2xl:tracking-[-0.06em] mb-[5px] font-medium">{formatHeader(cards[i].title)}</h3>

                  <p className="text-[14px] 2xl:text-[16px] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em] ">
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
          <div className="-mt-[200px] 2xl:-mt-[50px] 3xl:-mt-[60px] text-center flex flex-col items-center max-w-[321px] 2xl:max-w-[670px] mx-auto">
            <h1
              className={`text-[30px] 2xl:text-[60px] mb-[20px] 3xl:mb-[25px] leading-[0.85] tracking-[-0.03em] font-${font}`}
            >
              {formatHeader(t("hero.title"))}
            </h1>

            <p className=" mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px] 2xl:text-[18px] leading-[1.3] tracking-[-0.04em] 2xl:max-w-[423px]">
              {t("hero.subtitle")}
            </p>

            <button className="glass w-full sm:w-[initial] px-[30px] 2xl:px-[50px] text-[18px] h-[55px] 2xl:h-[70px] rounded-[40px] hover:scale-102 transition duration-300 cursor-pointer">
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

        <button className="glass w-full sm:w-[initial] px-[30px] text-[18px] h-[55px] rounded-[40px] hover:scale-102 transition duration-300 cursor-pointer">
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}