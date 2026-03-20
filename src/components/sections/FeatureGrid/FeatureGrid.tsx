import { useTranslation } from "react-i18next";
import { formatHeader } from "@/utils/formaters";

type FeatureCard =
  | { type: "title"; title: string; description: string }
  | { type: "error"; imageDesk: string; imageTab?: string; imageMob: string }
  | { type: "plan"; label: string; description: string; imageDesk: string; imageTab?: string; imageMob: string }
  | { type: "diagram"; imageDesk: string; imageTab?: string; imageMob: string };

export default function FeatureGrid() {
  const { t } = useTranslation();
  const cards = t("featureGrid.cards", { returnObjects: true }) as FeatureCard[];

  const font = t("featureGrid.font");

  const renderImage = (
    imageMob: string,
    imageTab?: string,
    imageDesk?: string,
    scale?: number
  ) => (
    <picture>

      {/* desktop */}
      {imageDesk && (
        <source
          media="(min-width: 80rem)"
          srcSet={imageDesk}
        />
      )}

      {/* tablet */}
      {imageTab && (
        <source
          media="(min-width: 41.375rem)"
          srcSet={imageTab}
        />
      )}

      {/* mobile fallback */}
      <img
        src={imageMob}
        alt=""
        className="w-full h-full object-contain object-bottom"
        style={{
          transform: scale ? `scale(${scale / 100})` : undefined
        }}
      />

    </picture>
  );

  const renderCardContent = (card: FeatureCard, scale?: number) => {
    switch (card.type) {
      case "title":
        return (
          <div className={`flex flex-col items-center justify-center text-center h-full 
          ${t('lang') === 'ru' ?
              `pb-[1.25rem] pt-[1.875rem] px-[1.5625rem]
              xs:pb-[0.9375rem] xs:pt-[1.5625rem] 
              md:pb-[0.9375rem] 
              2xl:pb-[1.5625rem]`
              :
              `pb-[0.5rem] pt-[0.9375rem] px-[1.5625rem]
              xs:pb-[0.625rem] xs:pt-[1.5625rem] 
              md:pb-[0.9375rem]
              2xl:pb-[1.25rem]
              3xl:pb-[1.25rem]
               `
            }
          `}>
            <h3 className={`font-${font}   
              ${t('lang') === 'ru' ?
                `leading-[1] tracking-[-0.03em] mb-[0.75rem] text-[1.5625rem]
                xs:mb-[1.375rem] xs:text-[1.5625rem]
                md:text-[1.5625rem] md:mb-[0.8125rem] md:max-w-[19.5rem]
                xl:text-[2.5rem] 
                2xl:tracking-[-0.05em] 2xl:mb-[1.25rem] 2xl:text-[2.5rem] 2xl:max-w-[24.6875rem]
                3xl:mb-[0.625rem] 3xl:text-[3.4375rem] 3xl:max-w-[32.875rem]`
                :
                `leading-[1] tracking-[-0.03em] mb-[1.375rem] text-[1.875rem]
                xs:mb-[0.9375rem] xs:text-[1.875rem] 
                md:text-[1.875rem] md:max-w-[17.125rem] md:mb-[0.625rem]
                xl:text-[2.5rem]
                2xl:tracking-[-0.05em] 2xl:mb-[1.125rem] 2xl:text-[2.8125rem] 2xl:max-w-[24.6875rem] 2xl:leading-[0.88]
                3xl:mb-[1.125rem] 3xl:text-[3.4375rem] 3xl:max-w-[28.9375rem]`}
            `}>
              {formatHeader(card.title)}
            </h3>

            <p className={` ${t('lang') === 'ru' ?
              `text-[0.875rem] leading-[1.2] tracking-[-0.04em]
            sm:max-w-[initial]
            md:text-[0.875rem] 
            xl:text-[1.125rem] xl:leading-[1.3]
            2xl:max-w-[22rem]`
              :
              `text-[0.875rem] leading-[1.2] tracking-[-0.04em] 
            sm:max-w-[initial]
            md:text-[0.875rem] 
            xl:text-[1.125rem] xl:leading-[1.3]
            2xl:max-w-[21.5rem]
            `}
            `}>
              {formatHeader(card.description)}
            </p>
          </div>
        );

      case "error":
      case "diagram":
        return renderImage(
          card.imageMob,
          card.imageTab,
          card.imageDesk,
          scale
        );

      case "plan":
        return (
          <div className="relative w-full h-full">

            {renderImage(
              card.imageMob,
              card.imageTab,
              card.imageDesk,
              scale
            )}

            <div className="absolute top-[1.25rem] left-[1.25rem] bg-white/15 bg-opacity-80 pr-[1.25rem]
            xs:top-[1.4375rem] xs:left-[1.4375rem] 
            md:top-[1.25rem] md:left-[1.25rem] 
            xl:left-[2.625rem]
            2xl:top-[2.5rem] 
            3xl:top-[2.3125rem]">
              <div className="flex items-start 
              gap-[0.625rem] 
              xs:gap-[0.75rem] 
              md:gap-[0.625rem] 
              2xl:max-w-[21.875rem] 
              3xl:max-w-[27.5rem]">

                <div className="mt-[0.3125rem] bg-orange rounded-full shrink-0
                w-[0.625rem] h-[0.625rem]  
                xs:w-[1rem] xs:h-[1rem]  
                md:w-[0.625rem] md:h-[0.625rem] 
                2xl:w-[1.5625rem] 2xl:h-[1.5625rem] 2xl:mt-[0rem]" />

                <div className="flex flex-col xs:gap-[0.625rem] md:gap-[0.3125rem] 3xl:gap-0">

                  <span className="leading-[1.3] tracking-[-0.04em] font-semibold
                  xs:text-[1.125rem] 
                  md:text-[0.875rem] 
                  xl:text-[1.125rem] ">
                    {card.label}
                  </span>

                  <p className="text-[0.875rem]  leading-[1.3] tracking-[-0.04em]
                  xs:max-w-[19.9375rem] 
                  md:max-w-[15.25rem]
                  xl:text-[1.125rem] 
                  2xl:max-w-[initial]
                  3xl:max-w-[21.875rem]">
                    {card.description}
                  </p>
                </div>

              </div>
            </div>

          </div>
        );
    }
  };

  return (
    <section className={`feature-grid gsap-up my-container 
       ${t('lang') === 'ru' ?
        `mb-[1.875rem] 
        xs:mb-[2.5rem] 
        md:mb-[2.8125rem] 
        2xl:mb-[8.4375rem] 
        3xl:mb-[8.125rem]`
        :
        `mb-[2.1875rem] 
        xs:mb-[2.8125rem] 
        md:mb-[3.25rem] 
        2xl:mb-[8.125rem] 
        3xl:mb-[8.125rem]`}
    `}>

      {/* Десктоп и планшет */}
      <div className="hidden md:grid grid-cols-2 gap-[0.375rem] bg-black p-[0.375rem] rounded-[2.5rem] 
        xl:rounded-[4.125rem] 2xl:gap-[0.5625rem] 2xl:p-[0.5625rem] 
      ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-[2.1875rem] overflow-hidden
            md:aspect-[464/385] 
            xl:rounded-[3.625rem]
            2xl:aspect-[636/535]
            3xl:aspect-[787/652] "
          >
            {renderCardContent(card)}
          </div>
        ))}
      </div>

      {/* Мобильная версия */}
      <div className="grid md:hidden gap-[0.1875rem] bg-black p-[0.1875rem] rounded-[1.75rem] 
      xs:gap-[0.3125rem] xs:p-[0.3125rem] xs:rounded-[2.1875rem]">

        {/* Первая + вторая карточка */}
        {cards[0] && cards[1] && (
          <div className="bg-white rounded-[1.5625rem] flex flex-col overflow-hidden
          xs:rounded-[1.875rem] 
          md:aspect-[787/652]">

            <div className="flex-1 pt-[0.625rem] relative z-10 
            xs:pt-[2.8125rem]">
              {renderCardContent(cards[0])}
            </div>

            <div className="flex-1 -mt-6">
              {renderCardContent(cards[1])}
            </div>
          </div>
        )}

        {/* Остальные карточки */}
        {cards.slice(2).map((card, index) => (
          <div
            key={index + 2}
            className="bg-white rounded-[1.5625rem] aspect-[589/498] overflow-hidden
            xs:rounded-[1.875rem] "
          >
            {renderCardContent(card)}
          </div>
        ))}

      </div>

    </section>
  );
}