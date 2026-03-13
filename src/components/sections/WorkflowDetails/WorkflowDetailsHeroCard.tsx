import {type WorkflowDetailsCardType } from "./WorkflowDetailsCard"

type Props = {
  card: WorkflowDetailsCardType
}

export default function WorkflowDetailsHeroCard({ card }: Props) {
  return (
    <div className="bg-white rounded-[40px] p-10 flex items-center justify-center text-center h-full">

      <div className="max-w-[420px]">

        <h3 className="text-[55px] leading-[1.1] mb-6">
          {card.title}
        </h3>

        <p className="text-[18px] text-neutral-600">
          {card.description}
        </p>

      </div>

    </div>
  )
}