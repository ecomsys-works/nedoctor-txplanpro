import { useTranslation } from "react-i18next"
import WorkflowStepsCard, { type WorkflowStepsCardType } from "./WorkflowStepsCard"

export default function WorkflowSteps() {

  const { t } = useTranslation()

  const cards = t("workflow.steps.cards", {
    returnObjects: true
  }) as WorkflowStepsCardType[]

  return (
    <section className="my-container mb-[70px] sm:mb-[100px] 2xl:mb-[200px]">

      <div className="3xl:px-[60px]">
        <h2 className="text-[35px] xxs:text-[60px] 2xl:text-[120px] mb-[30px] xxs:mb-[45px] 2xl:mb-[70px] 3xl:mb-[90px] leading-[1] tracking-[-0.06em] font-bold text-center uppercase">
          {t("workflow.steps.title")}
        </h2>

        <div className="grid xxs:grid-cols-2 mdd:grid-cols-3 gap-[25px] xxs:gap-[10px] 2xl:gap-[26px]">

          {cards.map((card, i) => {

            const offset =
              i % 3 === 1
                ? ""
                : "mdd:translate-y-[24%]"

            const marginBottom = i === 3 || i === 5 ? "mdd:mb-[24%]" : ""

            return (
              <div
                key={i}
                className={`${offset} ${marginBottom} aspect-[340/437] xxs:aspect-[295/469] md:aspect-[295/420] mdd:aspect-[306/437] 2xl:aspect-[416/564] 3xl:aspect-[479/605]`}
              >
                <WorkflowStepsCard card={card} index={Number(i)} />
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}