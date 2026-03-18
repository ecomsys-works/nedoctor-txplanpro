import { type WorkflowDetailsCardType } from "./WorkflowDetailsCard"
import { formatHeader } from "@/utils/formaters"

type Props = {
  card: WorkflowDetailsCardType,
  font: string;
}

export default function WorkflowDetailsHeroCard({ card, font }: Props) {


  return (
    <div className="bg-white rounded-[2.5rem] p-10 flex items-center justify-center text-center h-full">

      <div className="flex flex-col gap-[0.625rem]">


        <h3 className={`text-[3.4375rem] leading-[1] tracking-[-0.05em] font-${font}`}>
          {card.title}
        </h3>

        <p className="text-[1.125rem] leading-[1.3] tracking-[-0.04em] mx-auto">
          {formatHeader(card.description)}
        </p>

      </div>

    </div>
  )
}