import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import user1 from "../../../../public/assets/user1.jpg";
import user2 from "../../../../public/assets/user2.jpg";
import user3 from "../../../../public/assets/user3.jpg";

const Testimonial = () => {
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        image: user1,
        name: "Rami Haddad",
        designation: "Interior Designer, Beirut",
        review:
          "I ordered the Areca Palm and Ficus Lyrata for a client’s apartment makeover, and they were absolutely stunning. The plants arrived in perfect condition and added the exact tropical touch I was aiming for. Will definitely shop here again!",
      },
      {
        id: 2,
        image: user2,
        name: "Karim El Hajj",
        designation: "Landscape Architect, Byblos",
        review:
          "As someone who works with greenery daily, I was impressed by the quality of the Dracaena and Croton I received. The colors and freshness were spot on. I also appreciate the quick delivery across Lebanon.",
      },
      {
        id: 3,
        image: user3,
        name: "Rita Saad",
        designation: "Botany Teacher, Tripoli",
        review:
          "Your selection is fantastic! I bought the Mini Bonsai and Lucky Bamboo for my home and classroom. Not only do they bring charm, but they also spark interest among my students. Highly recommended for plant lovers!",
      },
    ],
    []
  );

  return (
    <section className="testimonial d-flex align-items-center">
      <div className="my-5 text-center container testimonial-wrap">
        <div className="text-success mb-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //   },
            //   640: {
            //     slidesPerView: 2,
            //   },
            //   768: {
            //     slidesPerView: 2,
            //   },
            //   1024: {
            //     slidesPerView: 3,
            //   },
            // }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <i className="ri-double-quotes-l"></i>
                <p className="text-muted px-md-5">{testimonial.review}</p>
                <div className="text-card d-flex justify-content-center my-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}-image`}
                    width={80}
                    height={80}
                    className="shadow-sm"
                  />
                </div>
                <h5>{testimonial.name}</h5>
                <p className="text-muted">{testimonial.designation}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonial);
