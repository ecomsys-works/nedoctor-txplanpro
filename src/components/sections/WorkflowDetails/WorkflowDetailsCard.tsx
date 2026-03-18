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
    "max-h-[65%] mb-[35px] 2xl:max-h-[65%] 3xl:max-h-[72%] mb-[10px]",
    "max-h-[70%] mb-[35px] 2xl:max-h-[69%] 3xl:max-h-[77%]",
    "max-h-[70%] mb-[35px] 2xl:max-h-[73%] 2xl:mb-[20px] 3xl:max-h-[87%] 3xl:-mb-[15px]",
    "max-h-[65%] mb-[35px] 2xl:max-h-[72%] 3xl:max-h-[86%] 3xl:-mb-[20px]",
  ]

  return (
    <div className="relative flex flex-col h-full rounded-[20px] bg-white
      md:rounded-[35px] md:aspect-[46/43] md:p-[24px]
      2xl:aspect-[635/529] 2xl:rounded-[50px] 2xl:p-[30px]
      3xl:aspect-[521/434] 3xl:rounded-[40px] 3xl:p-[25px]">

      {/* label top-right */}
      <div className="absolute text-[12px] leading-[1.3] tracking-[-0.04em] h-[22px] px-[10px] font-light rounded-full flex items-center bg-[radial-gradient(116.67%_116.67%_at_50%_50%,#fff_0%,#f2f2f2_80.91%)] border-[0.3px] border-dusty-blue      
      md:text-[14px] md:h-[25px] md:px-[15px] 
      xl:text-[18px] xl:h-[35px] md:right-[25px]
      2xl:top-[35px] 2xl:right-[35px] 
      3xl:top-[25px] 3xl:right-[25px]        
       ">
        {card.label}
      </div>

      {/* контейнер для картинки */}
      <div className="pb-[20px] flex-1 flex items-end justify-center overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className={`object-contain object-bottom ${imageClasses[index]}`}
        />
      </div>

      {/* bottom text */}
      <div className="flex-shrink-0">
        <h4 className="text-[18px] leading-[1] tracking-[-0.06em] md:mb-[8px] 2xl:mb-[13px] 3xl:mb-[15px] 
        xl:text-[26px] 3xl:text-[30px] ">
          {card.title}
        </h4>

        <p className="text-[14px] leading-[1.3] tracking-[-0.04em] xl:text-[18px]">
          {formatHeader(card.description)}
        </p>
      </div>

    </div>
  )
}