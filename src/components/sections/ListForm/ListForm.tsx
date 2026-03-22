import { useTranslation } from "react-i18next"
import BlackBtn from "@/ui/BlackBtn";
import { useState } from "react";
import { useEmail } from "@/сontext/Email/useEmail";


// Время жизни записи в localStorage (миллисекунды)
const EMAIL_LOCK_DURATION = 3 * 60 * 1000; // 3 минуты
const EMAIL_LOCK_KEY = "PXsentEmails";

// Проверяем, можно ли отправить e-mail
const canSendEmail = (email: string) => {
    const sentData: Record<string, number> = JSON.parse(localStorage.getItem(EMAIL_LOCK_KEY) || "{}");
    const now = Date.now();
    if (sentData[email] && now - sentData[email] < EMAIL_LOCK_DURATION) return false;
    return true;
};

// Помечаем e-mail как отправленный
const markEmailSent = (email: string) => {
    const sentData: Record<string, number> = JSON.parse(localStorage.getItem(EMAIL_LOCK_KEY) || "{}");
    sentData[email] = Date.now();
    localStorage.setItem(EMAIL_LOCK_KEY, JSON.stringify(sentData));
};

// Минимальная валидация e-mail
const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
};


export default function ListForm() {
    const { t } = useTranslation()
    const { email, setEmail } = useEmail();


    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const placeholder = t("listForm.placeholder");
    const buttonText = t("listForm.buttonText");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (plan: string | null = null) => {
        //  Проверка e-mail
        if (!email || !validateEmail(email)) {
            alert(t("popup.emailError") || "Введите корректный e-mail");
            return;
        }

        //  Проверка на повторную отправку
        if (!canSendEmail(email)) {
            alert(t("popup.alreadySent") || "Вы уже отправляли запрос. Попробуйте позже.");
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("_form_id", import.meta.env.VITE_FORM_ID);
            formData.append("email", email);
            if (plan) formData.append("plan", plan);

            await fetch(import.meta.env.VITE_API_URL, {
                method: "POST",
                body: formData
            });

            setSuccess(true);
            markEmailSent(email); // помечаем как отправленное
            setEmail("");
        } catch (err) {
            console.error(err);
            alert(t("popup.sendError") || "Ошибка отправки. Попробуйте позже.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="list-form gsap-up my-container  hidden xl:block w-full         
        lg:mb-[4.625rem] 
        3xl:mb-[2.6875rem]"
        >
            <div className="flex flex-col gap-[0.625rem] bg-black rounded-t-[2.8125rem] rounded-b-[4.0625rem] p-[0.625rem]">

                {/* WHITE PANEL */}
                <div className="bg-white rounded-[2.5rem] flex items-end min-h-[19.0625rem] p-[0.625rem]
                2xl:p-[0.625rem] 
                3xl:py-[1.875rem] 3xl:pl-[1.875rem] 3xl:pr-[1.25rem]">

                    {/* FORM */}
                    <div className="flex w-full gap-[0.3125rem]">

                        {/* INPUT CONTAINER */}
                        <div className="flex items-center gap-[1.25rem] h-[5rem] flex-1 rounded-[2.5rem] px-6 border border-grey">

                            {/* RED DOT */}
                            <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-orange" />

                            <input
                                type="email"
                                value={email}
                                placeholder={placeholder}
                                onChange={handleChange}
                                className="bg-transparent text-[1.125rem] tracking-[-0.04em] focus:outline-blue-300 outline-none w-full text-black placeholder-grey"
                            />
                        </div>

                        {/* BUTTON */}
                        <BlackBtn
                            disabled={loading}
                            onClick={() => handleSubmit('Starter')}
                            className={`text-[1.25rem] rounded-[2.5rem] h-[5rem] tracking-[-0.04em] font-medium px-[1.5625rem] disabled:opacity-90
                        2xl:px-[1.5625rem] 2xl:min-w-[15.9375rem] 
                        3xl:px-[2.375rem] 3xl:min-w-[15.4375rem]
                        ${loading && "hover:!bg-black !text-white"}`
                            }>
                            <span className={`${loading && "animate-pulse "}`}>
                                {loading ? t('form.process') : success ? t('form.ok') : buttonText}</span>
                        </BlackBtn>

                    </div>
                </div>


                {/* SOCIAL ROW */}
                <div className="grid grid-cols-3 gap-[0.3125rem]">

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[7.625rem] flex items-center justify-center text-black hover:text-orange ">
                        <svg className="w-[3rem] h-[3rem]">
                            <use href="/icons/sprite/sprite.svg#youtube" />
                        </svg>
                    </a>

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[7.625rem] flex items-center justify-center text-black hover:text-orange">
                        <svg className="w-[2.75rem] h-[2.75rem]">
                            <use href="/icons/sprite/sprite.svg#in" />
                        </svg>
                    </a>

                    <a href="#" className="bg-white transition duration-300 rounded-full h-[7.625rem] flex items-center justify-center text-black hover:text-orange">
                        <svg className="w-[2.75rem] h-[2.75rem]">
                            <use href="/icons/sprite/sprite.svg#insta" />
                        </svg>
                    </a>

                </div>

            </div>
        </section>
    )
}