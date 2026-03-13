import { useTranslation } from "react-i18next"
import WorkflowStepsCard, { type WorkflowStepsCardType } from "./WorkflowStepsCard"

export default function WorkflowSteps() {

  const { t } = useTranslation()

  const cards = t("workflow.steps.cards", {
    returnObjects: true
  }) as WorkflowStepsCardType[]

  return (
    <section className="container py-10">


      <h2 className="text-center text-[120px] leading-[1.05] mb-50">
        {t("workflow.steps.title")}
      </h2>

      <div className="grid grid-cols-3 gap-[10px]">

        {cards.map((card, i) => {

          const offset =
            i % 3 === 1
              ? "-translate-y-[25%]"
              : ""

          return (
            <div
              key={i}
              className={`${offset} aspect-[479/605]`}
            >
              <WorkflowStepsCard card={card} />
            </div>
          )
        })}

      </div>

    </section>
  )
}