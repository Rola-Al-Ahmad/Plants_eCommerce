import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./App.jsx";
import { ProductModalProvider } from "./features/modals/product/context/ProductModalContext";
import { WishlistProvider } from "./features/wishlist/context/WishlistContext";
import { CartProvider } from "./features/cart/context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import ModalProvider from "./features/modals/shared/context/ModalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <ProductModalProvider>
        <WishlistProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </WishlistProvider>
      </ProductModalProvider>
    </ModalProvider>
  </StrictMode>
);
