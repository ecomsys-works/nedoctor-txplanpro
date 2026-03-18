import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";

export type ReviewCardType = {
  avatar: string;
  name: string;
  specialty: string;
  clinicLogo: string;
  text: string;
};

export default function Reviews() {
  const { t } = useTranslation();

  const title = t("reviews.title");
  const reviews = t("reviews.cards", { returnObjects: true }) as ReviewCardType[];

  return (
    <section className="reviews gsap-up reviews-swiper my-container my-container--reviews mb-[70px] sm:mb-[100px] md:mb-[90px] 2xl:mb-[205px]">

      {/* Заголовок */}
      <h2 className={`tracking-[-0.06em] font-bold text-center uppercase         
       ${t('lang') === 'ru' ? "text-[40px]  sm:text-[60px] sm:mb-[40px] mb-[25px] 2xl:-mt-[10px] 2xl:mb-[80px] 3xl:mb-[50px] 2xl:text-[120px]  leading-[1] font-bold" : 
        "text-[40px]  sm:text-[60px] sm:mb-[40px] mb-[25px] 2xl:mb-[15px] 3xl:mb-[0px] 2xl:text-[160px] leading-[1] font-semibold font-anek 2xl:pt-[18px]"}
      `}>
        {title}
      </h2>

      {/* Слайдер */}
      <Swiper
        autoHeight={false}
        spaceBetween={4}
        slidesPerView={1.1}
        breakpoints={{
          0: { slidesPerView: 1.1, centeredSlides: false, spaceBetween: 4 },
          576: { slidesPerView: 2, centeredSlides: true, spaceBetween: 4 },
          992: { slidesPerView: 3, centeredSlides: false, spaceBetween: 6 },
          1536: { slidesPerView: 3, centeredSlides: false, spaceBetween: 10 },
          1880: { slidesPerView: 2.8, centeredSlides: true, spaceBetween: 25 },
        }}
        className="!overflow-visible"
      >
        {reviews.map((card, i) => (
          <SwiperSlide key={i} className="!h-auto flex">

            {/* Карточка */}
            <div className="bg-white p-[15px] 2xl:px-[30px] 2xl:pt-[15px] 2xl:pb-[25px] rounded-[15px] 2xl:rounded-[20px] flex flex-col w-full">

              {/* Header */}
              <div className="flex items-center gap-[20px] md:gap-[15px] 2xl:gap-[20px] mb-[45px] md:mb-[35px] 2xl:min-h-[80px]">

                {card.avatar && (
                  <img
                    src={card.avatar}
                    alt="Avatar"
                    className="w-[38px] h-[38px] 2xl:w-[54px] 2xl:h-[54px] rounded-full"
                  />
                )}

                <div>
                  {card.name && (
                    <p className="text-[14px] 2xl:text-[18px] leading-[1.3] tracking-[-0.04em] font-semibold">
                      {card.name}
                    </p>
                  )}

                  {card.specialty && (
                    <p className="text-[14px] 2xl:text-[18px] leading-[1] 2xl:leading-[1.3] tracking-[-0.04em] font-light">
                      {card.specialty}
                    </p>
                  )}
                </div>

                {card.clinicLogo ? (
                  <img
                    src={card.clinicLogo}
                    alt="Clinic"
                    className="ml-auto h-[31px] 2xl:h-[54px] w-auto"
                  />
                ) : (
                  <span
                    className="text-nowrap ml-auto h-[31px] 2xl:h-[54px] flex items-center justify-center border border-blue-stroke px-[6px]
                    text-grey text-[10px] 2xl:text-[18px] font-thin leading-[1.3] tracking-[-0.04em]
                    rounded-[58px] 2xl:rounded-[100px] 2xl:px-[15px]"
                  >
                    clinic logo
                  </span>
                )}

              </div>

              {/* Text */}
              <p className="text-black text-[14px] 2xl:text-[18px] leading-[1.3] tracking-[-0.04em]">
                {card.text}
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}