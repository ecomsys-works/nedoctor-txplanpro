import { useTranslation } from "react-i18next";

export default function PrivacyPage() {
    const { t } = useTranslation();

    const title = t("privacy.title");    
    const content = t("privacy.content");
    const font = t("privacy.font");

    return (
        <section className="min-h-[15.625rem] h-[inherit] privacy-page typography my-container text-black ">           
            <h2 className={`font-${font}`}>{title}</h2>
            <p>{content}</p>
        </section>
    );
}