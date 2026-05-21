import React from "react";
import useCartContext from "../hooks/useCartContext";

import CartTotals from "./CartTotals";

import emptyCartImage from "../../../assets/emptyCartImage.png";

import TBody from "../../../shared/components/molecules/TBody";
import TableWithActions from "../../../shared/components/templates/TableWithActions";

const Cart = () => {
  const { cartItem, handleRemoveFromCart, handleClearCart, updateQuantity } =
    useCartContext();

  const renderCartRow = (product, handleTrashClick) => (
    <>
      <td className="text-start d-flex align-items-center">
        <TBody.ProductImage product={product} />
        <div className="ms-3">
          <TBody.ProductName>{product.name}</TBody.ProductName>
        </div>
      </td>
      <TBody.ProductPrice>{product.price}</TBody.ProductPrice>
      <TBody.QuantityInput
        quantity={product.quantity}
        onChange={(e) => updateQuantity(product.id, e.target.value)}
      />
      <TBody.ProductSubTotal product={product} />
      <TBody.RemoveFromTable onClick={() => handleTrashClick(product)} />
    </>
  );

  return (
    <section className="pb-5">
      <div className="container">
        <TableWithActions
          items={cartItem}
          emptyImage={emptyCartImage}
          emptyText="cart"
          tableTitle="Shopping Cart"
          tableHeadings={["Product", "Price", "Quantity", "SubTotal", "Remove"]}
          modalName="Cart"
          onClearItems={handleClearCart}
          onRemoveItem={handleRemoveFromCart}
          renderRow={renderCartRow}
        />

        <CartTotals />
      </div>
    </section>
  );
};

// 🧠 Prevents unnecessary re-renders unless props/context values change
export default React.memo(Cart);
