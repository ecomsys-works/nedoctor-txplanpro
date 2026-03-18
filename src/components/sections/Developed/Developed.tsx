import { useTranslation } from "react-i18next";
import { formatHeader } from "@/utils/formaters";

type CardType = {
  title: string;
  description: string;
};

type SectionType = {
  top: CardType;
  bottom: CardType[];
};

export default function Developed() {
  const { t } = useTranslation();

  // Верхний текст
  const top: CardType = t("developed.top", { returnObjects: true }) as CardType;

  // Нижние карточки
  const bottom: CardType[] = t("developed.bottom", { returnObjects: true }) as CardType[];

  const section: SectionType = { top, bottom };

  // Диаграммы
  const diagramMob = t("developed.diagramMob");
  const diagramDesk = t("developed.diagramDesk");

  const font = t("developed.font");

  return (
    <section className="developed gsap-up my-container mb-[65px] sm:mb-[90px] mdd:mb-[60px] 2xl:mb-[190px]">

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="relative bg-white p-[20px] rounded-[20px] overflow-hidden p-6
         md:p-[20px] 2xl:p-[30px] 2xl:rounded-[50px] 3xl:px-[40px] 3xl:py-[32px] ">

          {/* Верхний ряд */}
          <div className="relative 2xl:mb-[60px] 3xl:mb-[70px]">
            <div className="flex flex-col absolute top-0 left-0 ">
              <h2 className={`pt-[5px] max-w-[250px] text-[36px] text-black font-${font}
              md:text-[25px] 2xl:tracking-[-0.05em] 3xl:text-[55px]
               ${t('lang') === 'ru' ? "leading-[1] mb-[15pxp] md:mb-[10px] 2xl:mb-[20px] 3xl:mb-[20px] 2xl:text-[40px]" :
                "leading-[0.88] mb-[15pxp] md:mb-[10px] 2xl:mb-[20px] 3xl:mb-[25px] 2xl:text-[45px]"}
              `}>
                {formatHeader(section.top.title)}
              </h2>

              <p className="max-w-[382px] text-[25px] text-black leading-[1.3] tracking-[-0.04em]
              sm:text-[36px] md:text-[14px] 2xl:text-[18px]">
                {section.top.description}
              </p>
            </div>


          <div className="md:pt-[40px] 2xl:pt-0 3xl:pt-[15px] md:pl-[15%] 2xl:pl-[0] 3xl:pl-[15%] ">
            <img
              src={diagramDesk}
              alt="Diagram"
              className="h-full w-auto aspect-[1294/676] "
            />
            </div>
          </div>

          {/* Нижний ряд */}
          <div className={`grid justify-between 
           ${t('lang') === 'ru' ? "md:grid-cols-[36%_38%_26%] md:pt-[65px] 2xl:grid-cols-[36%_39%_25%] 2xl:pt-[0] 3xl:pt-[50px]" : 
            "2xl:grid-cols-[38%_38%_24%] 3xl:grid-cols-[24%_26%_25%_25%]"}

            `}>
            {section.bottom.map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-[10px] rounded-[20px] bg-white"
              >
                <span className="shrink-0 bg-red-500 rounded-full 
                md:w-[10px] md:h-[10px] md:mt-1
                2xl:w-[16px] 2xl:h-[16px] 2xl:mt-1"></span>

                <div className="space-y-2 2xl:space-y-2 md:max-w-[328px] 2xl:max-w-[350px]">
                  <h3 className={` text-black  tracking-[-0.06em]                  
                    ${t('lang') === 'ru' ? "text-[20px] md:text-[18px] 2xl:text-[26px] 3xl:text-[24px] leading-[1.1]" : 
                      "text-[20px] md:text-[18px] 2xl:text-[26px] 3xl:text-[30px] leading-[1]"}
                  `}>
                    {formatHeader(card.title)}
                  </h3>

                  <p className=" text-[20px] text-black  tracking-[-0.04em]
                   md:leading-[1.2] md:text-[14px] 2xl:text-[18px] 2xl:leading-[1.3]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* MOBILE */}
      <div className="rounded-[35px] sm:bg-white sm:px-[25px] sm:pt-[35px] sm:pb-[5px] md:hidden ">

        {/* Верхний текст */}
        <div className="space-y-2 mb-[20px] xs:mb-[25px] sm:mb-[30px]">
          <h2 className={`text-[25px] text-black leading-[1] tracking-[-0.03em] font-${font}`}>
            {formatHeader(section.top.title)}
          </h2>

          <p className="text-[14px] text-black leading-[1.2] tracking-[-0.04em]">
            {section.top.description}
          </p>
        </div>

        {/* Черный контейнер */}
        <div className="bg-black sm:bg-transparent p-[3px] sm:p-0 rounded-[20px]">

          <div className="flex flex-col gap-[3px] sm:gap-[40px] mb-[3px] sm:mb-[80px]">
            {section.bottom.map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-2 sm:gap-3 bg-white p-5 sm:p-0 rounded-[15px] sm:rounded-[20px]"
              >
                <span className="shrink-0 w-[10px] h-[10px] bg-red-500 rounded-full mt-0.5
                smm:w-[15px] smm:h-[15px]"></span>

                <div className="space-y-2">
                  <h3 className="text-[18px] text-black leading-[1] tracking-[-0.04em]">
                    {card.title}
                  </h3>

                  <p className="text-[14px] text-black leading-[1.2] tracking-[-0.04em]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Диаграмма */}
          <div className="bg-white px-4 pt-7 pb-4 rounded-[15px] flex justify-center
          sm:pt-4 sm:rounded-[20px]">
            <img
              src={diagramMob}
              alt="Diagram"
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>


    </section>
  );
}