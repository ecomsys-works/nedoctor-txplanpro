import { useTranslation } from "react-i18next";
import BlackBtn from "@/ui/BlackBtn";
import { usePopup } from "@/сontext/Popup/usePopup";

export default function SayYes() {
    const { t } = useTranslation();
    const { setIsOpen: setIsOpenPopup } = usePopup();

    const title = t("sayyes.title");
    const buttonText = t("sayyes.buttonText");

    const imageMob = t("sayyes.imageMob");
    const imageDesk = t("sayyes.imageDesk");

    return (
        <div className="sayyes gsap-up my-container mb-[3.125rem] sm:mb-[6.25rem] xl:mb-[0.625rem] 3xl:mb-[5.625rem]">
            <section className="bg-white relative w-full min-h-[27.125rem] sm:min-h-[35.3125rem] md:min-h-[33.75rem] lg:aspect-[94/54] xl:aspect-[1300/743] 3xl:aspect-[1600/973] rounded-[1.25rem] sm:rounded-[1.875rem] md:rounded-[3.125rem] overflow-hidden">

                {/* RESPONSIVE IMAGE */}
                <picture>
                    <source media="(min-width: 25.9375rem)" srcSet={imageDesk} />
                    <img
                        src={imageMob}
                        alt="Banner"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                </picture>

                <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 md:p-7.5 2xl:p-10 gap-[1.875rem]">
                    <h2 className="ml-[-0.3125rem] mr-[-0.3125rem] sm:mx-[initial] text-[1.5625rem] 2xl:text-[2.5rem] 3xl:text-[3.4375rem] max-w-[26.25rem] 2xl:max-w-[40.5rem] tracking-[-0.03em] leading-[1] font-normal font-zt text-black">
                        {title}
                    </h2>

                    <BlackBtn className="w-full sm:w-[initial] text-[1.125rem] 2xl:text-[1.25rem] h-[3.4375rem] 2xl:h-[4.375rem] px-[2.1875rem] rounded-[2.5rem]"
                        onClick={() => setIsOpenPopup(true)}
                    >
                        {buttonText}
                    </BlackBtn>
                </div>
            </section>
        </div>
    );
}