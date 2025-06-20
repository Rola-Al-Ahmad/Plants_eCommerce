import React, { useEffect, useState, useCallback, useMemo } from "react";

import ModalWrapper from "../shared/ModalWrapper";
import useCartContext from "../../cart/hooks/useCartContext";
import { useProductModal } from "./hooks/useProductModal";

import ProductModalBody from "./components/ProductModalBody";
import ModalActions from "./components/ModalActions";
import Alert from "./components/Alert";

import "./components/ProductModal.css";

const ProductPopModal = () => {
  const [quantity, setQuantity] = useState(1);

  const { selectedProduct, handleProductClose } = useProductModal();

  const { existingCartItem } = useCartContext();

  useEffect(() => {
    if (selectedProduct) {
      setQuantity(1);
    }
  }, [selectedProduct]);

  // Memoize modal ID to avoid recalculating on each render
  const modalIDName = useMemo(() => {
    return `${selectedProduct.name}-${selectedProduct.id}-Modal`;
  }, [selectedProduct]);

  // Memoize quantity setter
  const updateQuantity = useCallback((newQty) => {
    setQuantity(newQty);
  }, []);

  return (
    <ModalWrapper modalIDName={modalIDName} className="product-modal">
      <ProductModalBody
        selectedProduct={selectedProduct}
        quantity={quantity}
        handleClose={handleProductClose}
      />
      {existingCartItem(selectedProduct.id) && (
        <Alert selectedProduct={selectedProduct} setQuantity={setQuantity} />
      )}

      <ModalActions
        selectedProduct={selectedProduct}
        quantity={quantity}
        setQuantity={updateQuantity}
      />
    </ModalWrapper>
  );
};

export default React.memo(ProductPopModal);
