import React, { useEffect, useCallback, useMemo } from "react";

import useCartContext from "../../../cart/hooks/useCartContext";

import { useProductModal } from "../hooks/useProductModal";
import { Link } from "react-router";
import { useModalContext } from "../../shared/hooks/useModalContext";

const Alert = ({ selectedProduct, setQuantity }) => {
  const { productQuantity, handleRemoveFromCart } = useCartContext();

  const { handleProductClose } = useProductModal();

  const { openConfirmModal, hideModal } = useModalContext();

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltips = Array.from(tooltipTriggerList).map(
      (el) => new window.bootstrap.Tooltip(el)
    );

    return () => {
      // Dispose all tooltips on unmount or re-render
      tooltips.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  const quantityInCart = productQuantity(selectedProduct.id);

  const total = useMemo(() => {
    return (quantityInCart * selectedProduct.offerPrice).toFixed(2);
  }, [quantityInCart, selectedProduct.offerPrice]);

  const handleTrashClick = useCallback(() => {
    openConfirmModal({
      productName: selectedProduct.name,
      modalName: "Cart",
      modalType: "Remove",
      onConfirm: () => {
        handleRemoveFromCart(selectedProduct.id);
        setQuantity(1);
      },
    });
  }, [openConfirmModal, selectedProduct, handleRemoveFromCart, setQuantity]);

  const handleViewCart = useCallback(() => {
    handleProductClose();
    hideModal("search");
  }, [handleProductClose, hideModal]);

  return (
    <div className="alert alert-light border d-flex align-items-center gap-3 p-3 shadow-sm w-100">
      <i className="bi bi-info-circle fs-5"></i>
      <div className="d-flex flex-column">
        <span className="fw-semibold info-text">
          You already have{" "}
          <span className="text-primary">{quantityInCart}</span> of this item in
          your cart.{" "}
          <sup
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            type="button"
            aria-label="Close modal"
            title="View Cart"
            onClick={handleViewCart}
          >
            <Link
              to="/cart"
              className="text-decoration-none fw-semibold text-success text-end"
            >
              <i className="bi bi-box-arrow-up-right me-1"></i>
            </Link>
          </sup>
        </span>
        <small className="text-muted total-info">
          Total for this item:{" "}
          <span className="fw-semibold text-success">${total}</span>
          <span
            type="button"
            className="text-danger ms-2 remove-tooltip"
            onClick={handleTrashClick}
            aria-label="Remove item from cart"
          >
            <i className="bi bi-trash"></i>
            <span className="remove-tooltip-text">Remove item from cart</span>
          </span>
        </small>
      </div>
    </div>
  );
};

export default React.memo(Alert);
