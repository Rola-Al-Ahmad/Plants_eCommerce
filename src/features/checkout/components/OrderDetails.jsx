import React, { useCallback, useMemo } from "react";

import useCartContext from "../../cart/hooks/useCartContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderDetails = () => {
  const { cartItem, cartDetails } = useCartContext();

  const handleCheckout = useCallback(() => {
    toast.success("Checkout successful!", { autoClose: 2500 });
  }, []);

  const renderedCartItems = useMemo(() => {
    if (cartItem.length === 0) {
      return <p className="text-center fs-6 fw-semibold">No items in cart.</p>;
    }

    return cartItem.map((item) => (
      <div
        className="d-flex justify-content-between align-items-center mb-3 mt-3"
        key={item.id}
      >
        <span className="d-flex align-items-center gap-2">
          <img
            src={item.image}
            className="img-fluid"
            alt={item.name}
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          <span>
            {item.name} x {item.quantity}
          </span>
        </span>
        <span className="fw-semibold">${item.price.toFixed(2)}</span>
      </div>
    ));
  }, [cartItem]);

  return (
    <div className="container col-md-10 m-auto">
      <div className="card p-4">
        <h5 className="border-bottom mb-2 fs-4 fw-semibold">Order Details</h5>
        <div className="card-items">{renderedCartItems}</div>
        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <span>Item Subtotal</span>{" "}
            <span>${cartDetails.cartSubTotal?.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Shipping Fee</span> <span>$0.00</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Tax VAT (18%)</span>{" "}
            <span>${cartDetails.Tax?.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between fs-6">
            <span className="fw-semibold">Grand Total</span>{" "}
            <span>${cartDetails.cartTotal?.toFixed(2)}</span>
          </div>
        </div>

        <div className="d-grid mt-4">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleCheckout}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderDetails);
