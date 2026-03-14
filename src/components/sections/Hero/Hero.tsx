import { useTranslation } from "react-i18next";
import { formatHeader } from "@/utils/formaters";
import { useState, useEffect } from "react";

// Импорты Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Hero() {
  const { t } = useTranslation();
  const cards = t("hero.cards", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  const font = t("hero.font");

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    queueMicrotask(() => {
      setWindowWidth(window.innerWidth);
    })

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileOffsets = ["translate-y-0", "translate-y-[16%]", "translate-y-0", "translate-y-[16%]", "translate-y-0"];

  const arcPositions = [
    { x: "0", y: "0" },
    { x: "0", y: "0" },
    { x: "0", y: "0" },
    { x: "0", y: "0" },
    { x: "0", y: "0" },
  ];

  return (
    <section className="my-container cover-gradient  text-white rounded-b-[30px] 2xl:rounded-b-[80px] pb-[40px] mb-[30px] sm:mb-[50px] md:mb-[70px] 2xl:mb-[90px] 3xl:mb-[100px] relative overflow-hidden">

      {/* Cards */}
      {windowWidth < 640 && (
        <div className="pb-[40px] pt-[15px]">
          <Swiper
            spaceBetween={35}
            slidesPerView={1.5}
            className="!overflow-visible select-none mb-[16%]"
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <div className={`w-[100%] aspect-[22/32] glass rounded-[20px] p-[20px] overflow-hidden text-white  flex flex-col justify-between ${mobileOffsets[i]}`}>
                  <div className="block">
                    <h3 className="text-[18px] leading-[1] tracking-[-0.04em] mb-[5px]">{card.title}</h3>
                    <p className="text-[14px] leading-[1.2] tracking-[-0.04em] mb-[5px]">{card.description}</p>
                  </div>
                  <div className="h-[120px] bg-neutral-700 rounded-[20px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {windowWidth >= 640 && windowWidth < 950 && (
        // Два ряда
        <div className="flex flex-col gap-6 mb-[130px] pt-[70px]">
          <div className="flex justify-center gap-6">
            {cards.slice(0, 2).map((card, i) => (
              <div key={i} className="w-full max-w-[33.33%] aspect-square glass rounded-[30px] p-[15px] overflow-hidden text-white  flex flex-col justify-between">
                <div className="block">
                  <h3 className="text-[18px] leading-[1] tracking-[-0.04em] mb-[5px]">{card.title}</h3>
                  <p className="text-[14px] leading-[1.2] tracking-[-0.04em] mb-[5px]">{card.description}</p>
                </div>
                <div className="h-[120px] bg-neutral-700 rounded-[20px]" />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {cards.slice(2, 5).map((card, i) => (
              <div key={i} className="w-full max-w-[33.33%] aspect-square glass rounded-[30px] p-[15px] overflow-hidden text-white flex flex-col justify-between">
                <div className="block">
                  <h3 className="text-[18px] leading-[1] tracking-[-0.04em] mb-[5px]">{card.title}</h3>
                  <p className="text-[14px] leading-[1.2] tracking-[-0.04em] mb-[5px]">{card.description}</p>
                </div>
                <div className="h-[120px] bg-neutral-700 rounded-[20px]" />
              </div>
            ))}
          </div>
        </div>
      )}

      {windowWidth >= 950 && (
        // Дуговой лейаут
        <div className="py-25">
          <div className="relative hidden">
            {cards.map((card, i) => (
              <div
                key={i}
                className="absolute glass rounded-[40px] p-5 w-[220px]"
                style={{
                  left: `calc(50% + ${arcPositions[i].x})`,
                  top: arcPositions[i].y,
                  transform: "translateX(-50%)",
                }}
              >
                <h3 className="text-[24px] mb-2">{card.title}</h3>
                <p className="text-[16px] mb-5 text-neutral-300">{card.description}</p>
                <div className="h-[120px] bg-neutral-800 rounded-[20px]" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Text */}
      <div className="text-center flex flex-col items-center">
        <h1 className={`text-[30px] 2xl:text-[80px] mb-[20px] leading-[0.85] tracking-[-0.03em] text-center font-${font}`}>
          {formatHeader(t("hero.title"))}
        </h1>

        <p className="text-[14px] leading-[1.2] tracking-[-0.04em] text-center mb-[30px]">
          {t("hero.subtitle")}
        </p>

        <button className="glass overflow-hidden w-full sm:w-[initial] sm:px-[50px] text-[18px] tracking-[-0.04em] h-[55px] 2xl:h-[70px] 2xl:px-10 rounded-[40px] hover:scale-102 transition duration-300 cursor-pointer">
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}