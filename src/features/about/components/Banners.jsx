import React from "react";

import service_icon1 from "../../../../public/assets/service-icon1.svg";
import service_icon2 from "../../../../public/assets/service-icon2.svg";

import delivery_icon from "../../../../public/assets/delivery.jpg";
import logo from "../../../../public/assets/plantLogo.jpg";
import plants from "../../../../public/assets/plants.jpg";

import ImageCollage from "./ImageCollage ";
import TextContent from "./TextContent";

const Banners = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center g-4 flex-wrap">
        {/* Left Images - Collage Layout */}

        <ImageCollage
          mainImage={plants}
          badgeImage={service_icon1}
          badgeTitle="10+ Years"
          badgeSubtitle="Green Service"
          logoImage={logo}
          supportImage={delivery_icon}
        />

        {/* Right Content */}

        <TextContent
          service1={{
            icon: service_icon1,
            title: "Quality Plants",
            description:
              "Handpicked, healthy, and thriving plants for your home and garden.",
          }}
          service2={{
            icon: service_icon2,
            title: "Worldwide Delivery",
            description:
              "Fast and safe delivery to your doorstep, wherever you are.",
          }}
        />
      </div>
    </section>
  );
};

export default React.memo(Banners);
