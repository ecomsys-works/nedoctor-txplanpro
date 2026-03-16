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
      <div className="px-[0.9375rem] py-[1.5625rem] 2xl:px-[1.875rem] bg-white rounded-[1.25rem] 2xl:rounded-[2.5rem] overflow-hidden flex flex-col h-full">

        <div className="flex flex-col flex-1 justify-between">

          {/* Текстовая часть */}
          <div>
            <div className="flex items-center justify-between gap-5 2xl:gap-15 mb-[0.9375rem]">
              <h3 className="text-[1.125rem] 2xl:text-[1.5rem] leading-[1] md:leading-[1.1] tracking-[-0.06em]">
                {card.title}
              </h3>

              <div className="shrink-0 w-[2.1875rem] h-[2.1875rem] 2xl:w-[3.25rem] 2xl:h-[3.25rem] 3xl:w-[3.75rem] 3xl:h-[3.75rem] rounded-full bg-dusty-blue/20 flex items-center justify-center">
                <svg className="w-[0.625rem] h-[0.625rem] 2xl:w-[1.375rem] 2xl:h-[1.375rem] 3xl:w-[1.5625rem] 3xl:h-[1.5625rem] text-black">
                  <use href={`/icons/sprite/sprite.svg#${card.icon}`} />
                </svg>
              </div>
            </div>

            <p className="text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] md:leading-[1.3] tracking-[-0.04em] ">
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