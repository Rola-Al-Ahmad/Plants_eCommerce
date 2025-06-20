import React, { createContext, useMemo, useState, useCallback } from "react";
import { useModalContext } from "../../shared/hooks/useModalContext";

const ProductModalContext = createContext();

const ProductModalProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { showModal, hideModal } = useModalContext();

  // useCallback to avoid redefining functions on every render
  const handleProductClick = useCallback(
    (product) => {
      setSelectedProduct(product);
      showModal("selectedProduct");
    },
    [showModal]
  );

  const handleProductClose = useCallback(() => {
    setSelectedProduct(null);
    hideModal("selectedProduct");
  }, [hideModal]);

  const value = useMemo(
    () => ({
      selectedProduct,
      handleProductClick,
      handleProductClose,
    }),
    [selectedProduct, handleProductClick, handleProductClose]
  );

  return (
    <ProductModalContext.Provider value={value}>
      {children}
    </ProductModalContext.Provider>
  );
};

export { ProductModalContext, ProductModalProvider };
