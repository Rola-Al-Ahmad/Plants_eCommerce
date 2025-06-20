import React, { useMemo, useState, useEffect, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import brand1 from "../../../../public/assets/brand-1.png";
import brand2 from "../../../../public/assets/brand-2.png";
import brand3 from "../../../../public/assets/brand-3.png";
import brand4 from "../../../../public/assets/brand-4.png";
import brand5 from "../../../../public/assets/brand-5.png";

const Brands = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    () => window.innerWidth >= 1399
  );

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth >= 1399);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const brands = useMemo(
    () => [
      { id: 1, image: brand1, title: "Bloom Spring Florist" },
      { id: 2, image: brand2, title: "Green Spring Florist" },
      { id: 3, image: brand3, title: "Greenplants Flower Studio" },
      { id: 4, image: brand4, title: "Green Leaves Pure Florist" },
      { id: 5, image: brand5, title: "Garten Center Florist" },
    ],
    []
  );

  return (
    <section className="brands py-5 my-5">
      <div className="container">
        <div className="row">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={!isLargeScreen}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 4,
              },
              1399: {
                slidesPerView: 5,
              },
            }}
            className="brand-swiper"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="brand-img">
                  <img
                    src={brand.image}
                    alt={`${brand.title} LOGO`}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Brands);
