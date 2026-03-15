import { useTranslation } from "react-i18next";
import { formatHeaderGrey } from "@/utils/formaters";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useRef } from "react";

type PartnersCard = {
  title: string;
  text: string;
  icon: string;
};

type PartnersRow = {
  title: string;
  description: string;
  cards: PartnersCard[];
};

export default function Partners() {
  const prevRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const nextRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { t } = useTranslation();


  const rows = t("partners.rows", { returnObjects: true }) as PartnersRow[];

  const svgSizes = [
    "w-[55px] h-[55px] xl:w-[60px] xl:h-[60px]",
    "w-[58px] h-[58px]",
    "w-[42px] h-[40px] xl:w-[40px] xl:h-[38px]",
    "w-[42px] h-[42px]",
    "w-[53px] h-[53px]",
    "w-[61px] h-[61px]",
  ];

  const font = t("partners.font");

  return (
    <section className="my-container mb-[70px] sm:mb-[120px] 2xl:mb-[200px] 3xl:mb-[250px]">
      {/* SECTION TITLE */}

      <h2 className="text-[35px]  xxs:text-[60px] 2xl:text-[120px] mb-[25px] xxs:mb-[45px] mdd:mb-[15px] 2xl:mb-[70px] 3xl:mb-[90px] leading-[1] tracking-[-0.06em] font-semibold text-center uppercase">
        {t("partners.title")}
      </h2>

      <div className="flex flex-col gap-[40px] sm:gap-[50px] xl:gap-[80px] 2xl:gap-[120px]">
        {rows.map((row, i) => {


          return (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-[24%_1fr] xl:grid-cols-[29%_1fr] 3xl:grid-cols-[37%_1fr] gap-[20px]"
            >
              {/* TEXT BLOCK */}

              <div className="flex flex-col justify-start">
                <h3
                  className={`sm:max-w-[365px] text-[25px] md:text-[35px] mdd:text-[25px] 2xl:text-[40px] 3xl:text-[55px] mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px] leading-[1] tracking-[-0.03em] sm:tracking-[-0.05em] font-${font}`}
                >
                  {formatHeaderGrey(row.title)}
                </h3>

                <div className="flex items-end justify-between" >
                  <p className="max-w-[75%] sm:max-w-[350px] text-[14px] md:text-[16px] 2xl:text-[18px] leading-[1.2] sm:leading-[1.3] tracking-[-0.04em]">
                    {row.description}
                  </p>

                  {/* NAVIGATION FOR TABLET */}
                  <div className="hidden sm:flex md:hidden justify-end gap-[10px]">
                    <button ref={(el) => {
                      prevRefs.current[i] = el;
                    }} className="cursor-pointer hover:text-black">
                      <svg className="w-[21px] h-[16px]">
                        <use href="/icons/sprite/sprite.svg#arrow-left" />
                      </svg>
                    </button>
                    <button ref={(el) => {
                      nextRefs.current[i] = el;
                    }} className="cursor-pointer hover:text-black">
                      <svg className="w-[21px] h-[16px]">
                        <use href="/icons/sprite/sprite.svg#arrow-right" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* MOBILE */}

              <div className="flex flex-col gap-[3px] sm:hidden bg-black rounded-[25px] p-[3px]">
                {row.cards.map((card, j) => (
                  <div
                    key={j}
                    className="relative bg-white rounded-[23px] px-[20px] py-[20px] flex flex-col justify-between"
                  >


                    <div className="flex items-start gap-2">
                      <div className="w-[11px] h-[11px]  bg-orange rounded-full shrink-0" />

                      <div className="flex flex-col gap-[5px]">
                        <h4 className="text-[18px] leading-[1] tracking-[-0.04em]">
                          {card.title}
                        </h4>

                        <p className="text-[14px] leading-[1.2] tracking-[-0.04em]">
                          {card.text}
                        </p>
                      </div>
                    </div>                   
                  </div>
                ))}
              </div>

              {/* TABLET SWIPER */}

              <div className="partners-swiper hidden sm:block md:hidden">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={5}
                  slidesPerView={2}
                  onInit={(swiper) => {
                    // @ts-expect-error: refs are initialized after render
                    swiper.params.navigation.prevEl = prevRefs.current[i];
                    // @ts-expect-error: refs are initialized after render
                    swiper.params.navigation.nextEl = nextRefs.current[i];

                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  {row.cards.map((card, j) => (
                    <SwiperSlide key={j} className="aspect-[306/301]">
                      <div className="relative bg-white rounded-[40px] px-[20px] py-[30px] h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-start gap-2 mb-[15px]">
                            <div className="w-[15px] h-[15px] bg-orange rounded-full shrink-0 mt-1" />

                            <h4 className="text-[14px] xl:text-[18px] leading-[1.3] tracking-[-0.04em] font-semibold">
                              {card.title}
                            </h4>
                          </div>

                          <p className="text-[16px] xl:text-[18px] leading-[1.3] tracking-[-0.04em]">
                            {card.text}
                          </p>
                        </div>

                        <svg
                          className={`absolute right-[20px] bottom-[20px] ${svgSizes[j]} text-dusty-blue`}
                        >
                          <use
                            href={`/icons/sprite/sprite.svg#${card.icon}`}
                          />
                        </svg>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* DESKTOP GRID */}

              <div className="hidden md:grid grid-cols-3 gap-[10px]">
                {row.cards.map((card, j) => (
                  <div
                    key={j}
                    className="relative bg-white md:aspect-[306/391] mdd:aspect-[306/301]  lg:aspect-[29/36] 3xl:aspect-square rounded-[40px] lg:rounded-[20px] 3xl:rounded-[40px] px-[20px] py-[30px] flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-start gap-2 mb-[15px]">
                        <div className="w-[15px] h-[15px] bg-orange rounded-full shrink-0 mt-1" />

                        <h4 className="text-[14px] xl:text-[18px] leading-[1.3] tracking-[-0.04em] font-semibold">
                          {card.title}
                        </h4>
                      </div>

                      <p className="text-[16px] xl:text-[18px] leading-[1.3] tracking-[-0.04em]">
                        {card.text}
                      </p>
                    </div>

                    <svg
                      className={`absolute right-[20px] bottom-[20px] ${svgSizes[j]} text-dusty-blue`}
                    >
                      <use
                        href={`/icons/sprite/sprite.svg#${card.icon}`}
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}