
import { type GettingStartedCardType } from "./GettingStarted";
import { formatHeader } from "@/utils/formaters";
import { useTranslation } from "react-i18next";

type Props = {
    card: GettingStartedCardType;
};

export default function GettingStartedCard({ card }: Props) {

        const { t } = useTranslation();

    return (
        <div className="aspect-square bg-white rounded-[1.4375rem] px-[0.9375rem] py-[1.875rem] flex flex-col items-start justify-start h-full overflow-hidden relative
        xs:rounded-[1.25rem] xs:py-[2rem] xs:px-[0.9375rem]
         md:rounded-[1.25rem] md:py-[1.1875rem] md:px-[1.125rem]
         2xl:rounded-[2.5rem] 2xl:ps-[1.5625rem] 2xl:pe-[0.9375rem] 2xl:py-[1.5625rem] 3xl:py-[2rem] 3xl:ps-[1.875rem] 3xl:pe-[1.25rem]
        ">
            {/* Count */}
            <span className="absolute top-[70%] left-1/2 -translate-x-2/6 leading-[1] text-[10.625rem] tracking-[-0.04em] uppercase font-anek text-light-grey
            mdd:top-[75%]  mdd:-translate-x-1/6 mdd:text-[7.6875rem] 
            2xl:top-[73%] 2xl:-translate-x-2/8 2xl:text-[10.625rem] 3xl:text-[13.125rem]">
                {card.count}
            </span>
            {/* Title */}
            <h3 className={`text-[1.125rem] leading-[1] tracking-[-0.04em] text-black mb-4  
            2xl:tracking-[-0.06em]
              ${t('lang') === 'ru' ? " xs:mb-[0.625rem] md:mb-[0.625rem] 2xl:text-[1.5rem] 2xl:leading-[1.1] 2xl:mb-[0.75rem] " : 
              "2xl:text-[1.625rem] 3xl:text-[1.875rem] 2xl:leading-[1.1] 3xl:leading-[1] 2xl:mb-[0.9375rem]  "}`}>
                {formatHeader(card.title)}
            </h3>

            {/* Description */}
            <p className="text-black text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em]">{card.description}</p>
        </div>
    );
}