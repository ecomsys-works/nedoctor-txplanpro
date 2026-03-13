export type ImageCard = {
  type: "image";
  image: string;
};

type Props = {
  card: ImageCard;
};

export default function ImageCard({ card }: Props) {
  return (
    <div className="bg-white rounded-[60px] aspect-[720/650] flex items-center justify-center p-10">
      <img
        src={card.image}
        alt=""
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}