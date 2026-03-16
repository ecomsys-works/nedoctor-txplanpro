import { useTranslation } from "react-i18next"

export default function Footer() {
    const { t } = useTranslation()

    const menu = t("footer.menu", { returnObjects: true }) as string[]

    return (
        <footer>
            {/* ================= DESKTOP ================= */}
            <div className="my-container lg:py-[1rem] 3xl:py-[2.6875rem]">
                <div className="hidden lg:block relative">

                    {/* LEFT */}
                    <div className="absolute left-0 bottom-0">
                        <a href="#" className="text-black transition hover:opacity-75 text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal ">
                            {t("footer.privacy")}
                        </a>
                    </div>

                    {/* CENTER LOGO */}
                    <div className="flex justify-center">
                        <span className="font-bold text-xl font-micro">{t("footer.logo")}</span>
                    </div>

                    {/* RIGHT */}
                    <div className="absolute right-0 bottom-0 text-right">
                        <a href="#" className="inline-block foo-underline text-black transition hover:opacity-75 text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal ">
                            {t("footer.dev")}
                        </a>

                        <p className="mt-[0.625rem] text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal text-black/50">
                            {t("footer.copyright")}. {t("footer.rights")}
                        </p>
                    </div>
                </div>
            </div>



            {/* ================= MOBILE ================= */}
            <div className="nop-container lg:hidden cover-gradient text-white rounded-t-[1.875rem] sm:rounded-t-[2.5rem] pb-[0.625rem]">

                {/* LOGO */}
                <div className="text-center font-bold text-[1rem] font-micro px-[0.625rem] pt-[1.25rem] md:pt-[3.125rem] pb-[0.625rem] md:pb-[0.9375rem]">
                    <span>{t("footer.logo")}</span>
                </div>

                {/* devider */}
                <div className="hidden sm:block sm:px-[1.25rem] md:px-[1.875rem] sm:mb-[0.125rem]">
                    <div className="block sm:border-t border-white/10"></div>
                </div>

                <div className="grid grid-cols-2 pt-[0.4375rem] md:pt-[1.25rem] px-[0.625rem] sm:px-[1.25rem] md:px-[1.875rem] sm:border-none border-t border-white/10">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-[2.25rem] md:gap-[3rem] justify-between">

                        {/* MENU */}
                        <ul className="flex flex-col gap-0">
                            {menu.map((item, i) => (
                                <li key={i} className=" leading-[1.3]">
                                    <a href="#" className="text-[0.875rem] leading-[1] tracking-[-0.04em] font-normal text-white/50 hover:underline hover:text-white transition">{item}</a>
                                </li>
                            ))}
                        </ul>

                        {/* PRIVACY */}
                        <div className="flex flex-col gap-[0.9375rem]">
                            <a href="#" className="max-w-[11.25rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal text-white/50 hover:underline hover:text-white transition">
                                {t("footer.privacy")}
                            </a>

                            <div className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal text-white/50">
                                {t("footer.copyright")}
                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col items-end justify-between">

                        {/* DEV */}
                        <a href="#" className="sm:pt-[0.125rem] md:pt-0 inline-block fow-underline text-white transition hover:opacity-75 text-[0.875rem] leading-[1.1] tracking-[-0.08em] font-normal ">
                            {t("footer.dev")}
                        </a>

                        {/* SOCIAL */}
                        <div className="flex flex-col gap-[0.8125rem]">
                            <div className="flex justify-end gap-[0.25rem]">

                                <a href="#" className="w-10 h-10 bg-white hover:bg-white/75 transition text-black rounded-full flex items-center justify-center text-xs">
                                    <svg className="w-[1.5rem] h-[1.5rem]">
                                        <use href="/icons/sprite/sprite.svg#in" />
                                    </svg>
                                </a>

                                <a href="#" className="w-10 h-10 bg-white hover:bg-white/75 transition text-black rounded-full flex items-center justify-center text-xs">
                                    <svg className="w-[1.5rem] h-[1.5rem]">
                                        <use href="/icons/sprite/sprite.svg#youtube" />
                                    </svg>
                                </a>

                                <a href="#" className="w-10 h-10 bg-white hover:bg-white/75 transition text-black rounded-full flex items-center justify-center text-xs">
                                    <svg className="w-[1.5rem] h-[1.5rem]">
                                        <use href="/icons/sprite/sprite.svg#insta" />
                                    </svg>
                                </a>

                            </div>

                            <div className="text-[0.875rem] leading-[1.2] tracking-[-0.01em] font-normal text-white/50 text-right">
                                {t("footer.rights")}
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}