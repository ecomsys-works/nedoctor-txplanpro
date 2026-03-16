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
        <section className="list-form gsap-up my-container hidden xl:block w-full lg:mb-[4.625rem] 3xl:mb-[2.6875rem]">
            <div className="flex flex-col gap-[0.625rem] bg-black rounded-[3.75rem] p-[0.625rem]">

                {/* WHITE PANEL */}
                <div className="bg-white rounded-[3.125rem] flex items-end p-[0.625rem] min-h-[19.0625rem]">

                    {/* FORM */}
                    <div className="flex w-full gap-[0.3125rem]">

                        {/* INPUT CONTAINER */}
                        <div className="flex items-center gap-[1.25rem] h-[5rem] flex-1 rounded-[2.5rem] px-6 border border-grey">

                            {/* RED DOT */}
                            <div className="w-4 h-4 rounded-full bg-orange" />

                            <input
                                type="email"
                                value={email}
                                placeholder={placeholder}
                                onChange={handleChange}
                                className="bg-transparent text-[1.125rem] tracking-[-0.04em] focus:outline-blue-300 outline-none w-full text-black placeholder-grey"
                            />
                        </div>

                        {/* BUTTON */}
                        <BlackBtn className="text-[1.25rem] rounded-[2.5rem] px-[1.5625rem] h-[5rem]">
                            {buttonText}
                        </BlackBtn>

                    </div>
                </div>


                {/* SOCIAL ROW */}
                <div className="grid grid-cols-3 gap-[0.3125rem]">

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[7.625rem] flex items-center justify-center text-black hover:scale-98 ">
                        <svg className="w-[3rem] h-[3rem]">
                            <use href="/icons/sprite/sprite.svg#youtube" />
                        </svg>
                    </a>

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[7.625rem] flex items-center justify-center text-black hover:scale-98 ">
                        <svg className="w-[2.75rem] h-[2.75rem]">
                            <use href="/icons/sprite/sprite.svg#in" />
                        </svg>
                    </a>

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[7.625rem] flex items-center justify-center text-black hover:scale-98 ">
                        <svg className="w-[2.75rem] h-[2.75rem]">
                            <use href="/icons/sprite/sprite.svg#insta" />
                        </svg>
                    </a>

                </div>

            </div>
        </section>
    )
}