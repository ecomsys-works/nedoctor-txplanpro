import { useTranslation } from "react-i18next"
import BlackBtn from "@/ui/BlackBtn";

export default function ListForm() {
    const { t } = useTranslation()

    const placeholder = t("listForm.placeholder");
    const buttonText = t("listForm.buttonText");

    return (
        <section className="my-container hidden xl:block w-full lg:mb-[74px] 3xl:mb-[43px]">
            <div className="flex flex-col gap-[10px] bg-black rounded-[60px] p-[10px]">

                {/* WHITE PANEL */}
                <div className="bg-white rounded-[50px] flex items-end p-[10px] min-h-[305px]">

                    {/* FORM */}
                    <div className="flex w-full gap-[5px]">

                        {/* INPUT CONTAINER */}
                        <div className="flex items-center gap-[20px] h-[80px] flex-1 rounded-[40px] px-6 border border-grey">

                            {/* RED DOT */}
                            <div className="w-4 h-4 rounded-full bg-orange" />

                            <input
                                type="email"
                                placeholder={placeholder}
                                className="bg-transparent text-[18px] tracking-[-0.04em] focus:outline-blue-300 outline-none w-full text-black placeholder-grey"
                            />
                        </div>

                        {/* BUTTON */}
                        <BlackBtn className="text-[20px] rounded-[40px] px-[25px] h-[80px]">
                            {buttonText}
                        </BlackBtn>

                    </div>
                </div>


                {/* SOCIAL ROW */}
                <div className="grid grid-cols-3 gap-[5px]">

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[122px] flex items-center justify-center text-black hover:scale-98 ">
                        <svg className="w-[48px] h-[48px]">
                            <use href="/icons/sprite/sprite.svg#youtube" />
                        </svg>
                    </a>

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[122px] flex items-center justify-center text-black hover:scale-98 ">
                        <svg className="w-[44px] h-[44px]">
                            <use href="/icons/sprite/sprite.svg#in" />
                        </svg>
                    </a>

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[122px] flex items-center justify-center text-black hover:scale-98 ">
                        <svg className="w-[44px] h-[44px]">
                            <use href="/icons/sprite/sprite.svg#insta" />
                        </svg>
                    </a>

                </div>

            </div>
        </section>
    )
}