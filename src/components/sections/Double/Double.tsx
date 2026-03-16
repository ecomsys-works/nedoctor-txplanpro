import { useTranslation } from "react-i18next";
import BlackBtn from "@/ui/BlackBtn";
import { usePopup } from "@/сontext/Popup/usePopup";

export default function DoubleCardSection() {
    const { t } = useTranslation();
    const { setIsOpen: setIsOpenPopup } = usePopup();

    const cards = t("double.cards", { returnObjects: true }) as {
        imageMob?: string;
        imageDesk?: string;
        title?: string;
        button?: string;
    }[];

    const font = t("double.font");

    return (
        <section className="double gsap-up my-container mb-[2.1875rem] sm:mb-[3.125rem] mdd:mb-[2.5rem] 2xl:mb-[9.375rem] ">
            <div className="flex flex-col gap-[3.125rem] 
            sm:p-[0.375rem] sm:rounded-[1.875rem] smm:flex-row smm:gap-[0.375rem] smm:bg-black 
            2xl:gap-[0.625rem] 2xl:rounded-[2.875rem] 2xl:p-[0.625rem]">

                {/* Первая карточка — изображение */}
                <div className="bg-white aspect-[600/806] md:aspect-square rounded-[1.5rem] 2xl:rounded-[2.5rem] flex-[1_1_50%] overflow-hidden relative">
                    {/* Mobile image */}
                    {cards[0].imageMob && (
                        <img
                            src={cards[0].imageMob}
                            alt="Card Image Mobile"
                            className="block w-full h-full object-cover rounded-[2.5rem] md:hidden"
                        />
                    )}

                    {/* Desktop image */}
                    {cards[0].imageDesk && (
                        <img
                            src={cards[0].imageDesk}
                            alt="Card Image Desktop"
                            className="block w-full h-full object-cover rounded-[2.5rem] hidden md:block"
                        />
                    )}
                </div>

                {/* Вторая карточка — текст + кнопка */}
                <div
                    className={`flex-[1_1_50%] flex flex-col justify-center items-center gap-4
                      smm:bg-white md:p-6 rounded-[1.5rem] 2xl:rounded-[2.5rem] w-full`}
                >
                    <h3 className={`text-[1.5625rem] 2xl:text-[2.8125rem] 3xl:text-[3.4375rem] xs:mb-[0.625rem] 3xl:mb-[1.875rem]  max-w-[21.875rem] 2xl:max-w-[31.25rem] leading-[1] tracking-[-0.03em]  3xl:leading-[0.88] tracking-[-0.05em] mx-auto text-center font-${font} text-black`}>
                        {cards[1].title}
                    </h3>


                    <BlackBtn className="w-full xs:w-[initial] text-[1.125rem] 2xl:text-[1.25rem] h-[3.4375rem] 2xl:h-[4.375rem] px-[1.875rem] 2xl:px-[4.375rem] rounded-[2.5rem]"
                        onClick={() => setIsOpenPopup(true)}
                    >
                        {cards[1].button}
                    </BlackBtn>
                </div>
            </div>
        </section>
    );
}