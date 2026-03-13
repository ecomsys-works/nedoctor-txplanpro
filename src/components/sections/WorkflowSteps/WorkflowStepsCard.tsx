export type WorkflowStepsCardType = {
  title: string
  description: string
  icon: string
  image: string
}

type Props = {
  card: WorkflowStepsCardType
}

export default function WorkflowCard({ card }: Props) {
  return (
    <div className="bg-white rounded-[40px] overflow-hidden flex flex-col h-full">

      <div className="p-6">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-[24px] font-medium">
            {card.title}
          </h3>

          <div className="w-[48px] h-[48px] rounded-full bg-neutral-100 flex items-center justify-center">
            {card.icon}
          </div>

        </div>

        <p className="text-[18px] text-neutral-600">
          {card.description}
        </p>

      </div>

      <div className="mt-auto">
        <img
          src={card.image}
          alt=""
          className="w-full object-cover"
        />
      </div>

    </div>
  )
}