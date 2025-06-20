import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export const useWishListContext = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishListContext must be used within a WishlistProvider"
    );
  }

  return context;
};
