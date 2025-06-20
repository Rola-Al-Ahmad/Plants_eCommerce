import React from "react";

import { Link } from "react-router";
import useCartContext from "../hooks/useCartContext";

const CartTotals = () => {
  const { cartDetails } = useCartContext();
  return (
    <div className="row mt-5">
      <div className="col-lg-12">
        <div className="card p-4 total-product-price-wrap shadow-sm border">
          <h4 className="mb-3 fw-semibold">Cart Totals</h4>
          <table className="table align-middle borderless">
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td className="text-end text-success cart-subtotal">
                  ${cartDetails.cartTotal?.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className="text-end">Free Shipping</td>
              </tr>
              <tr>
                <td className="fw-semibold">Cart Total</td>
                <td className="text-end text-success cart-total">
                  ${cartDetails.cartTotal?.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
          <Link
            to="/checkout"
            className="btn checkout-btn d-inline-block mt-3 mx-auto"
          >
            <i className="ri-bank-card-line me-2"></i> Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartTotals);
