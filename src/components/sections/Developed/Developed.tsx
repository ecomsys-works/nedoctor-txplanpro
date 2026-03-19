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
    <section className={`developed gsap-up my-container 
       ${t('lang') === 'ru' ? "mb-[4.0625rem] xs:mb-[5.625rem] md:mb-[4.0625rem] 2xl:mb-[11.875rem] 3xl:mb-[12.1875rem]" : 
        "mb-[4.0625rem] sm:mb-[5.625rem] mdd:mb-[3.75rem] 2xl:mb-[11.875rem]"}
    `}>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className={`relative bg-white overflow-hidden 
        ${t('lang') === 'ru' ? "p-[1.25rem] rounded-[1.25rem] p-6 md:pt-[0.9375rem] md:pb-[1.25rem] md:rounded-[2.125rem] 2xl:px-[1.875rem] 2xl:py-[1.625rem] 2xl:rounded-[3.125rem] 3xl:px-[2.5rem] 3xl:pt-[2rem] 3xl:py-[2.3125rem] " : 
          "p-[1.25rem] rounded-[1.25rem] p-6 md:pt-[0.9375rem] md:pb-[1.25rem] md:rounded-[2.125rem] 2xl:px-[1.875rem] 2xl:py-[1.75rem] 2xl:rounded-[3.125rem] 3xl:px-[2.5rem] 3xl:pt-[2rem] 3xl:py-[2.3125rem] "}
         `}>

          {/* Верхний ряд */}
          <div className="relative 2xl:mb-[3.75rem] 3xl:mb-[4.375rem]">
            <div className="flex flex-col absolute top-0 left-0 ">
              <h2 className={` text-black font-${font}       
               ${t('lang') === 'ru' ? "leading-[1] pt-[0.3125rem] max-w-[15.625rem] text-[2.25rem] md:text-[1.5625rem] 2xl:tracking-[-0.05em] 3xl:text-[3.4375rem] mb-[0.9375remp] md:mb-[0.625rem] 2xl:mb-[1.25rem] 3xl:mb-[1.25rem] 2xl:text-[2.5rem]" :
                "leading-[0.88] pt-[0.3125rem] max-w-[15.625rem] text-[2.25rem] md:text-[1.5625rem] 2xl:tracking-[-0.05em] 3xl:text-[3.4375rem] mb-[0.9375remp] md:mb-[0.625rem] 2xl:mb-[1.25rem] 3xl:mb-[1.5625rem] 2xl:text-[2.8125rem]"}
              `}>
                {formatHeader(section.top.title)}
              </h2>

              <p className="max-w-[23.875rem] text-[1.5625rem] text-black leading-[1.3] tracking-[-0.04em]
              sm:text-[2.25rem] md:text-[0.875rem] 2xl:text-[1.125rem]">
                {section.top.description}
              </p>
            </div>


          <div className="md:pt-[2.5rem] 2xl:pt-0 3xl:pt-[0.9375rem] md:pl-[15%] 2xl:pl-[0] 3xl:pl-[15%] ">
            <img
              src={diagramDesk}
              alt="Diagram"
              className="h-full w-auto aspect-[1294/676] "
            />
            </div>
          </div>

          {/* Нижний ряд */}
          <div className={`grid justify-between 
           ${t('lang') === 'ru' ? "md:grid-cols-[36%_38%_26%] md:pt-[4.0625rem] 2xl:grid-cols-[36%_39%_25%] 3xl:grid-cols-[37%_43%_20%] 2xl:pt-[0] 3xl:pt-[3.125rem]" : 
            "2xl:grid-cols-[38%_38%_24%] 3xl:grid-cols-[24%_26%_25%_25%]"}

            `}>
            {section.bottom.map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-[0.625rem] rounded-[1.25rem] bg-white"
              >
                <span className="shrink-0 bg-red-500 rounded-full 
                md:w-[0.625rem] md:h-[0.625rem] md:mt-1
                2xl:w-[1rem] 2xl:h-[1rem] 2xl:mt-1"></span>

                <div className="space-y-2 2xl:space-y-2 md:max-w-[20.5rem] 2xl:max-w-[21.875rem]">
                  <h3 className={` text-black  tracking-[-0.06em]                  
                    ${t('lang') === 'ru' ? "text-[1.25rem] md:text-[1.125rem] 2xl:text-[1.625rem] 3xl:text-[1.5rem] leading-[1] 2xl:leading-[1.1]" : 
                      "text-[1.25rem] md:text-[1.125rem] 2xl:text-[1.625rem] 3xl:text-[1.875rem] leading-[1]"}
                  `}>
                    {formatHeader(card.title)}
                  </h3>

                  <p className=" text-[1.25rem] text-black  tracking-[-0.04em]
                   md:leading-[1.2] md:text-[0.875rem] 2xl:text-[1.125rem] 2xl:leading-[1.3]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* MOBILE */}
      <div className="rounded-[2.1875rem] xs:bg-white xs:px-[1.5625rem] xs:pt-[2rem] xs:pb-[0.3125rem] md:hidden ">

        {/* Верхний текст */}
        <div className="space-y-2 mb-[1.25rem] xs:mb-[1.9375rem]">
          <h2 className={`text-[1.5625rem] text-black leading-[1] tracking-[-0.03em] font-${font}`}>
            {formatHeader(section.top.title)}
          </h2>

          <p className="text-[0.875rem] text-black leading-[1.2] tracking-[-0.04em]">
            {section.top.description}
          </p>
        </div>

        {/* Черный контейнер */}
        <div className="bg-black xs:bg-transparent p-[0.1875rem] xs:p-0 rounded-[1.25rem]">

          <div className="flex flex-col gap-[0.1875rem] xs:gap-[2.0625rem] mb-[0.1875rem] xs:mb-[5rem]">
            {section.bottom.map((card, i) => (
              <div
                key={i}
                className={`flex items-start gap-[0.5rem] xs:gap-[0.625rem] bg-white p-5 xs:p-0 rounded-[0.9375rem] xs:rounded-[1.25rem]`}
              >
                <span className="shrink-0 w-[0.6875rem] h-[0.6875rem] bg-red-500 rounded-full mt-1"></span>

                <div className={`space-y-2 ${i === 2 ? "mb-[1.25rem] xs:mb-0" : ""}`}>
                  <h3 className="text-[1.125rem] text-black leading-[1] tracking-[-0.04em]">
                    {formatHeader(card.title)}
                  </h3>

                  <p className="text-[0.875rem] text-black leading-[1.2] tracking-[-0.04em]">
                    {formatHeader(card.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Диаграмма */}
          <div className="bg-white rounded-[0.9375rem] flex justify-center aspect-[334/336] xs:aspect-[initial]
          px-[0.625rem] pt-[1.25rem] pb-[1.25rem] rounded-[1.25rem]
          xs:px-[0rem] xs:pt-[1.25rem] xs:pb-[1.25rem] xs:rounded-[1.25rem]">
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