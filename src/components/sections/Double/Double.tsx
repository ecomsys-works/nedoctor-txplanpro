import { useTranslation } from "react-i18next";
import BlackBtn from "@/ui/BlackBtn";
import { usePopup } from "@/сontext/Popup/usePopup";
import { formatHeader } from "@/utils/formaters";

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
        <section className={`double gsap-up my-container mb-[35px] sm:mb-[50px] md:mb-[50px] 2xl:mb-[155px]`}>
            <div className="flex flex-col gap-[50px] 
            sm:p-[6px] sm:rounded-[30px] smm:flex-row smm:gap-[6px] smm:bg-black 
            2xl:gap-[10px] 2xl:rounded-[46px] 2xl:p-[11px]">

                {/* Первая карточка — изображение */}
                <div className="bg-white aspect-[600/806] md:aspect-square rounded-[24px] 2xl:rounded-[40px] flex-[1_1_50%] overflow-hidden relative">
                    {/* Mobile image */}
                    {cards[0].imageMob && (
                        <img
                            src={cards[0].imageMob}
                            alt="Card Image Mobile"
                            className="block w-full h-full object-cover rounded-[40px] md:hidden"
                        />
                    )}

                    {/* Desktop image */}
                    {cards[0].imageDesk && (
                        <img
                            src={cards[0].imageDesk}
                            alt="Card Image Desktop"
                            className="block w-full h-full object-cover rounded-[40px] hidden md:block"
                        />
                    )}
                </div>

                {/* Вторая карточка — текст + кнопка */}
                <div
                    className={`flex-[1_1_50%] flex flex-col justify-center items-center md:gap-[18px] 2xl:gap-[16px]
                      smm:bg-white md:p-6 rounded-[24px] 2xl:rounded-[40px] w-full`}
                >
                    <h3 className={`text-[25px] 3xl:text-[55px]  tracking-[-0.03em] tracking-[-0.05em] mx-auto text-center font-${font} text-black
                      ${t('lang') === 'ru' ? "max-w-[350px] md:tracking-[-0.03em] 2xl:max-w-[420px] 3xl:max-w-[560px] leading-[1] 2xl:mb-[12px] 3xl:mb-[10px] 2xl:text-[40px]" :
                        "max-w-[350px] 3xl:max-w-[472px]  leading-[0.88] xs:mb-[12px] 3xl:mb-[20px] 2xl:text-[45px] "}
                    `}>
                        {formatHeader(cards[1].title)}
                    </h3>


                    <BlackBtn className="w-full xs:w-[initial]  text-[18px] h-[55px] px-[30px] rounded-[40px] tracking-[-0.04em] font-medium
                    md:px-[32px] 2xl:text-[20px] 2xl:h-[70px] 2xl:px-[35px] 2xl:min-w-[313px] " 
                        onClick={() => setIsOpenPopup(true)}
                    >
                        {cards[1].button}
                    </BlackBtn>
                </div>
            </div>
        </section>
    );
}