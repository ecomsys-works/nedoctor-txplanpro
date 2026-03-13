import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

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

  return (
    <section className="container py-10">

      {/* MOBILE */}
      <div className="lg:hidden">

        {/* Hero title */}
        <h2 className="text-[40px] leading-[1.1] mb-4">
          {heroCard.title}
        </h2>

        {/* Description + arrows in one container */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-[18px] text-neutral-600">{heroCard.description}</p>

          <div className="flex gap-3">
            <button ref={prevRef} className="w-10 h-10 bg-neutral-200 rounded-full cursor-pointer">←</button>
            <button ref={nextRef} className="w-10 h-10 bg-neutral-200 rounded-full cursor-pointer">→</button>
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
          spaceBetween={10}
          slidesPerView={"auto"}
        >
          {featureCards.map((card, index) => (
            <SwiperSlide key={index} className="!w-[85%]">
              <WorkflowDetailsCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* DESKTOP */}
      <div className="hidden lg:grid grid-cols-3 gap-[10px]">

        <div className="col-span-2">
          <WorkflowDetailsHeroCard card={heroCard} />
        </div>

        <WorkflowDetailsCard card={featureCards[0]} />
        <WorkflowDetailsCard card={featureCards[1]} />
        <WorkflowDetailsCard card={featureCards[2]} />
        <WorkflowDetailsCard card={featureCards[3]} />

      </div>
    </section>
  )
}