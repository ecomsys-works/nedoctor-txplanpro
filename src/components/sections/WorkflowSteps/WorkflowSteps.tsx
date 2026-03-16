import { useTranslation } from "react-i18next"
import WorkflowStepsCard, { type WorkflowStepsCardType } from "./WorkflowStepsCard"

export default function WorkflowSteps() {

  const { t } = useTranslation()

  const cards = t("workflow.steps.cards", {
    returnObjects: true
  }) as WorkflowStepsCardType[]

  return (
    <section id="#how-it-works" className="workflow-steps gsap-up my-container pt-[2.1875rem] sm:pt-[3.125rem] 2xl:pt-[3.125rem] mb-[4.375rem] sm:mb-[6.25rem] mdd:mb-[8.125rem] 2xl:mb-[13.75rem]">

      <div className="3xl:px-[3.75rem]">
        <h2 className="text-[2.1875rem] xxs:text-[3.75rem] 2xl:text-[7.5rem] mb-[1.875rem] xxs:mb-[2.5rem] 2xl:mb-[4.375rem] 3xl:mb-[5.625rem] leading-[1] tracking-[-0.06em] font-semibold text-center uppercase">
          {t("workflow.steps.title")}
        </h2>

        <div className="grid xxs:grid-cols-2 mdd:grid-cols-3 gap-[1.25rem] xxs:gap-[0.625rem] 2xl:gap-[1.625rem]">

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