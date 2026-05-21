import React, { useMemo } from "react";

import about_hero from "../../../assets/about-img-1.jpg";

import about1 from "../../../assets/about-svg-1.svg";
import about2 from "../../../assets/about-svg-2.svg";
import about3 from "../../../assets/about-svg-3.svg";

import about1White from "../../../assets/about-white-svg-1.svg";
import about2White from "../../../assets/about-white-svg-2.svg";
import about3White from "../../../assets/about-white-svg-3.svg";

import Container from "../../../shared/components/atoms/Container";
import SectionTitle from "../../../shared/components/atoms/SectionTitle";
import useImageHoverSwap from "../../../shared/hooks/useImageHoverSwap";

const About = () => {
  const about = useMemo(
    () => [
      {
        title: "Plant Watering",
        para: "Healthy plants start with proper, efficient watering.",
        image: about1,
        imageWhite: about1White,
      },
      {
        title: "Potted Plant",
        para: "Beautiful, low-maintenance potted plants for any space.",
        image: about2,
        imageWhite: about2White,
      },
      {
        title: "Plant Ecology",
        para: "Eco-friendly designs that support plant life and balance.",
        image: about3,
        imageWhite: about3White,
      },
    ],
    [],
  );

  const { onMouseEnter, onMouseLeave } = useImageHoverSwap("about-svg", about);

  return (
    <Container>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img src={about_hero} alt="About Image" className="img-fluid" />
        </div>
        <div className="col-lg-6 about-content mt-md-5">
          <SectionTitle
            subTitle="About Plants"
            Title="WE OFFER LANDSCAPE AND TREE PLANTATION"
            className="about-title"
          />
          <p className="text-muted">
            We transform outdoor spaces with expert landscaping and tree
            plantation services, combining beauty with sustainability.
          </p>
          <div className="row mt-4 about-row">
            {about.map((item, index) => (
              <div
                className="about-col col-sm-4 text-center d-flex align-items-center flex-column"
                key={index}
              >
                <div
                  className="about-svg"
                  onMouseEnter={() => onMouseEnter(index)}
                  onMouseLeave={() => onMouseLeave(index)}
                >
                  <img
                    id={`about-svg-${index}`}
                    src={item.image}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="about-info">
                  <h5 className="mt-2 text-uppercase fw-bold about-text">
                    {item.title}
                  </h5>
                  <p className="text-muted about-para">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(About);
