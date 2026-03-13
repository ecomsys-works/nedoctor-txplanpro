export type LabelCard = {
  type: "label";
  label: string;
  description: string;
};

type Props = {
  card: LabelCard;
};

export default function LabelCard({ card }: Props) {
  return (
    <div className="bg-white rounded-[60px] aspect-[720/650] flex flex-col items-center justify-center text-center p-10">

      <div className="flex items-center gap-2 mb-4">
        <div className="w-[10px] h-[10px] bg-red-500 rounded-full" />

        <span className="text-[18px] font-semibold">
          {card.label}
        </span>
      </div>

      <p className="text-[18px] max-w-[400px]">
        {card.description}
      </p>

    </div>
  );
}