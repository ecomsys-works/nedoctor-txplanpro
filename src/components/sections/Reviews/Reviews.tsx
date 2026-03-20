import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";

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
  const titleDesk = t("reviews.titleDesk");
  const reviews = t("reviews.cards", { returnObjects: true }) as ReviewCardType[];

  return (
    <section className={`reviews gsap-up reviews-swiper my-container my-container--reviews 
      ${t('lang') === 'ru' ?
        `mb-[4.375rem] 
        xs:mb-[6.25rem] 
        md:mb-[6.25rem] 
        2xl:mb-[12.8125rem]`
        :
        `mb-[4.1875rem] 
        xs:mb-[6.25rem] 
        md:mb-[6.25rem] 
        2xl:mb-[12.5rem]
        3xl:mb-[12.8125rem]`}
    `}>

      {/* Заголовок */}
      <h2 className={`tracking-[-0.06em] text-center uppercase         

       ${t('lang') === 'ru' ?
          `font-semibold leading-[1] text-[2.375rem] mb-[1.5625rem] 
        xs:font-bold xs:text-[3.75rem] xs:mb-[2.5rem]         
        2xl:-mt-[0.625rem] 2xl:mb-[5rem] 2xl:text-[7.5rem] 
        3xl:mb-[3.125rem]`
          :
          `font-semibold text-[2.5rem] mb-[1.25rem] leading-[1] font-anek 
        xs:text-[4.875rem] xs:mb-[0.625rem] 
        md:mb-[0.9375rem]
        2xl:mb-[1.5625rem] 2xl:text-[10rem] 2xl:pt-[1.125rem]  
        3xl:mb-[-0.625rem]`}
      `}>
        <span className="md:hidden">{title}</span>
        <span className="hidden md:block">{titleDesk}</span>
      </h2>

      {/* Слайдер */}
      <Swiper
        modules={[Autoplay]} // вот это важно
        autoplay={{
          delay: 3000, // 5 секунд
          disableOnInteraction: false, // не останавливается после свайпа
          pauseOnMouseEnter: true, // (опционально) пауза при наведении
        }}
        loop={true} // чтобы крутился бесконечно
        autoHeight={false}
        spaceBetween={4}
        slidesPerView={1.08}
        breakpoints={{
          0: { slidesPerView: 1.08, centeredSlides: false, spaceBetween: 3 },
          576: { slidesPerView: 1.87, centeredSlides: true, spaceBetween: 3 },
          992: { slidesPerView: 2.93, centeredSlides: false, spaceBetween: 6 },
          1536: { slidesPerView: 3, centeredSlides: false, spaceBetween: 10 },
          1880: { slidesPerView: 2.8, centeredSlides: true, spaceBetween: 25 },
        }}
        className="!overflow-visible"
      >
        {reviews.map((card, i) => (
          <SwiperSlide key={i} className="!h-auto flex">

            {/* Карточка */}
            <div className="bg-white rounded-[0.9375rem] flex flex-col w-full 
            p-[0.9375rem] 
            2xl:px-[1.875rem] 2xl:pt-[0.5625rem] 2xl:pb-[1.5625rem] 2xl:rounded-[1.25rem]">

              {/* Header */}
              <div className="flex items-center 
              gap-[0.625rem] mb-[2.1875rem] 
              xs:gap-[0.625rem] xs:mb-[2.1875rem] 
              md:gap-[0.9375rem] md:mb-[2.1875rem] 
              2xl:gap-[1.25rem] 2xl:min-h-[6.25rem] 
              3xl:min-h-[6.25rem]">

                {card.avatar && (
                  <img
                    src={card.avatar}
                    alt="Avatar"
                    className="w-[2.375rem] h-[2.375rem] rounded-full
                    2xl:w-[3.375rem] 2xl:h-[3.375rem] "
                  />
                )}

                <div>
                  {card.name && (
                    <p className="text-[0.875rem] leading-[1.3] tracking-[-0.04em] font-semibold
                    2xl:text-[1.125rem] 
                    ">
                      {card.name}
                    </p>
                  )}

                  {card.specialty && (
                    <p className="text-[0.875rem] leading-[1] tracking-[-0.04em] font-light
                    2xl:text-[1.125rem] 2xl:leading-[1.3] 
                    ">
                      {card.specialty}
                    </p>
                  )}
                </div>

                {card.clinicLogo ? (
                  <img
                    src={card.clinicLogo}
                    alt="Clinic"
                    className="ml-auto h-[1.9375rem] w-auto
                    2xl:h-[3.375rem] 
                    "
                  />
                ) : (
                  <span
                    className="px-[0.375rem] h-[1.9375rem] text-nowrap ml-auto flex items-center justify-center border border-blue-stroke
                    text-grey text-[0.625rem] font-thin leading-[1.3] tracking-[-0.04em] rounded-[3.625rem] 
                    2xl:h-[3.375rem] 2xl:rounded-[6.25rem] 2xl:px-[0.9375rem] 2xl:text-[1.125rem] "
                  >
                    clinic logo
                  </span>
                )}

              </div>

              {/* Text */}
              <p className="text-black text-[0.875rem] leading-[1.2] tracking-[-0.04em] 
              2xl:text-[1.125rem] 2xl:leading-[1.3]">
                {card.text}
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}