export type WorkflowDetailsCardType = {
  title: string
  description: string
  label: string
  image: string
}

type Props = {
  card: WorkflowDetailsCardType
}

export default function WorkflowDetailsCard({ card }: Props) {
  return (
    <div className="bg-white rounded-[40px] p-6 flex flex-col h-full">

      {/* label */}

      <div className="flex justify-end">

        <div className="h-[35px] px-[15px] rounded-full bg-neutral-200 flex items-center text-[18px]">
          {card.label}
        </div>

      </div>

      {/* image */}

      <div className="flex justify-center flex-1 items-center py-6">

        <img
          src={card.image}
          alt={card.title}
          className="w-[50%] object-contain"
        />

      </div>

      {/* bottom text */}

      <div className="mt-auto">

        <h4 className="text-[35px] mb-2">
          {card.title}
        </h4>

        <p className="text-[18px] text-neutral-600">
          {card.description}
        </p>

      </div>

    </div>
  )
}