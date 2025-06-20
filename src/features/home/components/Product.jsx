import React, { useMemo, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import ProductCard from "../../../shared/components/molecules/ProductCard";
import SectionTitle from "../../../shared/components/atoms/SectionTitle";

import products from "../../../shared/utils/Product";

const Product = ({ populer, topRated }) => {
  // Memoize filtered products so filtering only happens once per mount
  const topRatedProducts = useMemo(
    () => products.filter((product) => product.rating === 5),
    []
  );

  const newProducts = useMemo(
    () => products.filter((product) => product.id >= 2 && product.id <= 8),
    []
  );

  const popularProducts = useMemo(
    () => products.filter((product) => product.id >= 5 && product.id <= 10),
    []
  );

  // const allProducts = [...topRatedProducts, ...newProducts, ...popularProducts];

  // Memoize productsToDisplay based on props and filtered lists
  const productsToDisplay = useMemo(() => {
    if (populer) return popularProducts;
    if (topRated) return topRatedProducts;
    return newProducts;
  }, [populer, topRated, popularProducts, topRatedProducts, newProducts]);

  // Memoize titles
  const subTitle = useMemo(() => {
    if (populer) return "Popular Products";
    if (topRated) return "Top Rated Products";
    return "New Products";
  }, [populer, topRated]);

  const Title = useMemo(() => {
    if (populer) return "Trending Now";
    if (topRated) return "Top Picks Loved by You";
    return "Fresh Arrivals";
  }, [populer, topRated]);

  const renderSlides = useCallback(() => {
    return productsToDisplay.map((product) => (
      <SwiperSlide key={product.id} style={{ height: "100%" }}>
        <ProductCard product={product} />
      </SwiperSlide>
    ));
  }, [productsToDisplay]);
  return (
    <>
      <section className="container my-5 pb-5 position-relative">
        <div className="row product-row">
          <SectionTitle subTitle={subTitle} Title={Title} />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-swiper-next",
            prevEl: ".product-swiper-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            820: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="mt-4 swiper product-swiper home-swiper"
          style={{ height: "550px" }}
        >
          {renderSlides()}
        </Swiper>
        <div className="swiper-button-prev product-swiper-prev product-swiper-btn">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className="swiper-button-next product-swiper-next product-swiper-btn">
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </section>
    </>
  );
};

export default React.memo(Product);
