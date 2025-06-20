import React, { useMemo } from "react";

const ProductModalBody = ({ selectedProduct, quantity, handleClose }) => {
  const { name, description, image, rating, price, offerPrice } =
    selectedProduct;
  const totalOfferPrice = useMemo(
    () => (offerPrice * quantity).toFixed(2),
    [offerPrice, quantity]
  );

  const totalRegularPrice = useMemo(
    () => (price * quantity).toFixed(2),
    [price, quantity]
  );

  const starIcons = useMemo(() => {
    return [1, 2, 3, 4, 5].map((star) => {
      const className =
        rating >= star
          ? "ri-star-fill"
          : rating >= star - 0.5
          ? "ri-star-half-line"
          : "ri-star-line";

      return <i key={star} className={className}></i>;
    });
  }, [rating]);

  return (
    <div className="modal-body d-flex gap-3 position-relative">
      <div className="col-6 image-container">
        <img
          src={image}
          alt={`${name}-image`}
          className="img-fluid rounded border"
        />
      </div>
      <div className="col-6 d-flex flex-column justify-content-center">
        <div className="modal-header border-0 p-0">
          <h5 className="modal-title product-title" id="productModalLabel">
            {name}
          </h5>
        </div>
        <p className="mt-4 product-des">{description}</p>
        <div className="d-flex gap-1 text-warning mb-2">{starIcons}</div>
        <h4 className="text-success fw-bold">
          ${totalOfferPrice}{" "}
          <span className="text-muted text-decoration-line-through fs-6 fw-normal">
            ${totalRegularPrice}
          </span>
        </h4>
      </div>
      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 mt-md-2 me-md-1"
        aria-label="Close modal"
        onClick={handleClose}
        style={{ marginRight: "-0.5rem", marginTop: "-0.5rem" }}
      ></button>
    </div>
  );
};

export default React.memo(ProductModalBody);
