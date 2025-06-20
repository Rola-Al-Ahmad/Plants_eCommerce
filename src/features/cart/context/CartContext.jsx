import React, { useMemo, useCallback } from "react";
import { createItemContext } from "../../../shared/context/createItemContext";
import { toast } from "react-toastify";

export const [CartContext, _, useCartBaseLogic] = createItemContext("cart");

export const CartProvider = ({ children }) => {
  const {
    items: cartItem,
    setItems: setCartItem,
    existingItem: existingCartItem,
    removeItem: handleRemoveFromCart,
    clearItems: handleClearCart,
  } = useCartBaseLogic();

  const addToCart = useCallback(
    (product) => {
      const existingItem = existingCartItem(product.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        toast.info(
          `Increased quantity of ${product.name} in Cart to ${parseInt(
            newQuantity
          )}`,
          { autoClose: 2500 }
        );
        setCartItem((prev) =>
          prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        toast.success(`${product.name} added to cart`, { autoClose: 2500 });
        setCartItem((prev) => [...prev, { ...product, quantity: 1 }]);
      }
    },
    [existingCartItem]
  );
  const updateQuantity = useCallback(
    (id, quantity) => {
      const newQuantity = parseInt(quantity);
      if (newQuantity < 1) return;

      const item = existingCartItem(id);
      if (!item) return;

      setCartItem((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );

      toast.info(`Updated quantity of ${item.name} to ${newQuantity}`, {
        autoClose: 2500,
      });
    },
    [existingCartItem]
  );

  const productQuantity = useCallback(
    (id) => {
      const item = existingCartItem(id);
      return item ? item.quantity : 1;
    },
    [existingCartItem]
  );

  const addToCartWithQuantity = useCallback(
    (product, quantity) => {
      const existingItem = existingCartItem(product.id);
      const parsedQuantity = parseInt(quantity);

      if (existingItem) {
        const newQuantity = existingItem.quantity + parsedQuantity;
        toast.info(
          `Increased quantity of ${product.name} in Cart to ${newQuantity}`,
          { autoClose: 2500 }
        );
        setCartItem((prev) =>
          prev.map((item) =>
            item.id === product.id ? { ...item, quantity: newQuantity } : item
          )
        );
      } else {
        toast.success(
          `Added ${parsedQuantity} × ${product.name} to your cart!`,
          { autoClose: 2500 }
        );
        setCartItem((prev) => [
          ...prev,
          { ...product, quantity: parsedQuantity },
        ]);
      }
    },
    [existingCartItem]
  );

  const cartDetails = useMemo(() => {
    const cartSubTotal = cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const Tax = Math.round(cartSubTotal * 0.18);
    const cartTotal = cartSubTotal + Tax;

    return { cartSubTotal, Tax, cartTotal };
  }, [cartItem]);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        cartDetails,
        addToCart,
        handleRemoveFromCart,
        handleClearCart,
        updateQuantity,
        productQuantity,
        addToCartWithQuantity,
        existingCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
