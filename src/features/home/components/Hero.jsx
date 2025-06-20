import React, { useCallback, useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "remixicon/fonts/remixicon.css";

import Button from "../../../shared/components/atoms/Button";

const Hero = () => {
  const slides = useMemo(
    () => [
      {
        title: (
          <>
            Green Indoor Plant <br />
            For Home Decore
          </>
        ),
        subTitle: "Hot Sale 50% Discount",
        description:
          "Bring nature into your home with our lush green indoor plants. Perfect for adding a fresh touch to your décor — and now at 50% off for a limited time!",
      },
      {
        title: (
          <>
            Colorful Plant Pots <br />
            For Home Decore
          </>
        ),
        subTitle: "Hot Sale 40% Discount",
        description:
          "Brighten up your space with our vibrant plant pots — the perfect blend of color and style for your home décor. Grab yours now with 40% off for a limited time!",
      },
    ],
    []
  );

  const renderSlide = useCallback(
    (slide, index) => (
      <SwiperSlide key={index}>
        <div className={`hero-wrap hero-wrap${index + 1} position-relative`}>
          <div className="hero-content position-absolute">
            <h3>{slide.subTitle}</h3>
            <h1>{slide.title}</h1>
            <p className="my-3">{slide.description}</p>
            <Button className="hero-btn mt-3" text="Shop Now" link="/shop" />
          </div>
        </div>
      </SwiperSlide>
    ),
    []
  );
  return (
    <section className="hero">
      <Swiper
        effect={"fade"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
      >
        {slides.map(renderSlide)}
      </Swiper>
      <div className="swiper-button-prev swiper-btn swiper-prev hide-element">
        <i className="ri-arrow-left-long-line"></i>
      </div>
      <div className="swiper-button-next swiper-btn swiper-next hide-element">
        <i className="ri-arrow-right-long-line"></i>
      </div>
    </section>
  );
};

export default React.memo(Hero);
