import { formatHeader } from "@/utils/formaters"

export type WorkflowDetailsCardType = {
  title: string
  description: string
  label: string
  image: string
}

type Props = {
  card: WorkflowDetailsCardType
  index: number
}

export default function WorkflowDetailsCard({ card, index }: Props) {
  // массив для управления размерами картинок каждой карточки
  const imageClasses = [
    "max-h-[65%] mb-[2.1875rem] 2xl:max-h-[65%] 3xl:max-h-[72%] mb-[0.625rem]",
    "max-h-[70%] mb-[2.1875rem] 2xl:max-h-[69%] 3xl:max-h-[77%]",
    "max-h-[70%] mb-[2.1875rem] 2xl:max-h-[73%] 2xl:mb-[1.25rem] 3xl:max-h-[87%] 3xl:-mb-[0.9375rem]",
    "max-h-[65%] mb-[2.1875rem] 2xl:max-h-[72%] 3xl:max-h-[86%] 3xl:-mb-[1.25rem]",
  ]

  return (
    <div className="relative flex flex-col h-full rounded-[1.25rem] bg-white
      md:rounded-[2.1875rem] md:aspect-[46/43] md:p-[1.5rem]
      2xl:aspect-[635/529] 2xl:rounded-[3.125rem] 2xl:p-[1.875rem]
      3xl:aspect-[521/434] 3xl:rounded-[2.5rem] 3xl:p-[1.5625rem]">

      {/* label top-right */}
      <div className="absolute text-[0.75rem] leading-[1.3] tracking-[-0.04em] h-[1.375rem] px-[0.625rem] font-light rounded-full flex items-center bg-[radial-gradient(116.67%_116.67%_at_50%_50%,#fff_0%,#f2f2f2_80.91%)] border-[0.0188rem] border-dusty-blue      
      md:text-[0.875rem] md:h-[1.5625rem] md:px-[0.9375rem] 
      xl:text-[1.125rem] xl:h-[2.1875rem] md:right-[1.5625rem]
      2xl:top-[2.1875rem] 2xl:right-[2.1875rem] 
      3xl:top-[1.5625rem] 3xl:right-[1.5625rem]        
       ">
        {card.label}
      </div>

      {/* контейнер для картинки */}
      <div className="pb-[1.25rem] flex-1 flex items-end justify-center overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className={`object-contain object-bottom ${imageClasses[index]}`}
        />
      </div>

      {/* bottom text */}
      <div className="flex-shrink-0">
        <h4 className="text-[1.125rem] leading-[1] tracking-[-0.06em] md:mb-[0.5rem] 2xl:mb-[0.8125rem] 3xl:mb-[0.9375rem] 
        xl:text-[1.625rem] 3xl:text-[1.875rem] ">
          {card.title}
        </h4>

        <p className="text-[0.875rem] leading-[1.3] tracking-[-0.04em] xl:text-[1.125rem]">
          {formatHeader(card.description)}
        </p>
      </div>

    </div>
  )
}