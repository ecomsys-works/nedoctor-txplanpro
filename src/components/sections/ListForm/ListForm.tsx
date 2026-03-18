import { useTranslation } from "react-i18next"
import BlackBtn from "@/ui/BlackBtn";
import { useEmail } from "@/сontext/Email/useEmail";

export default function ListForm() {
    const { t } = useTranslation()
    const { email, setEmail } = useEmail();


    const placeholder = t("listForm.placeholder");
    const buttonText = t("listForm.buttonText");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <section className="list-form gsap-up my-container hidden xl:block w-full lg:mb-[74px] 3xl:mb-[43px]">
            <div className="flex flex-col gap-[10px] bg-black rounded-t-[45px] rounded-b-[65px] p-[10px]">

                {/* WHITE PANEL */}
                <div className="bg-white rounded-[40px] flex items-end 2xl:p-[10px] 3xl:p-[30px] min-h-[305px]">

                    {/* FORM */}
                    <div className="flex w-full gap-[5px]">

                        {/* INPUT CONTAINER */}
                        <div className="flex items-center gap-[20px] h-[80px] flex-1 rounded-[40px] px-6 border border-grey">

                            {/* RED DOT */}
                            <div className="w-[15px] h-[15px] rounded-full bg-orange" />

                            <input
                                type="email"
                                value={email}
                                placeholder={placeholder}
                                onChange={handleChange}
                                className="bg-transparent text-[18px] tracking-[-0.04em] focus:outline-blue-300 outline-none w-full text-black placeholder-grey"
                            />
                        </div>

                        {/* BUTTON */}
                        <BlackBtn className="text-[20px] rounded-[40px] px-[38px] h-[80px] tracking-[-0.04em] font-medium 2xl:min-w-[255px] 3xl:min-w-[247px]">
                            {buttonText}
                        </BlackBtn>

                    </div>
                </div>


                {/* SOCIAL ROW */}
                <div className="grid grid-cols-3 gap-[5px]">

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[122px] flex items-center justify-center text-black hover:text-orange ">
                        <svg className="w-[48px] h-[48px]">
                            <use href="/icons/sprite/sprite.svg#youtube" />
                        </svg>
                    </a>

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[122px] flex items-center justify-center text-black hover:text-orange">
                        <svg className="w-[44px] h-[44px]">
                            <use href="/icons/sprite/sprite.svg#in" />
                        </svg>
                    </a>

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[122px] flex items-center justify-center text-black hover:text-orange">
                        <svg className="w-[44px] h-[44px]">
                            <use href="/icons/sprite/sprite.svg#insta" />
                        </svg>
                    </a>

                </div>

            </div>
        </section>
    )
}