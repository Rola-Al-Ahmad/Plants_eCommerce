import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import blogs from "../../blog/utils/Blogs";
import BlogCard from "../../../shared/components//molecules/BlogCard";
import SectionTitle from "../../../shared/components/atoms/SectionTitle";

const Blogs = () => {
  const filteredBlogs = useMemo(() => blogs.filter((blog) => blog.id <= 6), []);
  return (
    <section className="blog py-5 my-5">
      <div className="container">
        <SectionTitle Title="OUR LATEST BLOG" subTitle="From The Blog" />
        <div className="row mt-5 position-relative blog-row">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: ".blog-swiper-next",
              prevEl: ".blog-swiper-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 1,
              },
              991: {
                slidesPerView: 2,
              },
              1399: {
                slidesPerView: 3,
              },
            }}
            className="blog-swiper"
          >
            {filteredBlogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev blog-swiper-prev blog-swiper-btn swiper-btn swiper-prev">
            <i className="ri-arrow-left-s-line"></i>
          </div>
          <div className="swiper-button-next blog-swiper-next blog-swiper-btn swiper-btn swiper-next">
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Blogs);
