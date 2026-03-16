import { formatHeader } from "@/utils/formaters"
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
    <div className="flex flex-col justify-between rounded-[1.25rem] md:rounded-[2.5rem] p-[0.9375rem] md:p-[1.5625rem] flex flex-col h-full bg-white md:aspect-[46/43] 2xl:aspect-[635/529] 3xl:aspect-[initial]">

      {/* label */}

      <div className="flex justify-end">

        <div className="text-[0.75rem] leading-[1.3] tracking-[-0.04em] h-[1.375rem] px-[0.625rem] md:text-[0.875rem] md:h-[1.5625rem] md:px-[0.9375rem] xl:text-[1.125rem] xl:h-[2.1875rem] 
        rounded-full flex items-center bg-[radial-gradient(116.67%_116.67%_at_50%_50%,#fff_0%,#f2f2f2_80.91%)] border-[0.0188rem] border-dusty-blue">
          {card.label}
        </div>

      </div>

      {/* image */}

      <div className="pt-[0.625rem] pb-[0.625rem] 2xl:pb-[1.875rem]">
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
        <h4 className="text-[1.125rem] xl:text-[1.625rem] 3xl:text-[1.875rem] leading-[1] tracking-[-0.04em] mb-[0.625rem] xl:text-[2.1875rem]">
          {card.title}
        </h4>

        <p className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] xl:text-[1.125rem]">          
          {formatHeader(card.description)}
        </p>

      </div>
    </div>
  )
}