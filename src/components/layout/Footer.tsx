import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Footer() {
    const { t } = useTranslation()
    const menu = t("footer.menu", { returnObjects: true }) as string[]
    return (
        <footer>
            {/* ================= MOBILE ================= */}
            <div className="nop-container lg:hidden cover-gradient text-white rounded-t-[1.875rem] pb-[0.625rem] 
            xs:rounded-t-[1.875rem] 
            md:rounded-t-[1.875rem]">

                {/* LOGO */}
                <div className="flex justify-center font-bold text-[1rem] font-micro 
                px-[0.625rem] pt-[1.5rem] pb-[0.75rem]  
                xs:pt-[1.5rem] xs:pb-[0.75rem] 
                md:pt-[2.8125rem] md:pb-[1rem]
                ">
                    <svg className="w-[7.0625rem] h-[0.6875rem] 2xl:w-[8.8125rem] 2xl:h-[0.8125rem]">
                        <use href="/icons/sprite/sprite.svg#tx-logo" />
                    </svg>
                </div>

                {/* devider */}
                <div className="hidden xs:block 
                sm:px-[1.25rem] sm:mb-[0.125rem] 
                md:px-[1.875rem]">
                    <div className="block xs:border-t border-white/10"></div>
                </div>

                <div className="grid grid-cols-2 border-t border-white/10
                pt-[0.4375rem] px-[0.625rem] 
                xs:px-[1.25rem] xs:border-none
                md:pt-[1.25rem] md:px-[1.875rem]">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-[2.25rem] justify-between 
                    md:gap-[3.4375rem] ">

                        {/* MENU */}
                        <ul className="flex flex-col gap-0">
                            {menu.map((item, i) => (
                                <li key={i} className="leading-[1.3]">
                                    <a href="#" className="text-[0.875rem] leading-[1] tracking-[-0.04em] font-normal text-white/50 hover:underline hover:text-white transition">{item}</a>
                                </li>
                            ))}
                        </ul>



                        {/* PRIVACY */}
                        {t('lang') === 'ru' ? (
                            <div className="flex flex-col gap-[0.9375rem]">
                                <Link to="privacy" className="max-w-[11.25rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal text-white/50 hover:underline hover:text-white transition">
                                    {t("footer.privacy")}
                                </Link>

                                <div className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal text-white/50">
                                    {t("footer.copyright")}
                                </div>
                            </div>

                        ) : (
                            <div className="flex flex-col gap-[1.5625rem] mt-[0.3125rem]  xs:mt-0 ">
                                <a href="#" className="self-start inline-block fow-underline text-white transition hover:opacity-75 text-[0.875rem] leading-[1.1] tracking-[-0.08em] font-normal 
                                xs:pt-[0.125rem] 
                                md:pt-[0rem] md:translate-y-[-0.3125rem] "
                                >
                                    {t("footer.dev")}
                                </a>

                                <div className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal text-white/50">
                                    {t("footer.copyright")}
                                </div>
                            </div>
                        )}

                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col items-end justify-between">

                        {/* DEV */}
                        {t('lang') === 'ru' ? (
                            <a href="#" className="inline-block fow-underline text-white transition hover:opacity-75 text-[0.875rem] leading-[1.1] tracking-[-0.08em] font-normal 
                        xs:pt-[0.125rem] 
                        md:pt-[0rem] md:translate-y-[-0.3125rem] "
                            >
                                {t("footer.dev")}
                            </a>
                        ) : (
                            <Link to="privacy" className="mt-[0.1875rem] max-w-[11.25rem] text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal text-white/50 hover:underline hover:text-white transition">
                                {t("footer.privacy")}
                            </Link>
                        )}

                        {/* SOCIAL */}
                        <div className="flex flex-col gap-[0.9375rem] 
                        md:gap-[0.9375rem]">
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

                            <div className="text-[0.875rem] leading-[1.2] tracking-[-0.04em] font-normal text-white/50 text-right">
                                {t("footer.rights")}
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            {/* ================= DESKTOP ================= */}
            <div className="my-container 
            lg:pt-[0.375rem] lg:pb-[1.25rem] 
            3xl:py-[2.5rem]">
                <div className="hidden lg:block relative">

                    {/* LEFT */}
                    <div className="absolute left-0 bottom-0">
                        <Link to="privacy" className="text-black transition hover:opacity-75 text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal ">
                            {t("footer.privacy")}
                        </Link>
                    </div>

                    {/* CENTER LOGO */}
                    <Link to="/" className="flex justify-center text-black">
                        <svg className="w-[7.0625rem] h-[0.6875rem] 2xl:w-[8.8125rem] 2xl:h-[0.8125rem]">
                            <use href="/icons/sprite/sprite.svg#tx-logo" />
                        </svg>
                    </Link>

                    {/* RIGHT */}
                    <div className="absolute right-0 bottom-0 text-right">
                        <a href="#" className="inline-block foo-underline text-black transition hover:scale-x-103 hover:translate-x-[3%] text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal ">
                            {t("footer.dev")}
                        </a>

                        <p className="mt-[0.625rem] text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-normal text-black/50">
                            {t("footer.copyright")}. {t("footer.rights")}
                        </p>
                    </div>
                </div>
            </div>


        </footer>
    )
}