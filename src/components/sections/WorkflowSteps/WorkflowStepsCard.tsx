import { formatHeader } from "@/utils/formaters"
import { useTranslation } from "react-i18next"

export type WorkflowStepsCardType = {
  title: string
  description: string
  icon: string
  image: string
}

type Props = {
  card: WorkflowStepsCardType,
  index?: number
}

export default function WorkflowCard({ card, index = 0 }: Props) {

  const { t } = useTranslation()

  const imageClasses = [
    "max-w-[75%] 2xl:max-w-[65%] 3xl:max-w-[66.5%]",
    "max-w-[75%] 2xl:max-w-[65%] 3xl:max-w-[66.5%]",
    "max-w-[65%] 2xl:max-w-[95%] md:max-w-[100%] xl:max-w-[77%]",
    "max-w-[65%] 2xl:max-w-[95%] md:max-w-[100%] xl:max-w-[77%]",
    "max-w-[75%] 2xl:max-w-[65%] 3xl:max-w-[66.5%]",
    "max-w-[75%] 2xl:max-w-[65%] 3xl:max-w-[66.5%]"
  ]


  return (
    <div className="h-full w-full">
      <div className={`bg-white rounded-[1.25rem] overflow-hidden flex flex-col h-full 2xl:rounded-[2.1875rem] 3xl:rounded-[2.5rem] 
       ${t('lang') === 'ru' ? "px-[1.25rem] pt-[1.875rem] pb-[1.875rem] md:py-[1.25rem] md:px-[0.9375rem] 2xl:pt-[2.1875rem] 2xl:px-[1.875rem] 3xl:pt-[1.875rem] " : 
       "px-[1.25rem] pt-[2.0625rem] pb-[1.875rem] 2xl:px-[1.875rem]"}`}>

        <div className="flex flex-col flex-1 justify-between">

          {/* Текстовая часть */}
          <div>
            <div className="flex items-start justify-between gap-[0.3125rem] 2xl:gap-[0rem]">
              <h3 className={`tracking-[-0.06em] leading-[1] md:leading-[1.1]
              ${t('lang') === 'ru' ? "text-[1.125rem] 2xl:text-[1.5rem] md:mb-[0.5625rem] 2xl:mb-[1.1875rem] " : 
                "text-[1.125rem] 2xl:text-[1.625rem] 3xl:text-[1.875rem] mb-[1.1875rem]"}
                `}>
                {formatHeader(card.title)}
              </h3>

              <div className="shrink-0 w-[2.1875rem] h-[2.1875rem] 2xl:w-[3.25rem] 2xl:h-[3.25rem] 3xl:w-[3.75rem] 3xl:h-[3.75rem] rounded-full bg-dusty-blue/20 flex items-center justify-center">
                <svg className="w-[0.625rem] h-[0.625rem] 2xl:w-[1.375rem] 2xl:h-[1.375rem] text-black">
                  <use href={`/icons/sprite/sprite.svg#${card.icon}`} />
                </svg>
              </div>
            </div>

            <p className="text-[0.875rem] md:leading-[1.2] 2xl:text-[1.125rem] tracking-[-0.04em] ">
              {card.description}
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 w-full flex items-end justify-center">
            <img
              src={card.image}
              alt={card.title}
              className={`h-full ${imageClasses[index]} object-contain object-bottom`}
            />
          </div>

        </div>
      </div>
    </div>
  )
}