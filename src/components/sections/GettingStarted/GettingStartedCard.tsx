
import { type GettingStartedCardType } from "./GettingStarted";

type Props = {
    card: GettingStartedCardType;
};

export default function GettingStartedCard({ card }: Props) {
    return (
        <div className="shadow-md aspect-square bg-white rounded-[1.4375rem] md:rounded-[1.25rem] px-[0.9375rem] py-[1.875rem] md:py-[1.125rem] 2xl:ps-[1.5625rem] 2xl:pe-[0.9375rem] 2xl:py-[1.875rem] 3xl:ps-[1.875rem] 3xl:pe-[1.25rem] flex flex-col items-start justify-start h-full overflow-hidden relative">
            {/* Count */}
            <span className="absolute top-[70%] mdd:top-[75%] 2xl:top-[73%] left-1/2 -translate-x-2/6 mdd:-translate-x-1/6 2xl:-translate-x-2/9 leading-[1] text-[10.625rem] mdd:text-[7.6875rem] 2xl:text-[10.625rem] 3xl:text-[13.125rem] tracking-[-0.04em] uppercase font-anek text-light-grey">
                {card.count}
            </span>
            {/* Title */}
            <h3 className="text-[1.125rem] 2xl:text-[1.5rem] leading-[1] 2xl:leading-[1.1] tracking-[-0.04em] 2xl:tracking-[-0.06em] text-black mb-4 2xl:mb-2 3xl:mb-4">{card.title}</h3>

            {/* Description */}
            <p className="text-black text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em]">{card.description}</p>
        </div>
    );
}