import { useTranslation } from "react-i18next";

type PartnersCard = {
  title: string;
  text: string;
};

type PartnersRow = {
  title: string;
  description: string;
  cards: PartnersCard[];
};

export default function Partners() {
  const { t } = useTranslation();

  const rows = t("partners.rows", { returnObjects: true }) as PartnersRow[];

  return (
    <section className="container py-20">
      <h2 className="text-center text-[120px] leading-[1.05] mb-16">
        {t("partners.title")}
      </h2>
    
      <div className="flex flex-col gap-16">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-12 gap-6">

            <div className="col-span-12 md:col-span-4">
              <h3 className="text-[45px] font-semibold leading-tight mb-4">
                {row.title}
              </h3>

              <p className="text-[18px] text-gray-600">
                {row.description}
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-[10px]">
              {row.cards.map((card, j) => (
                <div
                  key={j}
                  className="bg-white rounded-[20px] px-[20px] py-[30px] shadow-sm"
                >
                  <h4 className="text-[18px] font-semibold mb-2">
                    {card.title}
                  </h4>

                  <p className="text-[18px] text-gray-600">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}