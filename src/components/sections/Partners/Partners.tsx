import { useTranslation } from "react-i18next";
import { formatHeader } from "@/utils/formaters";

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
    <section className={`partners gsap-up my-container 
        ${t('lang') === 'ru' ?
        `mb-[4.375rem] 
          xs:mb-[7.8125rem] 
          md:mb-[7.8125rem] 
          2xl:mb-[12.5rem] 
          3xl:mb-[16.875rem]`
        :
        `mb-[4.375rem] 
          xs:mb-[6.25rem]          
          md:mb-[5.9375rem]  
          2xl:mb-[12.5rem] 
          3xl:mb-[12.5rem]`}
    `}>
      {/* SECTION TITLE */}

      <h2 className={`leading-[1] tracking-[-0.06em] md: text-center uppercase      
      ${t('lang') === 'ru' ?
          `mb-[1.5625rem] text-[2.1875rem] font-semibold
        xs:mb-[2.8125rem] xs:text-[3.75rem]
        md:mb-[1.5625rem] md:font-bold
        2xl:mb-[5rem] 2xl:text-[7.5rem]
        3xl:mb-[5.375rem]`
          :
          `mb-[1rem] font-anek text-[2.5rem] font-semibold
        xs:mb-[0.8125rem] xs:text-[4.875rem] 
        md:mb-[0.875rem] 
        2xl:mb-[1.25rem] 2xl:text-[10rem]
        3xl:mb-[1.375rem] 3xl:pt-[1.125rem]`}
      `}>
        {t("partners.title")}
      </h2>

      <div className={`flex flex-col 
      ${t('lang') === 'ru' ? 
      `gap-[2.5rem] 
      xs:gap-[3.125rem] 
      md:gap-[3.75rem] 
      xl:gap-[5rem] 
      2xl:gap-[7.5rem] 
      3xl:gap-[7.5rem]`
      :
      `gap-[3.4375rem] 
      xs:gap-[3.625rem] 
      md:gap-[3.75rem] 
      xl:gap-[5rem] 
      2xl:gap-[7.5rem] 
      3xl:gap-[7.5rem]`}
      `}>
        {rows.map((row, i) => {
          return (
            <div
              key={i}
              className={`grid grid-cols-1 gap-[1.25rem]
                 ${t('lang') === 'ru' ?
                  `lg:grid-cols-[24%_1fr] 
                  xl:grid-cols-[29%_1fr]  
                  2xl:grid-cols-[30%_1fr] 
                  3xl:grid-cols-[37%_1fr]`
                  :
                  `lg:grid-cols-[24%_1fr] 
                  xl:grid-cols-[29%_1fr] 
                  2xl:grid-cols-[30%_1fr] 
                  3xl:grid-cols-[42%_1fr]`}
                `}
            >
              {/* TEXT BLOCK */}

              <div className="flex flex-col justify-start">
                <h3
                  className={`font-${font}                  
                  ${t('lang') === 'ru' ?
                      `leading-[1] text-[1.5625rem] mb-[0.625rem] tracking-[-0.03em] 
                      sm:max-w-[22.8125rem] md:text-[1.5625rem] 
                      2xl:text-[2.5rem] 2xl:mb-[0.9375rem] 2xl:tracking-[-0.05em] 2xl:pt-[0.3125rem] 
                      3xl:mb-[0.75rem] 3xl:pt-0 3xl:text-[3.4375rem] `
                      :
                      `leading-[0.88] text-[1.875rem] mb-[0.8125rem] tracking-[-0.03em] 
                      xs:mb-[1rem] xs:leading-[1]
                      sm:max-w-[22.8125rem] md:text-[1.875rem] 
                      2xl:text-[2.8125rem] 2xl:mb-[1.25rem] 2xl:leading-[0.88] 2xl:tracking-[-0.05em] 2xl:pt-[0.3125rem] 
                      3xl:mb-[1.125rem] 3xl:pt-0 3xl:text-[3.4375rem] `}
                      `}
                >
                  {formatHeader(row.title)}
                </h3>

                <div className="flex items-end justify-between" >
                  <p className="max-w-[75%] text-[0.875rem] leading-[1.2] tracking-[-0.04em] 
                  xs:max-w-[21.0625rem] 
                  md:max-w-[21.0625rem] md:text-[0.875rem] 
                  2xl:text-[1.125rem] 2xl:leading-[1.3] 2xl:max-w-[15.9375rem]">
                    {formatHeader(row.description)}
                  </p>

                  {/* NAVIGATION FOR TABLET */}
                  <div className="hidden sm:flex md:hidden justify-end gap-[0.9375rem] mb-[0.3125rem]">
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

              <div className={`flex flex-col gap-[0.1875rem] xs:hidden bg-black rounded-[1.5625rem] p-[0.1875rem]`}>
                {row.cards.map((card, j) => (
                  <div
                    key={j}
                    className={`${t('lang') === 'ru' ?
                      `px-[1.25rem] py-[1.375rem] relative bg-white rounded-[1.4375rem] flex flex-col justify-between`
                      :
                      `px-[1.25rem] pt-[1.3125rem] pb-[1.5rem] relative bg-white rounded-[1.4375rem] flex flex-col justify-between`}
                      
                      `}
                  >
                    <div className="flex items-start gap-[0.5rem]">
                      <div className="w-[0.6875rem] h-[0.6875rem]  bg-orange rounded-full shrink-0" />

                      <div className={`flex flex-col
                       ${t('lang') === 'ru' ? `gap-[0.3125rem]` : `gap-[0.4375rem]`}`}>
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

              <div className="partners-swiper hidden xs:block md:hidden">
                <Swiper
                  modules={[Navigation]}
                  className="!overflow-visible"
                  spaceBetween={5}
                  slidesPerView={1.94}
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
                      <div className="px-[1.25rem] py-[1.875rem] relative bg-white rounded-[2.5rem] h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-start gap-[0.625rem] mb-[0.9375rem]">
                            <div className="w-[0.9375rem] h-[0.9375rem] bg-orange rounded-full shrink-0 mt-1" />

                            <h4 className="text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-semibold">
                              {card.title}
                            </h4>
                          </div>

                          <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em]">
                            {card.text}
                          </p>
                        </div>

                        <svg
                          className={`absolute right-[1.25rem] bottom-[1.25rem] ${svgSizes[j]} text-[#a5a5a5]`}
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
              <div className={`hidden md:grid grid-cols-3 ${t('lang') === 'ru' ? "md:gap-[0.625rem]" : "md:gap-[0.625rem] 3xl:gap-[0.9375rem]"}`}>
                {row.cards.map((card, j) => (
                  <div
                    key={j}
                    className={`relative bg-white rounded-[2.5rem] px-[1.25rem] flex flex-col justify-between h-full lg:rounded-[1.25rem] 3xl:rounded-[2.5rem]                    
                      ${t('lang') === 'ru' ? `
                        md:py-[1.875rem] md:aspect-[306/391] mdd:aspect-[306/301]
                        lg:aspect-[293/365]
                        2xl:py-[1.625rem] 2xl:aspect-[293/365]
                        3xl:py-[1.625rem] 3xl:aspect-square `
                        :
                        `md:py-[1.75rem] md:aspect-[306/391] mdd:aspect-[306/301] 
                        lg:aspect-[293/365]
                        2xl:py-[1.75rem] 2xl:aspect-[293/365]
                        3xl:py-[1.8125rem] 3xl:aspect-[293/360] `}
                    `}
                  >
                    <div>
                      <div className="flex items-start gap-2 mb-[0.9375rem]">
                        <div className="w-[0.9375rem] h-[0.9375rem] bg-orange rounded-full shrink-0 mt-1" />

                        <h4 className="text-[0.875rem] md:text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-semibold">
                          {card.title}
                        </h4>
                      </div>

                      <p className="text-[0.875rem] 2xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em]">
                        {card.text}
                      </p>
                    </div>

                    <svg
                      className={`absolute right-[1.25rem] bottom-[1.25rem] ${svgSizes[j]} text-[#7b7a7a]`}
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