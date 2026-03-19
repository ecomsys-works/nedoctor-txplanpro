import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { formatHeader, formatHeaderNo } from "@/utils/formaters"
import { useTranslation } from "react-i18next"

import WorkflowDetailsHeroCard from "./WorkflowDetailsHeroCard"
import WorkflowDetailsCard, { type WorkflowDetailsCardType } from "./WorkflowDetailsCard"

export default function WorkflowDetails() {
  const { t } = useTranslation()

  const cards = t("workflow.details.cards", {
    returnObjects: true
  }) as WorkflowDetailsCardType[]

  const [heroCard, ...featureCards] = cards

  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const font = t("workflow.details.font");

  return (
    <section className="worflow-details gsap-up workflow-details-swiper my-container mb-[2.1875rem] xs:mb-[3rem] md:mb-[5.5rem] 2xl:mb-[9.375rem]">

      {/* MOBILE */}
      <div className="md:hidden">

        {/* Hero title */}
        <h2 className={`text-[1.5625rem] leading-[1] tracking-[-0.03em] font-${font}
          2xl:text-[2.5rem] 3xl:text-[3.4375rem] mb-[0.625rem] 2xl:mb-[1.875rem] 3xl:mb-[2.5rem]  3xl:leading-[0.88]  3xl:tracking-[-0.05em]`}>
          {heroCard.title}
        </h2>

        {/* Description + arrows in one container */}
        <div className="flex justify-between items-end mb-[1.25rem]">
          <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] text-black
          2xl:text-[1.125rem]">
            {formatHeader(heroCard.description)}</p>

          <div className="flex gap-4 items-center text-grey mdd:hidden">
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

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            // Безопасное присвоение refs
            // @ts-expect-error: refs are initialized after render
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-expect-error: refs are initialized after render
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          spaceBetween={5}
          slidesPerView={1.01}
          className="!overflow-visible"
          breakpoints={{
            375: {
              slidesPerView: 1.01,
               spaceBetween:5,
            },
            480: {
              slidesPerView: 1.76,
              spaceBetween:3,
            }
          }}
        >
          {featureCards.map((card, index) => (
            <SwiperSlide key={index}>
              <WorkflowDetailsCard card={card} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* TABLET */}
      <div className="hidden md:block 3xl:hidden">
        {/* Hero title */}
        <h2 className={`font-${font}  
           ${t('lang') === 'ru' ? "text-[1.5625rem] leading-[1] tracking-[-0.03em] 2xl:tracking-[-0.05em] 3xl:text-[3.4375rem] mb-[0.625rem] 2xl:-mt-[0.3125rem] 2xl:text-[2.5rem]" : 
            "text-[1.5625rem] leading-[1] tracking-[-0.03em] 2xl:tracking-[-0.05em] 3xl:text-[3.4375rem] mb-[0.9375rem] 2xl:-mt-[0rem] 2xl:text-[2.8125rem]"}
          `}>
          {heroCard.title}
        </h2>

        {/* Description */}
        <p className={`text-[0.875rem] leading-[1.2] tracking-[-0.04em] text-black mb-[1.25rem] 2xl:text-[1.125rem] 
 ${t('lang') === 'ru' ? "2xl:mb-[1.875rem]" : "2xl:mb-[2.5rem]"}
          `}>
          {formatHeaderNo(heroCard.description)}</p>

        <div className="grid grid-cols-2 gap-[0.375rem] md:gap-[0.3125rem] 2xl:gap-[0.625rem] md:rounded-[2.8125rem] 2xl:rounded-[3.75rem] 3xl:rounded-[2.8125rem] bg-black p-[0.375rem] md:p-[0.3125rem] 2xl:p-[0.625rem]">

          <WorkflowDetailsCard card={featureCards[0]} index={0} />
          <WorkflowDetailsCard card={featureCards[1]} index={1} />
          <WorkflowDetailsCard card={featureCards[2]} index={2} />
          <WorkflowDetailsCard card={featureCards[3]} index={3} />

        </div>
      </div>


      {/* DESKTOP */}
      <div className="hidden 3xl:grid grid-cols-3 gap-[0.5625rem] rounded-[2.8125rem] bg-black p-[0.625rem]">

        <div className="col-span-2">
          <WorkflowDetailsHeroCard card={heroCard} font={font} />
        </div>

        <WorkflowDetailsCard card={featureCards[0]} index={0} />
        <WorkflowDetailsCard card={featureCards[1]} index={1} />
        <WorkflowDetailsCard card={featureCards[2]} index={2} />
        <WorkflowDetailsCard card={featureCards[3]} index={3} />

      </div>
    </section>
  )
}