import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const cards = t("hero.cards", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  const offsets = [
    "translate-y-0",
    "-translate-y-20",
    "-translate-y-12",
    "-translate-y-20",
    "translate-y-0",
  ];

  return (
    <section className="my-container cover-gradient text-white rounded-b-[80px] py-[50px]">


      {/* Cards */}
      <div className="mt-20 flex justify-center gap-6 mb-16">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`w-[220px] glass rounded-[40px] p-5 ${offsets[i]}`}
          >
            <h3 className="text-[24px] mb-2">{card.title}</h3>

            <p className="text-[16px] mb-5 text-neutral-300">
              {card.description}
            </p>

            <div className="h-[120px] bg-neutral-800 rounded-[20px]" />
          </div>
        ))}
      </div>

      {/* Text */}
      <div className="text-center flex flex-col items-center">
        <h1 className="text-[80px] leading-[1.1] max-w-[40%] mb-6">
          {t("hero.title")}
        </h1>

        <p className="text-[18px] max-w-[500px] mb-8 text-neutral-300">
          {t("hero.subtitle")}
        </p>

        <button className="h-[70px] px-10 rounded-[40px] bg-neutral-800 hover:bg-neutral-700 transition text-[18px]">
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}