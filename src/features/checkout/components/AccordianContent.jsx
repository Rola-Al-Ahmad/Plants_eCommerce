import React from "react";

import CardInfo from "./CardInfo";

const AccordianContent = ({
  title,
  content,
  aria_labelledby,
  data_bs_target,
}) => {
  return (
    <>
      {title === "Add Delivery Address" && (
        <div
          id={data_bs_target}
          className="accordion-collapse collapse show"
          aria-labelledby={aria_labelledby}
          data-bs-parent="#accordionCheckout"
        >
          <div className="accordion-body">
            <div className="container mt-4">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {content.map((item) => (
                  <div className="col" key={item.id}>
                    <div className="card h-100 p-3 shadow-sm">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fs-6 d-flex align-items-center">
                          <input
                            type="radio"
                            name={`address${item.id}`}
                            id={`address${item.id}`}
                            className="form-check-input me-2"
                            defaultChecked={item.isDefault}
                          />
                          {item.title}
                        </h5>
                      </div>
                      <p className="mb-2" style={{ fontSize: ".80rem" }}>
                        {item.address}
                      </p>
                      <div className="mt-auto">
                        <a
                          href="#"
                          className="text-success d-block mb-1"
                          style={{ fontSize: ".90rem" }}
                        >
                          Set as Default
                        </a>
                        <a
                          href="#"
                          className="text-primary me-2"
                          style={{ fontSize: ".90rem" }}
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-danger"
                          style={{ fontSize: ".90rem" }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {title === "Payment Method" && (
        <div
          className="accordion-collapse collapse"
          id={data_bs_target}
          data-bs-parent="#accordionCheckout"
          aria-labelledby={aria_labelledby}
        >
          <div className="accordion-body">
            <div className="container mt-4">
              {content.map((item) => (
                <div className="card p-3 mb-3" key={item.id}>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id={item.title}
                      className="form-check-input"
                    />
                    <label
                      htmlFor={item.title}
                      className="form-check-label fs-6 fw-semibold"
                    >
                      <div
                        className="d-inline-block img-wrap"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img-fluid"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <span className="ms-1">{item.title}</span>
                    </label>
                    <p className="text-muted ms-1 mb-0 fs-6">{item.para}</p>
                  </div>
                  {item.card && <CardInfo />}
                </div>
              ))}
              <div className="d-flex justify-content-end gap-2 g-2 mt-3">
                <button className="btn btn-outline-success bg-white prev-checkout-btn">
                  Prev
                </button>
                <button className="btn btn-success">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(AccordianContent);
