import { useTranslation } from "react-i18next";

import TextCard, {type TextCard as TextCardType } from "./cards/TextCard";
import ImageCard, {type ImageCard as ImageCardType } from "./cards/ImageCard";
import LabelCard, {type LabelCard as LabelCardType } from "./cards/LabelCard";
import DiagramCardComponent, {type DiagramCard as DiagramCardType } from "./cards/DiagramCard";

type FeatureCard =
  | TextCardType
  | ImageCardType
  | LabelCardType
  | DiagramCardType;

export default function FeatureGrid() {
  const { t } = useTranslation();

  const cards = t("featureGrid.cards", {
    returnObjects: true,
  }) as FeatureCard[];

  return (
    <section className="container py-10">      
        <div className="bg-black p-[10px] rounded-[60px] grid grid-cols-2 gap-[10px]">
          {cards.map((card, index) => {
            switch (card.type) {
              case "text":
                return <TextCard key={index} card={card} />;

              case "image":
                return <ImageCard key={index} card={card} />;

              case "label":
                return <LabelCard key={index} card={card} />;

              case "diagram":
                return <DiagramCardComponent key={index} card={card} />;
            }
          })}
        </div>     
    </section>
  );
}