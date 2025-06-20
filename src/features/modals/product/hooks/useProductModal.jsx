import { useContext } from "react";
import { ProductModalContext } from "../context/ProductModalContext";

export const useProductModal = () => {
  const context = useContext(ProductModalContext);

  if (!context) {
    throw new Error(
      "useProductModal must be used within a ProductModalProvider"
    );
  }

  return context;
};
