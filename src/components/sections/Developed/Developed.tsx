import { useTranslation } from "react-i18next";

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
    <section className="my-container mb-[65px] sm:mb-[100px] 2xl:mb-[200px]">

      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="relative bg-white p-[20px] md:p-[20px] 2xl:p-[30px] 3xl:p-[40px] rounded-[20px] 2xl:rounded-[60px] overflow-hidden p-6">

          {/* Верхний ряд */}
          <div className="relative md:mb-[50px] 2xl:mb-[70px]">
            <div className="flex flex-col absolute top-0 left-0 max-w-[28%]">
              <h2 className={`mb-[15pxp] md:mb-[10px] 2xl:mb-[20px] 3xl:mb-[30px] pt-[5px] text-[36px] md:text-[30px] 2xl:text-[45px] 3xl:text-[55px] text-black leading-[1]  2xl:leading-[0.88] 2xl:tracking-[-0.05em] 3xl:tracking-[-0.08em] font-${font}`}>
                {section.top.title}
              </h2>

              <p className="text-[36px] md:text-[14px] 2xl:text-[18px] text-black leading-[1.3] tracking-[-0.04em]">
                {section.top.description}
              </p>
            </div>

            <img
              src={diagramDesk}
              alt="Diagram"
              className="md:pt-[40px] 2xl:pt-0 3xl:pt-[10px] 2xl:pl-[0] 3xl:pl-[16.66%] aspect-[1294/676] h-full w-auto"
            />
          </div>

          {/* Нижний ряд */}
          <div className="grid md:grid-cols-3 3xl:grid-cols-4 gap-10">
            {section.bottom.map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-[20px] bg-white"
              >
                <span className="shrink-0 md:w-[12px] md:h-[12px] 2xl:w-[15px] 2xl:h-[15px] bg-red-500 rounded-full md:mt-1 2xl:mt-1.5"></span>

                <div className="space-y-2 2xl:space-y-3">
                  <h3 className=" text-[20px] md:text-[18px] 2xl:text-[26px] 3xl:text-[30px] text-black leading-[1] tracking-[-0.06em]">
                    {card.title}
                  </h3>

                  <p className=" text-[20px] md:text-[14px] 2xl:text-[18px] text-black md:leading-[1.2] 2xl:leading-[1.3] tracking-[-0.04em]">
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
        <div className="space-y-2 mb-[20px] xs:mb-[25px] sm:mb-[50px]">
          <h2 className={`text-[30px] text-black leading-[1] tracking-[-0.03em] font-${font}`}>
            {section.top.title}
          </h2>

          <p className="text-[14px] text-black leading-[1.2] tracking-[-0.04em]">
            {section.top.description}
          </p>
        </div>

        {/* Черный контейнер */}
        <div className="bg-black sm:bg-transparent p-[5px] sm:p-0 rounded-[20px]">

          <div className="flex flex-col gap-[5px] sm:gap-[40px] mb-[5px] sm:mb-[100px]">
            {section.bottom.map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-2 sm:gap-3 bg-white px-4 py-5 sm:p-0 rounded-[15px] sm:rounded-[20px]"
              >
                <span className="shrink-0 w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] bg-red-500 rounded-full mt-0.5"></span>

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
          <div className="bg-white px-4 pt-7 pb-4 sm:pt-4 rounded-[15px] sm:rounded-[20px] flex justify-center">
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