export type WorkflowDetailsCardType = {
  title: string
  description: string
  label: string
  image: string
}

type Props = {
  card: WorkflowDetailsCardType
  index: number;
}

export default function WorkflowDetailsCard({ card, index }: Props) {
  const imageClasses = [
    "2xl:pt-[10%]",
    "",
    "",
    "",
  ]

  return (
    <div className="flex flex-col justify-between rounded-[20px] md:rounded-[40px] p-[15px] md:p-[25px] flex flex-col h-full bg-white md:aspect-[46/43] 2xl:aspect-[635/529] 3xl:aspect-[initial]">

      {/* label */}

      <div className="flex justify-end">

        <div className="text-[12px] leading-[1.3] tracking-[-0.04em] h-[22px] px-[10px] md:text-[14px] md:h-[25px] md:px-[15px] xl:text-[18px] xl:h-[35px] 
        rounded-full flex items-center bg-[radial-gradient(116.67%_116.67%_at_50%_50%,#fff_0%,#f2f2f2_80.91%)] border-[0.3px] border-dusty-blue">
          {card.label}
        </div>

      </div>

      {/* image */}

      <div className="pt-[10px] pb-[10px] 2xl:pb-[30px]">
        <div className="aspect-[42/22] w-full flex items-end justify-center">
          <img
            src={card.image}
            alt={card.title}
            className={`h-full object-contain ${imageClasses[index]}`}
          />

        </div>
      </div>

      {/* bottom text */}

      <div className="block">
        <h4 className="text-[18px] xl:text-[26px] 3xl:text-[30px] leading-[1] tracking-[-0.04em] mb-[10px] xl:text-[35px]">
          {card.title}
        </h4>

        <p className="text-[14px] leading-[1.2] tracking-[-0.04em] xl:text-[18px]">
          {card.description}
        </p>

      </div>
    </div>
  )
}