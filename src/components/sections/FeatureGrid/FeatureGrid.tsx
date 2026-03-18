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
          media="(min-width: 1280px)"
          srcSet={imageDesk}
        />
      )}

      {/* tablet */}
      {imageTab && (
        <source
          media="(min-width: 662px)"
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
            <h3 className={`text-[28px] md:text-[25px] xl:text-[40px] tracking-[-0.03em] 2xl:tracking-[-0.05em] font-${font} mb-[10px]  
            md:max-w-[312px] md:mb-[10px]  2xl:max-w-[350px] 2xl:max-w-[395px] 3xl:max-w-[526px]
              ${t('lang') === 'ru' ? "leading-[1] 2xl:text-[40px] 3xl:text-[55px]  " :"leading-[0.88] 2xl:text-[45px] 3xl:text-[55px]  "}
            `}>
              {formatHeader(card.title)}
            </h3>

            <p className="sm:max-w-[initial] 2xl:max-w-[352px] text-[14px] md:text-[14px] xl:text-[18px] leading-[1.2] xl:leading-[1.3] tracking-[-0.04em]">
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

            <div className="absolute top-[20px] left-[20px] 2xl:top-[43px] 3xl:top-[37px] xl:left-[42px] bg-white/15 bg-opacity-80 pr-[20px]">
              <div className="flex items-start md:gap-[8px] 2xl:max-w-[350px] 3xl:max-w-[440px]">

                <div className="w-[10px] h-[10px] 2xl:w-[25px] 2xl:h-[25px] mt-[5px]  bg-orange rounded-full shrink-0" />

                <div className="flex flex-col md:gap-[5px] 3xl:gap-0">
                  <span className="text-[14px] xl:text-[18px] leading-[1.3] tracking-[-0.04em] font-semibold">
                    {card.label}
                  </span>

                  <p className="md:max-w-[319px] 2xl:max-w-[initial] text-[14px] xl:text-[18px] leading-[1.3] tracking-[-0.04em]">
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
    <section className="feature-grid gsap-up my-container mb-[35px] sm:mb-[40px] 2xl:mb-[130px]">

      {/* Десктоп и планшет */}
      <div className="hidden grid-cols-2 gap-[6px] bg-black p-[6px] rounded-[40px] 
       smm:grid xl:rounded-[66px] 2xl:gap-[8px] 2xl:p-[8px] 
      ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="md:aspect-[464/385] 2xl:aspect-[636/535] 3xl:aspect-[787/652] bg-white rounded-[35px] xl:rounded-[58px] overflow-hidden"
          >
            {renderCardContent(card)}
          </div>
        ))}
      </div>

      {/* Мобильная версия */}
      <div className="grid smm:hidden gap-[3px] xs:gap-[5px] bg-black p-[3px] xs:p-[5px] rounded-[28px] xs:rounded-[35px]">

        {/* Первая + вторая карточка */}
        {cards[0] && cards[1] && (
          <div className="smm:aspect-[787/652] bg-white rounded-[25px] xs:rounded-[30px] flex flex-col overflow-hidden">
            <div className="flex-1 pt-[10px] xs:pt-[55px] ">
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
            className="bg-white rounded-[25px] xs:rounded-[30px] aspect-[589/498] overflow-hidden"
          >
            {renderCardContent(card)}
          </div>
        ))}

      </div>

    </section>
  );
}