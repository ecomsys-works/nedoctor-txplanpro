import { useTranslation } from "react-i18next";

type CardType = {
  title: string;
  description: string;
};

type SectionType = {
  top: CardType;
  bottom: CardType[];
  imageUrl: string;
};

export default function Developed() {
  const { t } = useTranslation();

  // Верхний текст
  const top: CardType = t("developed.top", { returnObjects: true }) as CardType;
  // Нижние карточки
  const bottom: CardType[] = t("developed.bottom", { returnObjects: true }) as CardType[];

  const section: SectionType = { top, bottom, imageUrl: "/images/diagram.svg" };

  return (
    <section className="container mx-auto py-16">
      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="relative bg-white rounded-[20px] overflow-hidden p-6">
          {/* Верхний ряд */}
          <div className="mb-8">
            <h2 className="text-[40px] font-bold mb-4">{section.top.title}</h2>
            <p className="text-[18px] text-gray-600">{section.top.description}</p>
            <img
              src={section.imageUrl}
              alt="Diagram"
              className="absolute top-0 right-0 h-full w-auto opacity-50"
            />
          </div>

          {/* Нижний ряд внутри той же карточки */}
          <div className="grid grid-cols-3 gap-6">
            {section.bottom.map((card, i) => (
              <div key={i} className="flex items-start gap-3 p-6 rounded-[20px] bg-white">
                <span className="w-4 h-4 bg-red-500 rounded-full mt-1"></span>
                <div>
                  <h3 className="font-semibold text-[20px] mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        {/* Верхний ряд просто текст сверху */}
        <div className="mb-4 text-center">
          <h2 className="text-[28px] font-bold mb-2">{section.top.title}</h2>
          <p className="text-[16px] text-gray-200">{section.top.description}</p>
        </div>

        {/* Черная плашка, которая оборачивает карточки */}
        <div className="bg-black p-2 gap-2 flex flex-col rounded-[20px]">
          {section.bottom.map((card, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-[20px]">
              <span className="w-4 h-4 bg-red-500 rounded-full mt-1"></span>
              <div>
                <h3 className="font-semibold text-[18px] mb-1">{card.title}</h3>
                <p className="text-gray-600 text-[14px]">{card.description}</p>
              </div>
            </div>
          ))}

          {/* Диаграмма как отдельная карточка */}
          <div className="bg-white p-4 rounded-[20px] flex justify-center">
            <img src={section.imageUrl} alt="Diagram" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}