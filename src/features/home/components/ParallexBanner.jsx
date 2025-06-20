import React, { useMemo } from "react";

import Button from "../../../shared/components/atoms/Button";
import SectionTitle from "../../../shared/components/atoms/SectionTitle";

const ParallexBanner = () => {
  const title = useMemo(
    () => (
      <>
        Potted Plant With <br /> Pot Grey 6cm
      </>
    ),
    []
  );

  const description = useMemo(
    () =>
      "Don’t miss out on our limited-time 30% discount! Shop your favorite plants and accessories today.",
    []
  );

  return (
    <section className="parallax-banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column align-items-start">
            <SectionTitle
              subTitle="Hot Sale 30% Discount"
              Title={title}
              className="align-items-start"
            />
            <p className="my-3 mb-4">{description}</p>

            <Button text="learn more" className="text-uppercase" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ParallexBanner);
