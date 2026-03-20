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
       ${t('lang') === 'ru' ?
        `mb-[4.0625rem] 
        xs:mb-[5.625rem] 
        md:mb-[4.0625rem] 
        2xl:mb-[11.875rem] 
        3xl:mb-[12.1875rem]`
        :
        `mb-[4.375rem] 
        xs:mb-[6.25rem] 
        md:mb-[6.0625rem] 
        2xl:mb-[11.25rem]`}
    `}>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className={`relative bg-white overflow-hidden 
        ${t('lang') === 'ru' ?
            `p-[1.25rem] rounded-[1.25rem] p-6 
          md:pt-[0.9375rem] md:pb-[1.25rem] md:rounded-[2.125rem] 
          2xl:px-[1.875rem] 2xl:py-[1.625rem] 2xl:rounded-[3.125rem] 
          3xl:px-[2.5rem] 3xl:pt-[2rem] 3xl:py-[2.3125rem] `
            :
            `p-[1.25rem] rounded-[1.25rem] p-6 
          md:pt-[0.9375rem] md:pb-[1.25rem] md:rounded-[2.125rem] 
          2xl:px-[1.875rem] 2xl:pt-[1.25rem] 2xl:pb-[1.875rem] 2xl:rounded-[3.125rem] 
          3xl:px-[2.5rem] 3xl:pt-[2rem] 3xl:py-[2.3125rem] `}
         `}>

          {/* Верхний ряд */}
          <div className={`
          ${t('lang') === 'ru' ?
              `relative 2xl:mb-[3.75rem] 3xl:mb-[4.375rem]`
              :
              `relative md:mb-[0.3125rem] 2xl:mb-[0.75rem] 3xl:mb-[1.4375rem]`}
            `}>
            <div className="flex flex-col absolute top-0 left-0 ">
              <h2 className={` text-black font-${font}       
               ${t('lang') === 'ru' ?
                  `pt-[0.3125rem] mb-[0.9375remp] max-w-[15.625rem] text-[2.25rem] leading-[1]
                md:mb-[0.625rem] md:text-[1.5625rem] 
                2xl:tracking-[-0.05em] 2xl:mb-[1.25rem] 2xl:text-[2.5rem]
                3xl:mb-[1.25rem] 3xl:text-[3.4375rem] 
                `
                  :
                  `leading-[0.88] pt-[0.3125rem] text-[2.25rem] mb-[0.9375remp] max-w-[15.625rem] 
                md:mb-[0.625rem] md:text-[1.875rem] md:tracking-[-0.03em] md:leading-[1] 
                2xl:tracking-[-0.05em] 2xl:mb-[0.9375rem] 2xl:text-[2.8125rem] 2xl:leading-[1] 
                3xl:text-[3.4375rem] 3xl:mb-[1.875rem]  3xl:leading-[0.88] 3xl:max-w-[23.875rem]`}
              `}>
                {formatHeader(section.top.title)}
              </h2>

              <p className={`${t('lang') === 'ru' ?
                `max-w-[23.875rem] text-[1.5625rem] text-black leading-[1.3] tracking-[-0.04em]
                sm:text-[2.25rem] 
                md:text-[0.875rem] 
                2xl:text-[1.125rem]`
                :
                `max-w-[23.875rem] text-[1.5625rem] text-black leading-[1.3] tracking-[-0.04em]
                sm:text-[2.25rem] 
                md:text-[0.875rem] md:max-w-[15.0625rem] md:leading-[1.2]
                2xl:text-[1.125rem] 2xl:max-w-[19rem] md:leading-[1.3]`
                }
              `}>
                {formatHeader(section.top.description)}
              </p>
            </div>


            <div className="
          md:pt-[2.5rem] md:pl-[15%]
          2xl:pt-0 2xl:pl-[0] 
          3xl:pt-[0.9375rem] 3xl:pl-[15%] ">

              <img
                src={diagramDesk}
                alt="Diagram"
                className="h-full w-auto aspect-[1294/676] "
              />
            </div>
          </div>

          {/* Нижний ряд */}
          <div className={`grid justify-between 
           ${t('lang') === 'ru' ?
              `md:grid-cols-[36%_38%_26%] md:pt-[4.0625rem] 
            2xl:grid-cols-[36%_39%_25%] 2xl:pt-[0] 
            3xl:grid-cols-[37%_43%_20%] 3xl:pt-[3.125rem]`
              :
              `md:grid-cols-[37%_38%_25%] md:pt-[3.125rem]
              2xl:grid-cols-[38%_38%_24%] 
            3xl:grid-cols-[24%_26%_25%_25%]`}
            `}>
            {section.bottom.map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-[0.625rem] rounded-[1.25rem] bg-white"
              >
                <span className="shrink-0 bg-red-500 rounded-full 
                md:w-[0.625rem] md:h-[0.625rem] md:mt-1
                2xl:w-[1rem] 2xl:h-[1rem] 2xl:mt-1"></span>

                <div className="space-y-2 
                md:max-w-[20.5rem]
                2xl:space-y-2 2xl:max-w-[21.875rem]">

                  <h3 className={` text-black  tracking-[-0.06em]                  
                    ${t('lang') === 'ru' ?
                      `text-[1.25rem] leading-[1] 
                      md:text-[1.125rem] 
                      2xl:text-[1.625rem] 2xl:leading-[1.1]
                      3xl:text-[1.5rem]`
                      :
                      `text-[1.25rem] leading-[1]
                      md:text-[1.125rem] 
                      2xl:text-[1.625rem] 2xl:mb-[0.9375rem]
                      3xl:text-[1.875rem]`}
                  `}>
                    {formatHeader(card.title)}
                  </h3>

                  <p className=" text-[1.25rem] text-black  tracking-[-0.04em]
                   md:leading-[1.2] md:text-[0.875rem] md:tracking-[-0.05em]
                   2xl:text-[1.125rem] 2xl:leading-[1.3]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* MOBILE */}
      <div className={`md:hidden 
      ${t('lang') === 'ru' ?
          `rounded-[2.1875rem] 
       xs:bg-white xs:px-[1.5625rem] xs:pt-[2rem] xs:pb-[0.3125rem] `
          :
          `rounded-[2.1875rem] 
       xs:bg-white xs:px-[1.5625rem] xs:pt-[1.875rem] xs:pb-[0.3125rem] `}
      
      `}>

        {/* Верхний текст */}
        <div className={`
         ${t('lang') === 'ru' ?
            `space-y-2 mb-[1.25rem] 
        xs:mb-[1.9375rem]`
            :
            `space-y-2 mb-[1.25rem] 
        xs:mb-[3.25rem]`
          }
        `}>

          <h2 className={` font-${font} 
          ${t('lang') === 'ru' ?
              `text-[1.5625rem] text-black leading-[1] tracking-[-0.03em]`
              :
              `text-[1.875rem] text-black leading-[1] tracking-[-0.03em]`
            }
          `}>
            {formatHeader(section.top.title)}
          </h2>

          <p className="text-[0.875rem] text-black leading-[1.2] tracking-[-0.04em]">
            {formatHeader(section.top.description)}
          </p>
        </div>

        {/* Черный контейнер */}
        <div className="bg-black p-[0.1875rem] 
        xs:p-0 rounded-[1.25rem] xs:bg-transparent">

          <div className={`flex flex-col 
           ${t('lang') === 'ru' ?
              ` gap-[0.1875rem] mb-[0.1875rem] 
                xs:gap-[2.0625rem] xs:mb-[5rem]`
              :
              ` gap-[0.1875rem] mb-[0.1875rem] 
                xs:gap-[2.5rem] xs:mb-[5.625rem]`
            }
         `}>

            {section.bottom.map((card, i) => (
              <div
                key={i}
                className={`flex items-start  bg-white 
                   ${t('lang') === 'ru' ?
                    `gap-[0.5rem] p-5 rounded-[0.9375rem] 
                     xs:rounded-[1.25rem] xs:gap-[0.625rem] xs:p-0`
                    :
                    `gap-[0.5rem] px-[1.25rem] pt-[1.25rem] pb-[1.125rem] rounded-[0.9375rem] 
                     xs:rounded-[1.25rem] xs:gap-[0.75rem] xs:p-0`}
                  `}
              >
                <span className={`shrink-0 bg-red-500 rounded-full 
                   ${t('lang') === 'ru' ?
                    `w-[0.6875rem] h-[0.6875rem] mt-1`
                    :
                    `w-[0.6875rem] h-[0.6875rem] xs:w-[0.9375rem] xs:h-[0.9375rem] mt-1`}
                  `}></span>

                <div className={`space-y-[0.625rem] ${(i === 2 && t('lang') === 'ru') ? "mb-[0.9375rem] xs:mb-0" : ""}
                ${t('lang') === 'ru' ? `` : `xs:space-y-[0.375rem]`}
                `}>
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
          <div className="bg-white rounded-[0.9375rem] flex justify-center aspect-[334/336] 
          px-[0.625rem] pt-[1.25rem] pb-[1.25rem] rounded-[1.25rem]
          xs:px-[0rem] xs:pt-[1.25rem] xs:pb-[1.25rem] xs:rounded-[1.25rem] xs:aspect-[initial]">
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