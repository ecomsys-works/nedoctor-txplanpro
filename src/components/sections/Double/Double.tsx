import { useTranslation } from "react-i18next";
import BlackBtn from "@/ui/BlackBtn";

export default function DoubleCardSection() {
    const { t } = useTranslation();

    const cards = t("double.cards", { returnObjects: true }) as {
        imageMob?: string;
        imageDesk?: string;
        title?: string;
        button?: string;
    }[];

    const font = t("double.font");

    return (
        <section className="my-container mb-[35px] sm:mb-[50px] mdd:mb-[40px] 2xl:mb-[150px] ">
            <div className="flex flex-col smm:flex-row gap-[50px] smm:gap-[6px] 2xl:gap-[10px] smm:bg-black sm:rounded-[30px] 2xl:rounded-[40px] sm:p-[6px] 2xl:p-[10px]">

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
                    className={`flex-[1_1_50%] flex flex-col justify-center items-center gap-4
                      smm:bg-white md:p-6 rounded-[24px] 2xl:rounded-[40px] w-full`}
                >
                    <h3 className={`text-[25px] 2xl:text-[45px] 3xl:text-[55px] xs:mb-[10px] 3xl:mb-[30px]  max-w-[350px] 2xl:max-w-[500px] leading-[1] tracking-[-0.03em]  3xl:leading-[0.88] tracking-[-0.05em] mx-auto text-center font-${font} text-black`}>
                        {cards[1].title}
                    </h3>


                    <BlackBtn className="w-full xs:w-[initial] text-[18px] 2xl:text-[20px] h-[55px] 2xl:h-[70px] px-[30px] 2xl:px-[70px] rounded-[40px]">
                        {cards[1].button}
                    </BlackBtn>
                </div>
            </div>
        </section>
    );
}