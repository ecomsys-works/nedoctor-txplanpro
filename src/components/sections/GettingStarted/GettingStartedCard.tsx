
import { type GettingStartedCardType } from "./GettingStarted";

type Props = {
    card: GettingStartedCardType;
};

export default function GettingStartedCard({ card }: Props) {
    return (
        <div className="shadow-md aspect-square bg-white rounded-[23px] md:rounded-[20px] px-[15px] py-[30px] md:py-[18px] 2xl:ps-[25px] 2xl:pe-[15px] 2xl:py-[30px] 3xl:ps-[30px] 3xl:pe-[20px] flex flex-col items-start justify-start h-full overflow-hidden relative">
            {/* Count */}
            <span className="absolute top-[70%] mdd:top-[75%] 2xl:top-[73%] left-1/2 -translate-x-2/6 mdd:-translate-x-1/6 2xl:-translate-x-2/9 leading-[1] text-[170px] mdd:text-[123px] 2xl:text-[170px] 3xl:text-[210px] tracking-[-0.04em] uppercase font-anek text-light-grey">
                {card.count}
            </span>
            {/* Title */}
            <h3 className="text-[18px] 2xl:text-[24px] leading-[1] 2xl:leading-[1.1] tracking-[-0.04em] 2xl:tracking-[-0.06em] text-black mb-4 2xl:mb-2 3xl:mb-4">{card.title}</h3>

            {/* Description */}
            <p className="text-black text-[14px] 2xl:text-[18px] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em]">{card.description}</p>
        </div>
    );
}