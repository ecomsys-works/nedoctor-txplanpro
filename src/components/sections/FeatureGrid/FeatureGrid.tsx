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
          <div className="flex flex-col items-center justify-center text-center h-full p-6">
            <h3 className={`text-[1.75rem] md:text-[1.5625rem] xl:text-[2.5rem] tracking-[-0.03em] 2xl:tracking-[-0.05em] font-${font} mb-[0.625rem]  
            md:max-w-[19.5rem] md:mb-[0.625rem]  2xl:max-w-[21.875rem] 2xl:max-w-[24.6875rem] 3xl:max-w-[32.875rem]
              ${t('lang') === 'ru' ? "leading-[1] 2xl:text-[2.5rem] 3xl:text-[3.4375rem]  " :"leading-[0.88] 2xl:text-[2.8125rem] 3xl:text-[3.4375rem]  "}
            `}>
              {formatHeader(card.title)}
            </h3>

            <p className="sm:max-w-[initial] 2xl:max-w-[22rem] text-[0.875rem] md:text-[0.875rem] xl:text-[1.125rem] leading-[1.2] xl:leading-[1.3] tracking-[-0.04em]">
              {card.description.split("[br]").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
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

            <div className="absolute top-[1.25rem] left-[1.25rem] 2xl:top-[2.6875rem] 3xl:top-[2.3125rem] xl:left-[2.625rem] bg-white/15 bg-opacity-80 pr-[1.25rem]">
              <div className="flex items-start md:gap-[0.5rem] 2xl:max-w-[21.875rem] 3xl:max-w-[27.5rem]">

                <div className="w-[0.625rem] h-[0.625rem] 2xl:w-[1.5625rem] 2xl:h-[1.5625rem] mt-[0.3125rem]  bg-orange rounded-full shrink-0" />

                <div className="flex flex-col md:gap-[0.3125rem] 3xl:gap-0">
                  <span className="text-[0.875rem] xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-semibold">
                    {card.label}
                  </span>

                  <p className="md:max-w-[19.9375rem] 2xl:max-w-[initial] text-[0.875rem] xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em]">
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
    <section className="feature-grid gsap-up my-container mb-[2.1875rem] sm:mb-[2.5rem] 2xl:mb-[8.125rem]">

      {/* Десктоп и планшет */}
      <div className="hidden grid-cols-2 gap-[0.375rem] bg-black p-[0.375rem] rounded-[2.5rem] 
       smm:grid xl:rounded-[4.125rem] 2xl:gap-[0.5rem] 2xl:p-[0.5rem] 
      ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="md:aspect-[464/385] 2xl:aspect-[636/535] 3xl:aspect-[787/652] bg-white rounded-[2.1875rem] xl:rounded-[3.625rem] overflow-hidden"
          >
            {renderCardContent(card)}
          </div>
        ))}
      </div>

      {/* Мобильная версия */}
      <div className="grid smm:hidden gap-[0.1875rem] xs:gap-[0.3125rem] bg-black p-[0.1875rem] xs:p-[0.3125rem] rounded-[1.75rem] xs:rounded-[2.1875rem]">

        {/* Первая + вторая карточка */}
        {cards[0] && cards[1] && (
          <div className="smm:aspect-[787/652] bg-white rounded-[1.5625rem] xs:rounded-[1.875rem] flex flex-col overflow-hidden">
            <div className="flex-1 pt-[0.625rem] xs:pt-[3.4375rem] ">
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
            className="bg-white rounded-[1.5625rem] xs:rounded-[1.875rem] aspect-[589/498] overflow-hidden"
          >
            {renderCardContent(card)}
          </div>
        ))}

      </div>

    </section>
  );
}