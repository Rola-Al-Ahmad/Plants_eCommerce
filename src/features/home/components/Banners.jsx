import React, { useMemo } from "react";

import subBanner1 from "../../../../public/assets/sub-banner-1-1.jpg";
import subBanner2 from "../../../../public/assets/sub-banner-2-1.jpg";
import cmsBanner1 from "../../../../public/assets/cms-banner-1.jpg";
import cmsBanner2 from "../../../../public/assets/cms-banner-2.jpg";
import Button from "../../../shared/components/atoms/Button";

const Banners = ({ cms }) => {
  const banners = useMemo(() => {
    return [
      {
        title: cms ? (
          <>
            The Elliot Modular <br /> Planters
          </>
        ) : (
          <>
            Greenery Nursery <br /> Snake Plant
          </>
        ),
        subTitle: cms ? "Flat 205 Discount" : "Farm Snake Plant",
        image: cms ? cmsBanner1 : subBanner1,
      },
      {
        title: cms ? (
          <>
            Cloud Farm Peace
            <br /> Lily Plant
          </>
        ) : (
          <>
            Urban Greens
            <br /> Snake Plant
          </>
        ),
        subTitle: cms ? "We're Spring Plant" : "Up To 25% Discount",
        image: cms ? cmsBanner2 : subBanner2,
      },
    ];
  }, [cms]);
  return (
    <section className="banners py-5">
      <div className="container">
        <div className="row">
          {banners.map((banner, index) => (
            <div
              className="col-lg-6 position-relative banner-mt mt-md-3 banner-cover"
              key={index}
            >
              <img
                src={banner.image}
                alt={`banner-${index}-img`}
                className="img-fluid rounded banner-img"
              />
              <div
                className={`banner-content banner-content-${
                  index + 1
                } position-absolute`}
              >
                <h3 className="banner-title">{banner.subTitle}</h3>
                <h1>{banner.title}</h1>
                <Button
                  link="/shop"
                  className="mt-2 banner-btn text-uppercase"
                  text="shop now"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Banners);
