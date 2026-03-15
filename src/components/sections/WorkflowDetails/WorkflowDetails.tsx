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
    <section className="workflow-details-swiper my-container mb-[35px] sm:mb-[50px] mdd:mb-[80px] 2xl:mb-[150px]">

      {/* MOBILE */}
      <div className="md:hidden">

        {/* Hero title */}
        <h2 className={`text-[25px] leading-[1] tracking-[-0.03em] font-${font}
          2xl:text-[40px] 3xl:text-[55px] mb-[10px] 2xl:mb-[30px] 3xl:mb-[40px]  3xl:leading-[0.88]  3xl:tracking-[-0.05em]`}>
          {heroCard.title}
        </h2>

        {/* Description + arrows in one container */}
        <div className="flex justify-between items-end mb-[20px]">
          <p className="text-[14px] leading-[1.2] tracking-[-0.04em] text-black
          2xl:text-[18px]">
            {formatHeader(heroCard.description)}</p>

          <div className="flex gap-4 items-center text-grey mdd:hidden">
            <button ref={prevRef} className="cursor-pointer hover:text-black">
              <svg className="w-[21px] h-[16px]">
                <use href="/icons/sprite/sprite.svg#arrow-left" />
              </svg>
            </button>
            <button ref={nextRef} className="cursor-pointer hover:text-black">
              <svg className="w-[21px] h-[16px]">
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
            },
            480: {
              slidesPerView: 1.85,
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
        <h2 className={`text-[25px] mb-[10px] leading-[1] tracking-[-0.03em] font-${font}
          2xl:text-[40px] 2xl:tracking-[-0.05em] 3xl:text-[55px] `}>
          {heroCard.title}
        </h2>

        {/* Description */}
        <p className="text-[14px] leading-[1.2] tracking-[-0.04em] text-black mb-[20px] 2xl:text-[18px] 2xl:mb-[30px]">
          {formatHeaderNo(heroCard.description)}</p>

        <div className="grid grid-cols-2 gap-[6px] 2xl:gap-[10px] rounded-[45px] bg-black p-[6px] 2xl:p-[10px]">

          <WorkflowDetailsCard card={featureCards[0]} index={0} />
          <WorkflowDetailsCard card={featureCards[1]} index={1} />
          <WorkflowDetailsCard card={featureCards[2]} index={2} />
          <WorkflowDetailsCard card={featureCards[3]} index={3} />

        </div>
      </div>


      {/* DESKTOP */}
      <div className="hidden 3xl:grid grid-cols-3 gap-[8px] rounded-[45px] bg-black p-[8px]">

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