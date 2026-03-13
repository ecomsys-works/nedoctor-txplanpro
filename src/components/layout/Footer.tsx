import { useTranslation } from "react-i18next"

export default function Footer() {
    const { t } = useTranslation()

    const menu = t("footer.menu", { returnObjects: true }) as string[]

    return (
        <footer>
            {/* ================= DESKTOP ================= */}
            <div className="my-container lg:py-[16px] 3xl:py-[43px]">
                <div className="hidden lg:block relative">

                    {/* LEFT */}
                    <div className="absolute left-0 bottom-0">
                        <a href="#" className="text-black transition hover:opacity-75 text-[18px] leading-[1.3] tracking-[-0.04em] font-normal ">
                            {t("footer.privacy")}
                        </a>
                    </div>

                    {/* CENTER LOGO */}
                    <div className="flex justify-center">
                        <span className="font-bold text-xl font-micro">{t("footer.logo")}</span>
                    </div>

                    {/* RIGHT */}
                    <div className="absolute right-0 bottom-0 text-right">
                        <a href="#" className="inline-block foo-underline text-black transition hover:opacity-75 text-[18px] leading-[1.3] tracking-[-0.04em] font-normal ">
                            {t("footer.dev")}
                        </a>

                        <p className="mt-[10px] text-[18px] leading-[1.3] tracking-[-0.04em] font-normal text-black/50">
                            {t("footer.copyright")}. {t("footer.rights")}
                        </p>
                    </div>
                </div>
            </div>



            {/* ================= MOBILE ================= */}
            <div className="nop-container lg:hidden cover-gradient text-white rounded-t-[40px] pb-[10px]">

                {/* LOGO */}
                <div className="text-center font-bold text-[16px] font-micro px-[10px] pt-[30px] md:pt-[50px] pb-[10px] md:pb-[15px]">
                    <span>{t("footer.logo")}</span>
                </div>

                {/* devider */}
                <div className="hidden sm:block sm:px-[20px] md:px-[30px] sm:mb-[2px]">
                    <div className="block sm:border-t border-white/10"></div>
                </div>

                <div className="grid grid-cols-2 pt-[7px] md:pt-[20px] px-[10px] sm:px-[20px] md:px-[30px] sm:border-none border-t border-white/10">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-[36px] md:gap-[48px] justify-between">

                        {/* MENU */}
                        <ul className="flex flex-col gap-0">
                            {menu.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-[14px] leading-[1.2] tracking-[-0.04em] font-normal text-white/50 hover:underline hover:text-white transition">{item}</a>
                                </li>
                            ))}
                        </ul>

                        {/* PRIVACY */}
                        <div className="flex flex-col gap-[15px]">
                            <a href="#" className="max-w-[180px] text-[14px] leading-[1.2] tracking-[-0.04em] font-normal text-white/50 hover:underline hover:text-white transition">
                                {t("footer.privacy")}
                            </a>

                            <div className="text-[14px] leading-[1.2] tracking-[-0.04em] font-normal text-white/50">
                                {t("footer.copyright")}
                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col items-end justify-between">

                        {/* DEV */}
                        <a href="#" className="sm:pt-[2px] md:pt-0 inline-block fow-underline text-white transition hover:opacity-75 text-[14px] leading-[1.1] tracking-[-0.08em] font-normal ">
                            {t("footer.dev")}
                        </a>

                        {/* SOCIAL */}
                        <div className="flex flex-col gap-[13px]">
                            <div className="flex justify-end gap-[4px]">

                                <a href="#" className="w-10 h-10 bg-white hover:bg-white/75 transition text-black rounded-full flex items-center justify-center text-xs">
                                    <svg className="w-[24px] h-[24px]">
                                        <use href="/icons/sprite/sprite.svg#in" />
                                    </svg>
                                </a>

                                <a href="#" className="w-10 h-10 bg-white hover:bg-white/75 transition text-black rounded-full flex items-center justify-center text-xs">
                                    <svg className="w-[24px] h-[24px]">
                                        <use href="/icons/sprite/sprite.svg#youtube" />
                                    </svg>
                                </a>

                                <a href="#" className="w-10 h-10 bg-white hover:bg-white/75 transition text-black rounded-full flex items-center justify-center text-xs">
                                    <svg className="w-[24px] h-[24px]">
                                        <use href="/icons/sprite/sprite.svg#insta" />
                                    </svg>
                                </a>

                            </div>

                            <div className="text-[14px] leading-[1.2] tracking-[-0.01em] font-normal text-white/50 text-right">
                                {t("footer.rights")}
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}