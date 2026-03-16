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
    <section className="reviews gsap-up reviews-swiper my-container my-container--reviews mb-[4.375rem] sm:mb-[6.25rem] 2xl:mb-[12.5rem]">

      {/* Заголовок */}
      <h2 className="text-[2.5rem] sm:text-[3.75rem] 2xl:text-[7.5rem] mb-[1.5625rem] sm:mb-[2.5rem] 2xl:mb-[4.375rem] leading-[1] tracking-[-0.06em] font-semibold text-center uppercase">
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
          1880: { slidesPerView: 3, centeredSlides: false, spaceBetween: 25 },
        }}
        className="!overflow-visible"
      >
        {reviews.map((card, i) => (
          <SwiperSlide key={i} className="!h-auto flex">

            {/* Карточка */}
            <div className="bg-white p-[0.9375rem] 2xl:p-[1.875rem] rounded-[0.9375rem] 2xl:rounded-[1.25rem] flex flex-col w-full">

              {/* Header */}
              <div className="flex items-center gap-3 mb-[2.25rem] 2xl:min-h-[5rem]">

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
                    rounded-[3.625rem] 2xl:rounded-[6.25rem] 2xl:px-[0.75rem]"
                  >
                    clinic logo
                  </span>
                )}

              </div>

              {/* Text */}
              <p className="text-black text-[0.875rem] 2xl:text-[1.125rem] leading-[1.2] tracking-[-0.04em]">
                {card.text}
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}