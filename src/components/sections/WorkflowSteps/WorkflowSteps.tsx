import { useTranslation } from "react-i18next"
import WorkflowStepsCard, { type WorkflowStepsCardType } from "./WorkflowStepsCard"

export default function WorkflowSteps() {

  const { t } = useTranslation()

  const cards = t("workflow.steps.cards", {
    returnObjects: true
  }) as WorkflowStepsCardType[]

  return (
    <section id="#how-it-works" className={`workflow-steps gsap-up my-container 
       ${t('lang') === 'ru' ? 
        `pt-[2.1875rem] mb-[4.375rem]     
        xs:pt-[3.125rem] 
        sm:mb-[6.25rem] sm:mb-[6.25rem] 
        md:pt-[3.125rem] md:mb-[8.75rem] 
        2xl:pt-[2.5rem] 2xl:mb-[15.3125rem] 
        3xl:pt-[3.125rem] 3xl:mb-[14.375rem]`
        :
        ` pt-[2.1875rem] mb-[4.375rem]     
        xs:pt-[3.125rem] 
        sm:mb-[6.25rem] sm:mb-[6.25rem] 
        md:pt-[3.125rem] md:mb-[8.4375rem] 
        2xl:pt-[2.5rem] 2xl:mb-[15rem] 
        3xl:pt-[3.125rem] 3xl:mb-[14.875rem]`}   
    `}>

      <div className="2xl:px-[0rem] 3xl:px-[3.125rem]">
        <h2 className={` leading-[1] tracking-[-0.06em] text-center uppercase        
        ${t('lang') === 'ru' ? 
          `font-semibold mb-[1.5625rem] text-[2.1875rem] 
          xs:text-[3.75rem] xs:mb-[2.5rem] 
          2xl:font-bold 2xl:text-[7.5rem] 2xl:mb-[3.75rem] 
          3xl:mb-[5rem] ` 
          :
          `text-[2.5rem] mb-[0.875rem] font-anek font-semibold 
          xs:text-[4.875rem] xs:mb-[0.75rem]  
          2xl:pt-[1.1875rem] 2xl:text-[10rem] 2xl:mb-[1.25rem] 
          3xl:mb-[1.25rem]`}
        `}>
          {t("workflow.steps.title")}
        </h2>

        <div className={`grid gap-[1.25rem]
        xxs:grid-cols-2 xxs:gap-[0.625rem]
        mdd:grid-cols-3 
        2xl:gap-[1.5625rem] 
        3xl:gap-[1.875rem]
        ${t('lang') === 'ru' ? "" : "2xl:pl-[0.3125rem]"}
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
                className={`${offset} ${marginBottom} 
                aspect-[340/436] 
                xs:aspect-[295/469] 
                md:aspect-[295/420] 
                mdd:aspect-[306/437] 
                2xl:aspect-[416/564] 
                3xl:aspect-[479/605]`}
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