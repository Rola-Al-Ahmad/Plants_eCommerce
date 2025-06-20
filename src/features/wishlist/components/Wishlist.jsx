import React from "react";

import emptyWishlistImage from "../../../../public/assets/emptyWishlistImage.png";

import TBody from "../../../shared/components/molecules/TBody";

import { useWishListContext } from "../hooks/useWishListContext";
import useCartContext from "../../cart/hooks/useCartContext";

import TableWithActions from "../../../shared/components/templates/TableWithActions";

const Wishlist = () => {
  const {
    items: wishlistItem,
    removeItem: handleRemoveFromWishlist,
    clearItems: handleClearWishlist,
  } = useWishListContext();

  const { addToCart } = useCartContext();

  const renderWishlistRow = (product, handleTrashClick) => (
    <>
      <td className="d-flex align-items-center gap-3 text-start">
        <TBody.ProductImage product={product} />
        <div>
          <TBody.ProductName>{product.name}</TBody.ProductName>
          <TBody.ProductDescription>
            {product.description}
          </TBody.ProductDescription>
        </div>
      </td>
      <TBody.ProductPrice>{product.price}</TBody.ProductPrice>
      <TBody.ProductStock />
      <TBody.AddToCart onClick={() => addToCart(product)} />
      <TBody.RemoveFromTable onClick={() => handleTrashClick(product)} />
    </>
  );

  return (
    <TableWithActions
      items={wishlistItem}
      emptyImage={emptyWishlistImage}
      emptyText="wishlist"
      tableTitle="My Wishlist"
      tableHeadings={["Product", "Price", "Stock Status", "Action", "Remove"]}
      modalName="Wishlist"
      onClearItems={handleClearWishlist}
      onRemoveItem={handleRemoveFromWishlist}
      renderRow={renderWishlistRow}
    />
  );
};

export default React.memo(Wishlist);
