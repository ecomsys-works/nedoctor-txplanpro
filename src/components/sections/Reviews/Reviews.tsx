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
    <section className="reviews gsap-up reviews-swiper my-container my-container--reviews mb-[4.375rem] sm:mb-[6.25rem] md:mb-[5.625rem] 2xl:mb-[12.8125rem]">

      {/* Заголовок */}
      <h2 className={`tracking-[-0.06em] font-bold text-center uppercase         
       ${t('lang') === 'ru' ? "text-[2.5rem]  sm:text-[3.75rem] sm:mb-[2.5rem] mb-[1.5625rem] 2xl:-mt-[0.625rem] 2xl:mb-[5rem] 3xl:mb-[3.125rem] 2xl:text-[7.5rem]  leading-[1] font-bold" : 
        "text-[2.5rem]  sm:text-[3.75rem] sm:mb-[2.5rem] mb-[1.5625rem] 2xl:mb-[0.9375rem] 3xl:mb-[0rem] 2xl:text-[10rem] leading-[1] font-semibold font-anek 2xl:pt-[1.125rem]"}
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
            <div className="bg-white p-[0.9375rem] 2xl:px-[1.875rem] 2xl:pt-[0.9375rem] 2xl:pb-[1.5625rem] rounded-[0.9375rem] 2xl:rounded-[1.25rem] flex flex-col w-full">

              {/* Header */}
              <div className="flex items-center gap-[1.25rem] md:gap-[0.9375rem] 2xl:gap-[1.25rem] mb-[2.8125rem] md:mb-[2.1875rem] 2xl:min-h-[5rem]">

                {card.avatar && (
                  <img
                    src={card.avatar}
                    alt="Avatar"
                    className="w-[2.375rem] h-[2.375rem] 2xl:w-[3.375rem] 2xl:h-[3.375rem] rounded-full"
                  />
                )}

                <div>
                  {card.name && (
                    <p className="text-[0.875rem] 2xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em] font-semibold">
                      {card.name}
                    </p>
                  )}

                  {card.specialty && (
                    <p className="text-[0.875rem] 2xl:text-[1.125rem] leading-[1] 2xl:leading-[1.3] tracking-[-0.04em] font-light">
                      {card.specialty}
                    </p>
                  )}
                </div>

                {card.clinicLogo ? (
                  <img
                    src={card.clinicLogo}
                    alt="Clinic"
                    className="ml-auto h-[1.9375rem] 2xl:h-[3.375rem] w-auto"
                  />
                ) : (
                  <span
                    className="text-nowrap ml-auto h-[1.9375rem] 2xl:h-[3.375rem] flex items-center justify-center border border-blue-stroke px-[0.375rem]
                    text-grey text-[0.625rem] 2xl:text-[1.125rem] font-thin leading-[1.3] tracking-[-0.04em]
                    rounded-[3.625rem] 2xl:rounded-[6.25rem] 2xl:px-[0.9375rem]"
                  >
                    clinic logo
                  </span>
                )}

              </div>

              {/* Text */}
              <p className="text-black text-[0.875rem] 2xl:text-[1.125rem] leading-[1.3] tracking-[-0.04em]">
                {card.text}
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}