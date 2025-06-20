import React, { useCallback } from "react";

import useCartContext from "../../../cart/hooks/useCartContext";

const ModalActions = ({ selectedProduct, quantity, setQuantity }) => {
  const { addToCartWithQuantity } = useCartContext();

  const handleClick = useCallback(() => {
    addToCartWithQuantity(selectedProduct, quantity);
  }, [addToCartWithQuantity, selectedProduct, quantity]);

  const increment = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, [setQuantity]);

  const decrement = useCallback(() => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }, [quantity, setQuantity]);

  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      <div
        className="d-flex align-items-center border rounded"
        style={{ width: "100px", height: "40px" }}
      >
        <span
          className="px-2"
          style={{ cursor: "pointer" }}
          onClick={decrement}
        >
          -
        </span>
        <span className="flex-grow-1 text-center border-start border-end">
          {quantity}
        </span>
        <span
          className="px-2"
          style={{ cursor: "pointer" }}
          onClick={increment}
        >
          +
        </span>
      </div>
      <button
        className="btn btn-success d-flex align-items-center gap-2 custom-z"
        onClick={handleClick}
      >
        <i className="bi bi-basket"></i> Add to Cart
      </button>
    </div>
  );
};

export default React.memo(ModalActions);
