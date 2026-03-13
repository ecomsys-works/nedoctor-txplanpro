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
  const Reviews = t("reviews.cards", { returnObjects: true }) as ReviewCardType[];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Заголовок */}
        <h2 className="text-[120px] font-bold mb-10 text-center md:text-left">
          {title}
        </h2>

        {/* Слайдер */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            0: { slidesPerView: 1.1, centeredSlides: false, spaceBetween: 10 },
            576: { slidesPerView: 2, centeredSlides: true, spaceBetween: 10 },
            992: { slidesPerView: 3, centeredSlides: false, spaceBetween: 20 },
          }}
          className="!overflow-visible"
        >
          {Reviews.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-5 rounded-[20px]">
                {/* Шапка карточки */}
                <div className="flex items-center gap-3 mb-4">
                  {card.avatar && <img src={card.avatar} alt="Avatar" className="w-12 h-12 rounded-full" />}
                  <div>
                    {card.name && <p className="font-semibold">{card.name}</p>}
                    {card.specialty && <p className="text-gray-500">{card.specialty}</p>}
                  </div>
                  {card.clinicLogo && <img src={card.clinicLogo} alt="Clinic" className="w-8 h-8 ml-auto" />}
                </div>

                {/* Текст */}
                <p>{card.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}