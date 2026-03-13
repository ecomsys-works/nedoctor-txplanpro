
import { type GettingStartedCardType } from "./GettingStarted";

type Props = {
    card: GettingStartedCardType;
};

export default function GettingStartedCard({ card }: Props) {
    return (
        <div className="bg-white rounded-[20px] p-6 flex flex-col items-start justify-start shadow-md h-full">
            {/* Count */}
            <span className="text-[20px] font-bold text-gray-400 mb-2">{card.count}</span>

            {/* Title */}
            <h3 className="text-[24px] font-semibold mb-2">{card.title}</h3>

            {/* Description */}
            <p className="text-[16px] text-gray-600">{card.description}</p>
        </div>
    );
}