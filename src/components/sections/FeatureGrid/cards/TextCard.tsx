export type TextCard = {
  type: "text";
  title: string;
  description: string;
};

type Props = {
  card: TextCard;
};

export default function TextCard({ card }: Props) {
  return (
    <div className="bg-white rounded-[60px] aspect-[720/650] flex flex-col items-center justify-center text-center p-10">
      <h3 className="text-[55px] leading-[1.1] mb-6">
        {card.title}
      </h3>

      <p className="text-[18px] max-w-[420px]">
        {card.description}
      </p>
    </div>
  );
}