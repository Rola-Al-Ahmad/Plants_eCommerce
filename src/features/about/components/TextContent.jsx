import React, { useMemo, useCallback } from "react";

import Button from "../../../shared/components/atoms/Button";

const AboutTextContent = React.memo(({ service1, service2 }) => {
  // Memoized service features
  const renderService = useCallback((icon, title, description, bgColor) => {
    return (
      <div className="col-sm-6" key={title}>
        <div className="d-flex align-items-center p-2 bg-light rounded shadow-sm h-100">
          <span
            className={`text-white rounded-circle d-flex align-items-center justify-content-center me-2 ${bgColor}`}
            style={{ width: 32, height: 32 }}
          >
            <img src={icon} alt={title} style={{ width: 20 }} />
          </span>
          <div>
            <div className="fw-bold">{title}</div>
            <div className="text-muted" style={{ fontSize: 13 }}>
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }, []);

  // Memoized service list
  const serviceFeatures = useMemo(() => {
    return (
      <div className="row mb-3 g-3">
        {renderService(
          service1.icon,
          service1.title,
          service1.description,
          "bg-success"
        )}
        {renderService(
          service2.icon,
          service2.title,
          service2.description,
          "bg-warning"
        )}
      </div>
    );
  }, [renderService, service1, service2]);

  return (
    <div className="col-lg-7">
      <h2 className="mb-3">
        Our <span className="text-success">Plant Collection</span>{" "}
        <span className="text-warning">Inspires</span> You to Grow.
      </h2>
      <p className="text-muted mb-4" style={{ maxWidth: 600 }}>
        Discover a world of lush greenery and vibrant blooms. At GreenLeaf, we
        are passionate about bringing nature closer to you with our wide variety
        of indoor and outdoor plants. Whether you're a seasoned gardener or just
        starting your plant journey, we have something for everyone.
      </p>

      {serviceFeatures}

      <div className="d-flex align-items-center mb-3">
        <div className="bg-light p-3 rounded flex-grow-1 me-3 shadow-sm">
          <div className="text-muted" style={{ fontSize: 14 }}>
            "I ordered a Monstera and it arrived in perfect condition! The
            quality and service are outstanding. My home feels so much greener
            now."
          </div>
        </div>
        <div className="text-center">
          <div className="fw-bold display-6 text-success">4.9</div>
          <div style={{ fontSize: 14, color: "#888" }}>Customer Rating</div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3 mt-3">
        <Button text="Contact Us" link="tel:+96176555555" className="px-4" />
        <div>
          <div className="text-muted" style={{ fontSize: 13 }}>
            Call Us
          </div>
          <div className="fw-bold">+961 76 555 555</div>
        </div>
      </div>
    </div>
  );
});

export default AboutTextContent;
