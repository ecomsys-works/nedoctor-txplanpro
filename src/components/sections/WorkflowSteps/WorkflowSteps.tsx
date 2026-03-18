import { useTranslation } from "react-i18next"
import WorkflowStepsCard, { type WorkflowStepsCardType } from "./WorkflowStepsCard"

export default function WorkflowSteps() {

  const { t } = useTranslation()

  const cards = t("workflow.steps.cards", {
    returnObjects: true
  }) as WorkflowStepsCardType[]

  return (
    <section id="#how-it-works" className="workflow-steps gsap-up my-container pt-[35px] sm:pt-[50px] md:pt-[50px] 2xl:pt-[40px] 3xl:pt-[50px] mb-[70px] sm:mb-[100px] md:mb-[140px]  2xl:mb-[245px] 3xl:mb-[230px]">

      <div className="2xl:px-[0px] 3xl:px-[50px]">
        <h2 className={` leading-[1] tracking-[-0.06em] text-center uppercase        
        ${t('lang') === 'ru' ? "text-[35px] mb-[30px] font-semibold 2xl:font-bold xxs:text-[60px] xxs:mb-[40px] 2xl:text-[120px] 2xl:mb-[60px] 3xl:mb-[80px] " :
          "text-[35px] mb-[30px] font-anek font-semibold xxs:text-[45px] xxs:mb-[40px] 2xl:pt-[19px] 2xl:text-[160px] 2xl:mb-[20px] 3xl:mb-[20px]"}
        `}>
          {t("workflow.steps.title")}
        </h2>

        <div className={`grid xxs:grid-cols-2 mdd:grid-cols-3 gap-[20px] xxs:gap-[10px] 2xl:gap-[25px] 3xl:gap-[30px]
        ${t('lang') === 'ru' ? "" :"pl-[5px]"}
          `}>

          {cards.map((card, i) => {

            const offset =
              i % 3 === 1
                ? ""
                : "mdd:translate-y-[24.5%] 3xl:translate-y-[26.5%]"

            const marginBottom = i === 3 || i === 5 ? "mdd:mb-[24.5%] 3xl:mb-[26.5%]" : ""

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