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
    "w-[3.4375rem] h-[3.4375rem] xl:w-[3.75rem] xl:h-[3.75rem]",
    "w-[3.625rem] h-[3.625rem]",
    "w-[2.625rem] h-[2.5rem] xl:w-[2.5rem] xl:h-[2.375rem]",
    "w-[2.625rem] h-[2.625rem]",
    "w-[3.3125rem] h-[3.3125rem]",
    "w-[3.8125rem] h-[3.8125rem]",
  ];

  const font = t("partners.font");

  return (
    <section className="partners gsap-up my-container mb-[4.375rem] sm:mb-[7.5rem] 2xl:mb-[12.5rem] 3xl:mb-[15.625rem]">
      {/* SECTION TITLE */}

      <h2 className="text-[2.1875rem]  xxs:text-[3.75rem] 2xl:text-[7.5rem] mb-[1.5625rem] xxs:mb-[2.8125rem] mdd:mb-[0.9375rem] 2xl:mb-[4.375rem] 3xl:mb-[5.625rem] leading-[1] tracking-[-0.06em] font-semibold text-center uppercase">
        {t("partners.title")}
      </h2>

      <div className="flex flex-col gap-[2.5rem] sm:gap-[3.125rem] xl:gap-[5rem] 2xl:gap-[7.5rem]">
        {rows.map((row, i) => {


          return (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-[24%_1fr] xl:grid-cols-[29%_1fr] 3xl:grid-cols-[37%_1fr] gap-[1.25rem]"
            >
              {/* TEXT BLOCK */}

              <div className="flex flex-col justify-start">
                <h3
                  className={`sm:max-w-[22.8125rem] text-[1.5625rem] md:text-[2.1875rem] mdd:text-[1.5625rem] 2xl:text-[2.5rem] 3xl:text-[3.4375rem] mb-[0.625rem] 2xl:mb-[0.9375rem] 3xl:mb-[1.25rem] leading-[1] tracking-[-0.03em] sm:tracking-[-0.05em] font-${font}`}
                >
                  {formatHeaderGrey(row.title)}
                </h3>

                <div className="flex items-end justify-between" >
                  <p className="max-w-[75%] sm:max-w-[21.875rem] text-[0.875rem] md:text-[1rem] 2xl:text-[1.125rem] leading-[1.2] sm:leading-[1.3] tracking-[-0.04em]">
                    {row.description}
                  </p>

                  {/* NAVIGATION FOR TABLET */}
                  <div className="hidden sm:flex md:hidden justify-end gap-[0.625rem]">
                    <button ref={(el) => {
                      prevRefs.current[i] = el;
                    }} className="cursor-pointer hover:text-black">
                      <svg className="w-[1.3125rem] h-[1rem]">
                        <use href="/icons/sprite/sprite.svg#arrow-left" />
                      </svg>
                    </button>
                    <button ref={(el) => {
                      nextRefs.current[i] = el;
                    }} className="cursor-pointer hover:text-black">
                      <svg className="w-[1.3125rem] h-[1rem]">
                        <use href="/icons/sprite/sprite.svg#arrow-right" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* MOBILE */}

              <div className="flex flex-col gap-[0.1875rem] sm:hidden bg-black rounded-[1.5625rem] p-[0.1875rem]">
                {row.cards.map((card, j) => (
                  <div
                    key={j}
                    className="relative bg-white rounded-[1.4375rem] px-[1.25rem] py-[1.25rem] flex flex-col justify-between"
                  >


                    <div className="flex items-start gap-2">
                      <div className="w-[0.6875rem] h-[0.6875rem]  bg-orange rounded-full shrink-0" />

                      <div className="flex flex-col gap-[0.3125rem]">
                        <h4 className="text-[1.125rem] leading-[1] tracking-[-0.04em]">
                          {card.title}
                        </h4>

                        <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em]">
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
                      <div className="relative bg-white rounded-[2.5rem] px-[1.25rem] py-[1.875rem] h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-start gap-2 mb-[0.9375rem]">
                            <div className="w-[0.9375rem] h-[0.9375rem] bg-orange rounded-full shrink-0 mt-1" />

                            <h4 className="text-[0.875rem] xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-semibold">
                              {card.title}
                            </h4>
                          </div>

                          <p className="text-[1rem] xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em]">
                            {card.text}
                          </p>
                        </div>

                        <svg
                          className={`absolute right-[1.25rem] bottom-[1.25rem] ${svgSizes[j]} text-dusty-blue`}
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

              <div className="hidden md:grid grid-cols-3 gap-[0.625rem]">
                {row.cards.map((card, j) => (
                  <div
                    key={j}
                    className="relative bg-white md:aspect-[306/391] mdd:aspect-[306/301]  lg:aspect-[29/36] 3xl:aspect-square rounded-[2.5rem] lg:rounded-[1.25rem] 3xl:rounded-[2.5rem] px-[1.25rem] py-[1.875rem] flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-start gap-2 mb-[0.9375rem]">
                        <div className="w-[0.9375rem] h-[0.9375rem] bg-orange rounded-full shrink-0 mt-1" />

                        <h4 className="text-[0.875rem] xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-semibold">
                          {card.title}
                        </h4>
                      </div>

                      <p className="text-[1rem] xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em]">
                        {card.text}
                      </p>
                    </div>

                    <svg
                      className={`absolute right-[1.25rem] bottom-[1.25rem] ${svgSizes[j]} text-dusty-blue`}
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