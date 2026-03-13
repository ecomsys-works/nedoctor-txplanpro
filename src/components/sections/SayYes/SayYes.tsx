import { useTranslation } from "react-i18next";
import BlackBtn from "@/ui/BlackBtn";

export default function SayYes() {
    const { t } = useTranslation();

    const title = t("sayyes.title");
    const buttonText = t("sayyes.buttonText");

    const imageMob = t("sayyes.imageMob");
    const imageDesk = t("sayyes.imageDesk");

    return (
        <div className="my-container mb-[100px] xl:mb-[10px] 3xl:mb-[90px]">
            <section className="bg-white relative w-full min-h-[434px] sm:min-h-[565px] md:min-h-[540px] lg:aspect-[94/54] xl:aspect-[1300/743] 3xl:aspect-[1600/973] rounded-[20px] sm:rounded-[30px] md:rounded-[50px] overflow-hidden">

                {/* RESPONSIVE IMAGE */}
                <picture>
                    <source media="(min-width: 415px)" srcSet={imageDesk} />
                    <img
                        src={imageMob}
                        alt="Banner"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                </picture>

                <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 md:p-7.5 2xl:p-10 gap-[30px]">
                    <h2 className="ml-[-5px] mr-[-5px] sm:mx-[initial] text-[25px] 2xl:text-[40px] 3xl:text-[55px] max-w-[420px] 2xl:max-w-[648px] tracking-[-0.03em] leading-[1] font-normal font-zt text-black">
                        {title}
                    </h2>

                    <BlackBtn className="w-full sm:w-[initial] text-[18px] 2xl:text-[20px] h-[55px] 2xl:h-[70px] px-[35px] rounded-[40px]">
                        {buttonText}
                    </BlackBtn>
                </div>
            </section>
        </div>
    );
}