import React, { useMemo } from "react";

import service1 from "../../../assets/service-icon1.svg";
import service2 from "../../../assets/service-icon2.svg";
import service3 from "../../../assets/service-icon3.svg";
import service4 from "../../../assets/service-icon4.svg";

import service1Hover from "../../../assets/service-icon1-1.svg";
import service2Hover from "../../../assets/service-icon2-2.svg";
import service3Hover from "../../../assets/service-icon3-3.svg";
import service4Hover from "../../../assets/service-icon4-4.svg";

import SectionTitle from "../../../shared/components/atoms/SectionTitle";
import useImageHoverSwap from "../../../shared/hooks/useImageHoverSwap";

const Services = () => {
  const services = useMemo(
    () => [
      {
        title: "Pick Your Plant",
        description: "Choose from a variety of beautiful, easy-care plants.",
        image: service1,
        imageHover: service1Hover,
      },
      {
        title: "Choose a Pot Color",
        description: "Match your plant with a pot that suits your style.",
        image: service2,
        imageHover: service2Hover,
      },
      {
        title: "Have it Shipped",
        description: "Fast, safe delivery right to your doorstep.",
        image: service3,
        imageHover: service3Hover,
      },
      {
        title: "Watch It Grow",
        description: "Enjoy your plant as it grows and brightens your space.",
        image: service4,
        imageHover: service4Hover,
      },
    ],
    [],
  );

  const { onMouseEnter, onMouseLeave } = useImageHoverSwap(
    "service-img",
    services,
  );

  return (
    <section className="services py-5 mt-5">
      <div className="container">
        <div className="row">
          <SectionTitle subTitle="What We Do" Title="Our Services" />
        </div>
        <div className="row mt-5">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div
                  className="service-img"
                  onMouseEnter={() => onMouseEnter(index)}
                  onMouseLeave={() => onMouseLeave(index)}
                >
                  <img
                    id={`service-img-${index}`}
                    src={service.image}
                    alt={`${service.title}-img`}
                    className="img-fluid"
                  />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
