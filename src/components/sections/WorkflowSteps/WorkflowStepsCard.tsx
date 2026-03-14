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

export default function WorkflowCard({ card, index = 0}: Props) {

  const imageClasses = [
    "max-w-[65%] 3xl:max-w-[68%]",
    "max-w-[65%] 3xl:max-w-[68%]",
    "max-w-[95%] md:max-w-[100%] xl:max-w-[80%]",
    "max-w-[95%] md:max-w-[100%] xl:max-w-[80%]",
    "max-w-[65%] 3xl:max-w-[68%]",
    "max-w-[65%] 3xl:max-w-[68%]"
  ]
 

  return (
    <div className="h-full w-full">
      <div className="px-[15px] py-[25px] 2xl:px-[30px] bg-white rounded-[20px] 2xl:rounded-[40px] overflow-hidden flex flex-col h-full">

        <div className="flex flex-col flex-1 justify-between">

          {/* Текстовая часть */}
          <div>
            <div className="flex items-center justify-between gap-5 2xl:gap-15 mb-[15px]">
              <h3 className="text-[18px] 2xl:text-[24px] leading-[1] md:leading-[1.1] tracking-[-0.06em]">
                {card.title}
              </h3>

              <div className="shrink-0 w-[35px] h-[35px] 2xl:w-[52px] 2xl:h-[52px] 3xl:w-[60px] 3xl:h-[60px] rounded-full bg-dusty-blue/20 flex items-center justify-center">
                <svg className="w-[10px] h-[10px] 2xl:w-[22px] 2xl:h-[22px] 3xl:w-[25px] 3xl:h-[25px] text-black">
                  <use href={`/icons/sprite/sprite.svg#${card.icon}`} />
                </svg>
              </div>
            </div>

            <p className="text-[14px] 2xl:text-[18px] leading-[1.2] md:leading-[1.3] tracking-[-0.04em] ">
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