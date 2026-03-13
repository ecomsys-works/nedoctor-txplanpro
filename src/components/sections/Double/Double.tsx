import { useTranslation } from "react-i18next";

export default function DoubleCardSection() {
    const { t } = useTranslation();

    const cards = t("double.cards", { returnObjects: true }) as {
        image?: string;
        title?: string;
        button?: string;
    }[];

    return (
        <section className="py-16 container ">
            <div
                className={`
          flex flex-col md:flex-row gap-[10px] 
          md:bg-black md:rounded-[40px] md:p-[10px]
        `}
            >
                {/* Первая карточка — изображение */}
                <div className="bg-white flex-[1_1_50%] rounded-[40px] overflow-hidden">
                    <img
                        src={cards[0].image}
                        alt="Card Image"
                        className="w-full h-full object-cover rounded-[40px]"
                    />
                </div>

                {/* Вторая карточка — текст + кнопка, стили меняются на мобилке */}
                <div
                    className={`flex-[1_1_50%] flex flex-col justify-center items-center gap-4
            md:bg-white md:p-6 md:rounded-[40px] w-full`}>
                    <h3 className="text-[24px] md:text-[28px] font-semibold text-black md:text-black">
                        {cards[1].title}
                    </h3>
                    <button className="bg-black px-7 cursor-pointer text-white h-[70px] w-full md:w-auto rounded-[40px] text-[20px]">
                        {cards[1].button}
                    </button>
                </div>
            </div>
        </section>
    );
}