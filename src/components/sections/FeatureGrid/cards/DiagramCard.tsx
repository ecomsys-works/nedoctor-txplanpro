export type DiagramPoint = {
  text: string;
};

export type DiagramCard = {
  type: "diagram";
  points: DiagramPoint[];
};

type Props = {
  card: DiagramCard;
};

export default function DiagramCardComponent({ card }: Props) {
  return (
    <div className="bg-white rounded-[60px] aspect-[720/650] relative flex items-center justify-center p-10">

      <div className="relative w-full h-full">

        <div className="absolute top-[30%] left-[20%] w-[60%] h-[2px] bg-black rotate-[20deg]" />

        <div className="absolute top-[20%] left-[15%] text-[18px]">
          ● {card.points[0].text}
        </div>

        <div className="absolute top-[50%] left-[45%] text-[18px]">
          ● {card.points[1].text}
        </div>

        <div className="absolute bottom-[20%] right-[10%] text-[18px]">
          ● {card.points[2].text}
        </div>

      </div>

    </div>
  );
}