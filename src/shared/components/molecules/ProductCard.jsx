import React, { useCallback } from "react";

import useCartContext from "../../../features/cart/hooks/useCartContext";
import { useProductModal } from "../../../features/modals/product/hooks/useProductModal";
import { useWishListContext } from "../../../features/wishlist/hooks/useWishListContext";

const ProductCard = ({ product }) => {
  const { handleProductClick } = useProductModal();
  const {
    existingItem: existingWishlistItem,
    addItem: addToWishlist,
    removeItem: removeFromWishlist,
  } = useWishListContext();

  const { addToCart } = useCartContext();

  const handleToggleWishlist = useCallback(() => {
    if (existingWishlistItem(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }, [product, existingWishlistItem, addToWishlist, removeFromWishlist]);

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [product, addToCart]);

  const handleProductDetails = useCallback(() => {
    handleProductClick(product);
  }, [product, handleProductClick]);

  return (
    <div
      className={`product-card text-center border rounded`}
      style={{ height: "100%" }}
    >
      <div
        className="position-relative product-img-container"
        style={{ height: "75%" }}
      >
        <img
          src={product.image}
          alt={`${product.name}-image`}
          className="img-fluid product-img main-img"
        />
        <img
          src={product.secondImage}
          alt={`${product.name}-second-image`}
          className="img-fluid product-img hover-img"
        />
        <div className="product-option position-absolute">
          <i
            className={`bi ${
              existingWishlistItem(product.id)
                ? "bi-heart-fill text-success"
                : "bi-heart"
            }`}
            onClick={handleToggleWishlist}
          ></i>
        </div>
        <button
          className="btn add-cart-btn position-absolute"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
      <div
        className="product-info p-3"
        onClick={handleProductDetails}
        style={{ cursor: "pointer", height: "25%" }}
      >
        <h5 className="mt-3">{product.name}</h5>
        <div className="text-warning mb-2 stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <i
              key={star}
              className={
                product.rating >= star
                  ? "ri-star-fill"
                  : product.rating >= star - 0.5
                  ? "ri-star-half-line"
                  : "ri-star-line"
              }
            ></i>
          ))}
        </div>

        <div className="mb-1 product-price">
          <span className="texr-muted text-decoration-line-through">
            ${product.price}
          </span>
          <span className="text-success fw-bold ms-2">
            ${product.offerPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
