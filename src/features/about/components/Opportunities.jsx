import React, { useMemo, useCallback } from "react";

import idea1 from "../../../assets/idea1.jpg";

import Container from "../../../shared/components/atoms/Container";

const Opportunities = () => {
  const accordionItems = useMemo(
    () => [
      {
        title: "What Drives Us",
        content:
          "We imagine a world where everyone can enjoy the beauty of nature—right in their own space, every day.",
      },
      {
        title: "What We're Here For",
        content:
          "We're here to make green living easy and joyful, with plant care and landscaping that fit your life and values.",
      },
      {
        title: "What We Believe In",
        content:
          "We value kindness, creativity, and care — for our customers, our work, and the world we all share.",
      },
      {
        title: "We're Here for You",
        content:
          "Got questions or need help? Our support team is always ready to assist you with anything you need.",
      },
    ],
    []
  );

  const renderAccordionItem = useCallback((item, index) => {
    return (
      <div className="accordion-item border-0" key={index}>
        <h2 className="accordion-header" id={`heading${index}`}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded={index === 0}
            aria-controls={`collapse${index}`}
            style={{ backgroundColor: "white", boxShadow: "none" }}
          >
            <span>{item.title}</span>
          </button>
        </h2>
        <div
          id={`collapse${index}`}
          className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
          aria-labelledby={`heading${index}`}
          data-bs-parent="#businessAccordion"
        >
          <div className="accordion-body text-muted">{item.content}</div>
        </div>
      </div>
    );
  }, []);

  const renderedAccordion = useMemo(() => {
    return (
      <div className="accordion" id="businessAccordion">
        {accordionItems.map(renderAccordionItem)}
      </div>
    );
  }, [accordionItems, renderAccordionItem]);

  return (
    <section className="opportunities">
      <Container>
        <div className="row align-items-center">
          <div className="col-xl-6 mb-4 mb-md-0 opportunities-title">
            <h2 className="mb-3 text-uppercase text-md-center">
              Inspiration, innovation, <br /> and opportunity.
            </h2>
            <p className="text-muted mb-4 text-md-center">
              Discover the passion that drives our creativity and the vision
              behind every project we pursue.
            </p>

            {renderedAccordion}
          </div>

          <div className="col-xl-6 text-center">
            <img src={idea1} alt="Idea" className="img-fluid rounded-4" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Opportunities);
