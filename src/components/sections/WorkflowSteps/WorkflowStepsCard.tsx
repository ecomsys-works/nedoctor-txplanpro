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
      <div className={`bg-white rounded-[20px] overflow-hidden flex flex-col h-full 2xl:rounded-[35px] 3xl:rounded-[40px] 
       ${t('lang') === 'ru' ? "px-[20px] pt-[30px] pb-[30px] md:py-[20px] md:px-[15px] 2xl:pt-[35px] 2xl:px-[30px] 3xl:pt-[30px] " : 
       "px-[20px] pt-[33px] pb-[30px] 2xl:px-[30px]"}`}>

        <div className="flex flex-col flex-1 justify-between">

          {/* Текстовая часть */}
          <div>
            <div className="flex items-start justify-between gap-[5px] 2xl:gap-[0px]">
              <h3 className={`tracking-[-0.06em] leading-[1] md:leading-[1.1]
              ${t('lang') === 'ru' ? "text-[18px] 2xl:text-[24px] md:mb-[9px] 2xl:mb-[19px] " : 
                "text-[18px] 2xl:text-[26px] 3xl:text-[30px] mb-[19px]"}
                `}>
                {formatHeader(card.title)}
              </h3>

              <div className="shrink-0 w-[35px] h-[35px] 2xl:w-[52px] 2xl:h-[52px] 3xl:w-[60px] 3xl:h-[60px] rounded-full bg-dusty-blue/20 flex items-center justify-center">
                <svg className="w-[10px] h-[10px] 2xl:w-[22px] 2xl:h-[22px] text-black">
                  <use href={`/icons/sprite/sprite.svg#${card.icon}`} />
                </svg>
              </div>
            </div>

            <p className="text-[14px] md:leading-[1.2] 2xl:text-[18px] tracking-[-0.04em] ">
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