import { type WorkflowDetailsCardType } from "./WorkflowDetailsCard"
import { formatHeader } from "@/utils/formaters"

type Props = {
  card: WorkflowDetailsCardType,
  font: string;
}

export default function WorkflowDetailsHeroCard({ card, font }: Props) {


  return (
    <div className="bg-white rounded-[40px] p-10 flex items-center justify-center text-center h-full">

      <div className="flex flex-col gap-[10px]">


        <h3 className={`text-[55px] leading-[1] tracking-[-0.03em] font-${font}`}>
          {card.title}
        </h3>

        <p className="text-[18px] leading-[1.3] tracking-[-0.04em]">
          {formatHeader(card.description)}
        </p>

      </div>

    </div>
  )
}